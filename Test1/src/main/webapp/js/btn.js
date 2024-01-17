$(function() {
	$("#btn").on("click", function() {
		let userNo = $("#userNo").val();
		
		if(!chkData("#userNo", "회원 정보")) return;
		else {
			location.href = "/Test1/selectUser?userNo="+userNo;	
		}
		/*
		$("#form").attr({
			"method" : "get",
			"action" : "/Test1/selectUser"
		});
		$("#form").submit();
		*/
	});
});