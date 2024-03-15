$("#boardInsertBtn").on("click", function() {
	// 입력값 체크
	if (!chkData("#boardName", "작성자를 ")) return;
	else if (!chkData("#boardTitle", "글제목을 ")) return;
	else if (!chkData("#boardContent", "글내용을 ")) return;
	else if (!chkData("#boardPasswd", "비밀번호를 ")) return;
	else {
		actionProcess("#insertForm", "post", "/board/boardInsert");
	}
});

/** 취소 버튼 클릭 시 처리 이벤트 */
$("#boardCancelBtn").on("click", function(){
	$("#insertForm").each(function() {
		this.reset();
	});
});

/** 목록 버튼 클릭 시 처리 이벤트 */
$("#boardListBtn").on("click", function() {
	location.href="/board/boardList";
});
	
