$(function() {
	$("#regBtn").on("click", () => {
		/*if ($("#title").val().replace(/\s/g, "") == "") {
			alert("제목을 입력해 주세요");
			$("#title").val("");
			$("#title").focus();
			return;
		}

		if ($("#author").val().replace(/\s/g, "") == "") {
			alert("작가를 입력해 주세요.");
			$("#author").val("");
			$("#author").focus("");
			return;
		}

		if ($("#publisher").val().replace(/\s/g, "") == "") {
			alert("출판사를 입력해 주세요.");
			$("#publisher").val("");
			$("#publisher").focus();
			return;
		}

		$("#bookForm").attr({
			"action": "/servletExample/bookInput",
			"method": "post"
		});

		$("#bookForm").submit();*/
		
		if (!chkData("#title", "책제목을")) return;
		else if (!chkData("#author", "저자를")) return;
		else if (!chkData("#publisher", "출판사명을")) return;
		else {
			$("#bookForm").attr({
				"action" : "/servletExample/bookInput",
				"method" : "post"
			});
			$("#bookForm").submit();
		}
	});
});