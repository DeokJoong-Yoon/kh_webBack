/* 제목 클릭시 상세 페이지 이동을 위한 처리 이벤트 */
$(".goDetail").on("click", function() {
	let boardNumber = $(this).parents("tr").data("num");
	locationProcess("/board/"+boardNumber);
});
$("#insertFormBtn").on("click", function() {
	locationProcess("/board/insertForm");	
});
