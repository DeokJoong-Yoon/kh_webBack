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
	
	$("#listBtn").on("click", () => {
		location.href = "/servletExample/list";
	});
});
