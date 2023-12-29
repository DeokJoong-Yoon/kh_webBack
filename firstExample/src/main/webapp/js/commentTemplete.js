let num = 0; // 전역변수

// 댓글의 내용을 보여주기 위한 함수
function template(num, writer, datetime, content) {
	let $ul = $('#comment_list');

	let $element = $('#item-template').clone().removeAttr('id');
	$element.attr("data-num", num);
	$element.find('.item-name').html(writer);
	$element.find('.item-date').html(datetime);
	$element.find('.item-content').html(content);

	$ul.append($element);
}

// 작성자/댓글내용 초기화 함수
function dataReset() {
	$("#user_name").val("");
	$("#comment").val("");
	$("#user_name").focus();
} // dataReset 함수 종료.

$(function() {
	// 현재페이지 로딩 후 comment_list.json을 읽어 화면에 출력하기 위한 코드
	$.getJSON("../ajax/comment/comment_list_my.json", function(data) {
		let item = data.comment.item;
		for (let i = 0; i < item.length; i++) {
			num = item[i].num;
			let writer = item[i].writer;
			let content = item[i].content;
			let datetime = item[i].datetime;
			template(num, writer, datetime, content);
		}
		num = item[0].num;
	}).fail(function(xhr, textStatus, errorThrown) {
		alert("덧글 목록을 불러오는데 실패하였습니다. 잠시후에 다시 시도해 주세요.");
		//alert(textStatus + " (HTTP-" + xhr.status + ")"); // 디버깅을 위해 작성.
	});

	/**  저장하기 버튼 클릭시 이벤트*/
	$("#sendBtn").on("click", function() {
		// 작성자와 댓글 내용에 대한 유효성 체크(필수항목)

		// 작성자 이름에 대한 입력여부 검사
		if ($("#user_name").val().replace(/\s/g, "") == "") {
			alert("작성자를 입력해 주세요.");
			$("#user_name").focus();
			return;
		}

		// 내용에 대한 입력여부 검사
		if ($("#comment").val().replace(/\s/g, "") == "") {
			alert("댓글 내용을 입력해 주세요.");
			$("#comment").focus();
			return;
		}

		// 입력 완료후 댓글 내용으로 출력하기 위한 함수 호출
		++num;
		console.log(num);

		let writer = $("#user_name").val();
		let content = $("#comment").val();
		let datetime = new Date().toLocaleString();

		// 저장 결과를 새로운 목록으로 출력하기 위해서 함수 호출
		template(num, writer, datetime, content);
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

}); // $함수 종료