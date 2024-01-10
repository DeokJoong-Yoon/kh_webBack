$(function() {
	$("#searchBtn").on("click", () => {
		let numberPattern = /^[0-9]*$/;
		//let parseS_num = Integer.parseInt($("#s_num").val());
		let parseS_num = $("#no").val();
		if(!chkData("#no", "학과 일련번호를 ")) return;
		else if(!numberPattern.test(parseS_num)) {
			alert("숫자만 입력해 주세요.");
			$("#no").val("");
			$("#no").focus();
			return;
		}
		else{
			$("#searchfrm").attr({
				"method" : "post",
				"action" : "/servletExample/searchResult"
			});
			$("#searchfrm").submit();
		}
	});
});