let buttonCheck = 0;	// 수정버튼과 삭제버튼을 구별하기 위한 변수
$(function() {
	$("#pwdChk").css("visibility", "hidden");
	
	let btnInit = function() {
		$("#message").removeClass("text-danger");
		$("#message").addClass("text-primary");
		$("#message").text("작성시 입력한 비밀번호를 입력해 주세요.");
	}
	
	/* 수정 버튼 클릭 시 처리 이벤트  */
	$("#updateFormBtn").on("click", ()=> {
		/*$("#f_data").attr({
			"method" : "get",
			"action" : "/board/updateForm"
		});
		$("#f_data").submit();*/
		
		// 비밀번호 확인 후 처리
		$("#pwdChk").css("visibility", "visible");
		btnInit();
		buttonCheck = "updateButton";
	});
	
	/* 삭제 버튼 클릭시 처리 이벤트 */
	$("#boardDeleteBtn").on("click", ()=>{
		/*if(!confirm("정말 삭제하시겠습니까?")) {
			return;
		} else {
			$("#f_data").attr({
			"method" : "post",
			"action" : "/board/boardDelete"	
			});
			$("#f_data").submit();
		}*/
		
		// 비밀번호 확인 후 처리
		$("#pwdChk").css("visibility", "visible");
		btnInit();
		buttonCheck = "deleteButton";
	});
	
	/* 비밀번호 입력 양식 enter 제거 */
	$("#boardPasswd").bind("keydown", function(event) {
		if (event.keyCode === 13) { // 0 == "0" -> 값비교(true) 0 === "0" -> 값과 자료형 비교(false)
			event.preventDefault();
			// $("#passwdBtn").click();
		}
	});
	
	$("#boardPasswd").on("keyup", ()=> {
		btnInit();
	});
	
	/* 비밀번호 취소 버튼 클릭 시 처리 이벤트 */
	$("#passwdCancelBtn").on("click", function() {
		$("#boardPasswd").val("");
		$("#pwdChk").css("visibility", "hidden");
		buttonCheck = "";
	});
	
	/* 비밀번호 확인 버튼 클릭 시 처리 이벤트 */
	$("#passwdBtn").on("click", function() {
		$.ajax({
			url : "/board/pwdConfirm",	// 전송 url
			type : "post",				// 전송 시 method 방식
			data : $("#f_passwdCheck").serialize(),	// 폼전체 데이터 전송
			error : function() {
				alert('시스템 오류 입니다. 관리자에게 문의하세요.');
			},
			beforeSend : function() {
				if(!dataCheck("#boardPasswd", "#message", "비밀번호를 ")) return false;
			},
			success : function(resultData) { // 정상적으로 실행이 되었을 경우
				if(resultData == "불일치") {	// 일치하지 않는 겨웅
					$("#message").addClass("text-danger");
					$("#message").text("작성시 입력한 비밀번호가 일치하지 않습니다.");
					$("#boardPasswd").select();
				} else if (resultData == "일치") {	// 일치할 경우
					$("#message").text("");
					if(buttonCheck == "updateButton") {	// 수정버튼 클릭
						actionProcess("get", "/board/updateForm");
					} else if (buttonCheck=="deleteButton") {	// 삭제버튼 클릭
						if(confirm("정말 삭제하시겠습니까?")) {
							actionProcess("post", "/board/boardDelete");
						}
					}
				}
			}
		});
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

function actionProcess(method, goUrl) {
	$("#f_data").attr({
		"method" : method,
		"action" : goUrl
	});
	$("#f_data").submit();
}