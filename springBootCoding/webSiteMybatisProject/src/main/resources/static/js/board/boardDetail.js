/* 수정 버튼 클릭 시 처리 이벤트 */
$("#updateFormBtn").click(function() {
	/*pwdInit("visible");
	btnInit();
	buttonCheck = "updateButton";*/
	
	actionProcess("#dataForm", "get", "/board/updateForm");
});

/* 삭제 버튼 클릭 시 처리 이벤트 */
$("#boardDeleteBtn").click(function() {
	/*pwdInit("visible");
	btnInit();
	buttonCheck = "deleteButton"; */
	if(confirm("정말 삭제하시겠습니까?")) {
		actionProcess("#dataForm", "post", "/board/boardDelete");
	}
})


$("#insertFormBtn").on("click", function() {
	locationProcess("/board/insertForm");	
});

$("#boardListBtn").on("click", function() {
	location.href="/board/boardList";
});