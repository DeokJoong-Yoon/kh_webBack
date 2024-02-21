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
	
});