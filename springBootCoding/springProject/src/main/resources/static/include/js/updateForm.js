$(function() {
	/* 수정 버튼 클릭 시 처리 이벤트 */
	$("#boardUpdateBtn").on("click", function() {
		// 입력값 체크
		if (!chkData("#boardTitle", "글제목을 ")) return;
		else if (!chkData("#boardContent", "글내용을 ")) return;
		else {
			$("#f_updateForm").attr({
				"method" : "post",
				"action" : "/board/boardUpdate"
			});
			$("#f_updateForm").submit();
		}
	});
	
	/* 취소 버튼 클릭 시 처리 이벤트 */
	$("#boardCancelBtn").on("click", function() {
		$("#f_updateForm").each(function() {
			this.reset();
		});
	});
	
	/* 목록 버튼 클릭 시 처리 이벤트 */
	$("#boardListBtn").on("click", function() {
		location.href="/board/boardList";
	});
	
});