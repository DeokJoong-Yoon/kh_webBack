let buttonCheck = 0;	// 수정버튼과 삭제버튼을 구별하기 위한 변수
$(function() {
	$("#pwdChk").css("visibility", "hidden");
	
	/* 수정 버튼 클릭 시 처리 이벤트  */
	$("#updateFormBtn").on("click", ()=> {
		$("#f_data").attr({
			"method" : "get",
			"action" : "/board/updateForm"
		});
		$("#f_data").submit();
	});
	
	/* 삭제 버튼 클릭시 처리 이벤트 */
	$("#boardDeleteBtn").on("click", ()=>{
		$("#f_data").attr({
			"method" : "post",
			"action" : "/board/boardDelete"	
		});
		$("#f_data").submit();
	});
	
	/* 글쓰기 버튼 클릭 시 처리 이벤트 */
	$("#insertFormBtn").click(function() {
		location.href="/board/writeForm";
	});
	
	/* 목록 버튼 클릭 시 처리 이벤트 */
	$("#boardListBtn").click(function() {
		location.href="/board/boardList";
	});
	
	/** 저장 버튼 클릭 시 이벤트 */
	$("#boardInsertBtn").on("click", function() {
		// 입력값 체크
		if (!chkData("#boardName", "작성자를 ")) return;
		else if (!chkData("#boardTitle", "글제목을 ")) return;
		else if (!chkData("#boardContent", "글내용을 ")) return;
		else if (!chkData("#boardPasswd", "비밀번호를 ")) return;
		else {
			// enctype 속성 기본 값을 "application/x-www-form-urlcencoded". POST 방식을 전송에 기본 값으로 사용
			$("#f_writeForm").attr({
				"method" : "post",
				"action" : "/board/boardInsert"
			});
			$("#f_writeForm").submit();
		}
	});
	
	/** 취소 버튼 클릭 시 처리 이벤트 */
	$("#boardCancelBtn").on("click", function(){
		$("#f_writeForm").each(function() {
			this.reset();
		});
	});
	
	/** 목록 버튼 클릭 시 처리 이벤트 */
	$("#boardListBtn").on("click", function() {
		location.href="/board/boardList";
	});
	
})