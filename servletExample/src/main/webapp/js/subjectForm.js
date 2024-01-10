$(function() {
	$.ajax({
		url : "/servletExample/subjectNumber",
		type : "post",
		dataType : "text",
		success : function(data) {
			$("#s_num").val(data);
		},
		// 파일 읽기에 실패한 경우
		error : function(xhr, textStatus) {
			alert(textStatus + " (HTTP - " + xhr.status + " )");
		}
	});
	
	// "입력완료" 버튼 제어
	$(document).on("click", "#insertBtn", ()=> {
		if(!chkData("#s_name", "등록할 학과명을 ")) return;
		else {
			$("#subject").attr({
				"method" : "post",
				"action" : "/servletExample/insert"
			});
			$("#subject").submit();
		}
	});
	
	// "수정완료" 버튼 제어
	$(document).on("click", ".upBtn", ()=> {
		if (!chkData("#s_name","수정할 학과명을 ")) return;
		else {
			$("#subject").attr({
				"method" : "post",
				"action" : "/serveltExample/update"
			});
			$("#subject").submit();
		}
	});
	
	// "다시쓰기" 버튼제어
	$("#resetBtn").on("click", ()=> {
		/*$("#subject").each(function() {
			this.reset();
		});
		*/
		$("#s_name").val("");
	});
	// "목록" 버튼 제어
	$("#listBtn").on("click", () => {
		location.href = "/servletExample/list";
	});
});
