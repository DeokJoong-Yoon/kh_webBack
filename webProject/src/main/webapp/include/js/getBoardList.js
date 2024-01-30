$(function() {
	$(".goDetail").on("click", function() {
		// let num = $(this).parents("tr").children().eq(0).html();
		// 			이벤트가 발생한 자기자신. 자신을 포함한 부모요소 중 tr을 찾아. tr의 속성인 data-num의 값을 읽어옴
		let num = $(this).parents("tr").attr("data-num");
		//console.log(num);
		
		// 폼 태그 내 num요소에 value 설정
		$("#num").val(num);
		// post 방식으로 상세 페이지 이동
		$("#detailForm").attr({
			"method" : "post",
			"action" : "/board/detailBoard.do"
		});
		$("#detailForm").submit();
		
		// get 방식으로 상세 페이지 이동
		// location.href="/board/detailBoard.do?num="+num;
	});
	
	$("#writeForm").on("click", function() {
		//console.log("글쓰기 버튼 클릭");
		location.href ="/board/insertForm.do";
	});
	
	$("#searchBtn").on("click", function() {
		if($("#search").val() != "all") {
			if(!chkData("#keyword", "검색어를")) return;
		} else if($("#search").val() == "all") {
			$("#keyword").val("");
		}
		$("#f_search").attr({
			"method" : "post",
			"action" : "/board/getBoardList.do"
		});
		$("#f_search").submit();
	});
	

});