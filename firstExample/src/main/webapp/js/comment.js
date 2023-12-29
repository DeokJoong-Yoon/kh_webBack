/* 새로운 글을 화면에 추가하기 위한 함수 */
let num = 0; 

//아래 함수 addNewItem(글번호,작성자 이름,덧글 내용,작성일시)
function addNewItem(num, writer, content, datetime) {
	let new_li = $("<li>");
	new_li.attr("data-num", num); // jQuery에서 속성명으로 data-를 허용함.
	new_li.addClass("comment_item");

	let writer_p = $("<p>");
	writer_p.addClass("writer");

	let name_span = $("<span>");
	name_span.addClass("name");
	name_span.html(writer + "님");

	let date_span = $("<span>");
	date_span.html(" / " + datetime + " ");

	let del_input = $("<input>");
	del_input.attr({ // 속성 설정이 하나 이상 시 json 형태로 정의.
		"type" : "button", 
		"value" : "삭제하기"
	});
	del_input.addClass("delete_btn");

	let content_p = $("<p>");
	content_p.html(content);
	// 동적 요소 조합
	writer_p.append(name_span).append(date_span).append(del_input);
	new_li.append(writer_p).append(content_p);
	$("#comment_list").append(new_li);
} //addNewItem 함수 종료.

// 작성자/댓글내용 초기화 함수
function dataReset(){
	$("#user_name").val("");
	$("#comment").val("");
	$("#user_name").focus();
} // dataReset 함수 종료.

$(function() {
	$.get("../ajax/comment/comment_list_my.json", "", function(data) {
		let item = data.comment.item;
		for(let i=0; i < data.comment.item.length; i++){
			num = item[i].num;           // num = data.comment.item[i].num;
			let writer = item[i].writer;
			let content = item[i].content;
			let datetime = item[i].datetime;
			addNewItem(num, writer, content, datetime); 
		}
		num = data.comment.item[0].num;
	}).fail(function() {
		alert("덧글 목록을 불러오는데 실패하였습니다. 잠시후에 다시 시도해 주세요.");
	});
	
	/**  저장하기 버튼 클릭시 이벤트*/
	$("#comment_form").on("submit", function(event){
		event.preventDefault();
		
		// 작성자 이름에 대한 입력여부 검사
		if ($("#user_name").val().replace(/\s/g, "") == "") {
			alert("작성자를 입력해 주세요.");
			$("#user_name").val("");
			$("#user_name").focus();
			return;
		}
		
		// 내용에 대한 입력 여부 검사
		if ($("#comment").val().replace(/\s/g, "") == "") {
			alert("댓글 내용을 입력해 주세요.");
			$("#comment").val("");
			$("#comment").focus();
			return;
		}
		++num;
		console.log(num);
		let writer = $("#user_name").val();
		let content = $("#comment").val();
		let datetime = new Date().toLocaleString();
		
		// 저장 결과를 새로운 목록으로 출력하기 위해서 함수 호출
		addNewItem(num, writer, content, datetime);
		dataReset();
	});

	/** 삭제하기 버튼 클릭시 이벤트 */
	$(document).on("click", ".delete_btn", function() {
		if (confirm("정말 선택하신 항목을 삭제하시겠습니까?")) {
			let target = $(this).parents(".comment_item");
			target.remove();
			target.removeClass();
		}
	});
});