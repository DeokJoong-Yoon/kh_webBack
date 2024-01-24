let buttonCheck = ""; // buttonCheck는 수정 버튼과 삭제버튼을 구별하기 위한 변수
$(function() {
	let btnInit = function() {
		$("#message").removeClass("text-danger");
		$("#message").addClass("text-primary");
		$("#message").text("작성시 입력한 비밀번호를 입력해 주세요.");
	}
	
	/* 수정 버튼 클릭 시 처리 이벤트 */
	$("#updateForm").on("click", ()=>{
		/*$("#f_data").attr({
			"method" : "post",
			"action" : "/board/updateForm.do"
		});
		$("#f_data").submit();*/
		
		// 비밀번호 확인후 처리
		$("#pwdChk").css("visibility", "visible");
		btnInit();
		buttonCheck = "updateButton";
	});
	
	/**삭제 버튼 클릭 시 처리 이벤트 */
	$("#boardDelete").on("click", () =>{
		/*$("#f_data").attr({
			"method" : "post",
			"action" : "/board/deleteBoard.do"
		});
		$("#f_data").submit();*/
		
		// 비밀번호 확인 후 처리
		$("#pwdChk").css("visibility", "visible");
		btnInit();
		buttonCheck = "deleteButton";
	});
	
	/** 비밀번호 입력 양식 enter 제거 */
	$("#passwd").bind("keydown", function(event){
		if (event.keyCode === 13) {
			event.preventDefault();
			//$("#passwdBtn").click();
		}
	});
	
	$("#passwd").on("keyup", ()=> {
		btnInit();
	});
	
	/** 비밀번호 취소 버튼 클릭 시 처리 이벤트 */
	$("#passwdCancelBtn").on("click", function() {
		$("#passwd").val("");
		$("#pwdChk").css("visibility", "hidden");
		buttonCheck = "";
	});
	
	/** 비밀번호 취소 버튼 클릭 시 처리 이벤트 */
	$("#passwdBtn").on("click", function() {
		$.ajax({
			url : "/board/passwdCheck.do",
			type : "post",
			data : $("#f_passwdCheck").serialize(),
			dataType : "text",
			error : function() {
				alert('시스템 오류 입니다. 관리자에게 문의 하세요');
			},
			beforeSend: function() {
				if(!dataCheck("#passwd", "#message", "비밀번호를")) return false;
			},
			success : function(resultData) { // 정상적으로 실행이 되었을 경우
				if(resultData == 0) {	// 일치하지 않는 경우
					$("#message").toggleClass("text-danger");
					$("#message").text("작성시 입력한 비밀번호가 일치하지 않습니다.");
					$("#passwd").select();
				} else if(resultData == 1) {	// 일치할 경우
					$("#message").text("");
					if(buttonCheck == "updateButton") { // 수정버튼 클릭
						$("#f_data").attr("action", "/board/updateForm.do");
						$("#f_data").submit();
					} else if(buttonCheck == "deleteButton") {
						if(confirm("정말 삭제하시겠습니까?")) {
							$("#f_data").attr("action", "/board/deleteBoard.do");
							$("#f_data").submit();
						}
					}
				}
			}
		});
	});
	/** 목록 버튼 클릭 시 처리 이벤트 */
	$("#boardListBtn").click(function() {
		location.href="/board/getBoardList.do";
	});
});