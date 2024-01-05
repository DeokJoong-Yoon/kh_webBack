$(function() {
	$("#btn").on("click",function() {
		const namePattern =/^[가-힣] + $/g;
		if($("#name").val().replace(/\s/g, "") == "") {
			alert('이름을 입력하세요');
			$("#name").val("");
			$("#name").focus();
			return;
		}
		if($("#name").val().search(namePattern) < 0) {
			$("#name").val("");
			$("#name").attr("placeholder", "한글이름만 작성해 주세요.");
			return;
		}
		
		$("#frm").attr({
			"method" : "post",
			"action" : "/servletExample/configTest"
		});
		
		$("#frm").submit();
	});
});