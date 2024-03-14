$(function() {
	/* 제목 클릭시 상세 페이지 이동을 위한 처리 이벤트 */
	$(".goDetail").on("click", function() {
		
		/*let boardNumber = $(this).parents("tr").attr("data-num");
		location.href="/board/boardDetail?boardNumber=" + boardNumber;
		*/
		
		/* form을 생성하여 제어 */
		let boardNumber = $(this).parents("tr").attr("data-num");
		$("#boardNumber").val(boardNumber);
		
		// 상세 페이지로 이동하기 위해 form 추가 (id : detailForm)
		$("#detailForm").attr({
			"method" : "get",
			"action" : "/board/boardDetail"
		});
		$("#detailForm").submit();
	});
	
	
	$("#insertFormBtn").on("click", () => {
		location.href = "/board/writeForm";
	});
	
	
	/* 입력 양식 enter 제거 */
	$("#keyword").bind("keydown", function(event) {
		if (event.keyCode == 13) {
			event.preventDefault();
		}
	});
	
	/* 검색 대상이 변경될 때마다 처리 이벤트 */
	$("#search").on("change", function() {
		if ($("#search").val() == "all") {
			$("#keyword").val("전체 목록을 조회합니다.");
		} else if ($("#search").val() !="all") {
			$("#keyword").val("");
			$("#keyword").focus();
		} 
	});
	
	/* 검색 버튼 클릭 시 처리 이벤트 */
	$("#searchData").on("click", function() {
		if ($("#search").val() != "all") {
			if (!chkData("#keyword", "검색어를")) return;
		}
		$("#pageNum").val(1);	// 페이지 초기화
		goPage();
	});
	
	/* 페이징 처리 이벤트 */
	$(".page-item a").on("click", function(e) {
		e.preventDefault();
		$("#f_search").find("input[name='pageNum']").val($(this).attr("href"));
		goPage();
	});
});

function goPage() {
	if ($("#search").val() == "all") {
		$("#keyword").val("");
	}
	$("#f_search").attr({
		"method" : "get",
		"action" : "/board/boardList"
	});
	$("#f_search").submit();
}