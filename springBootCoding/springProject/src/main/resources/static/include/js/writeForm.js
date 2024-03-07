$(function() {
	/** 저장 버튼 클릭 시 이벤트 */
	$("#boardInsertBtn").on("click", function() {
		// 입력값 체크
		if (!chkData("#boardName", "작성자를 ")) return;
		else if (!chkData("#boardTitle", "글제목을 ")) return;
		else if (!chkData("#boardContent", "글내용을 ")) return;
		else if (!chkData("#boardPasswd", "비밀번호를 ")) return;
		// else if (!chkData("#file", "업로드할 이미지 파일을")) return; 필수요소일때
		else {
			if($("#file").val() != "") { // 업로드할 이미지 파일이 존재한다면
				// 확장자 png, jpg, gif 외 파일을 업로드 할 수 없습니다. 또는 gif, png, jpg 파일만 업로드 할 수 있습니다.
				if(!chkFile($("#file"))) return;	//	 이미지 파일만 업로드 가능.
			}
			// enctype 속성 기본 값을 "application/x-www-form-urlcencoded". POST 방식을 전송에 기본 값으로 사용
			$("#f_writeForm").attr({
				"method" : "post",
				"enctype" : "multipart/form-data",
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