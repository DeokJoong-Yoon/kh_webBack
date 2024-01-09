$(function() {
	//학과 정보 등록 버튼 제어
	$("#subjectInsert").on("click", () => {
		location.href = "/servletExample/subject/subjectForm.jsp";
	});
	
	/*
	let number;
	$(document).on("click", ".subjectUpdate", function(){
		number = $(this).parents('tr').attr('data-no');
		let s_name = prompt("변경할 학과명을 입력하세요");
		if(s_name.replace(/\s/g, "") == "") {
			alert("학과명을 입력하세요.");
			return;
		} else {
			location.href="/servletExample/update?no=" + number + "&s_name=" + s_name;
		}
	});
	
		$(".subjectDelete").on("click", function() {
		number = $(this).parents('tr').attr('data-no');
		if(confirm("삭제하시겠습니까?")) {
			location.href="/servletExample/delete?no=" + number;
		} else {
			alert("삭제를 취소합니다.");
			return;
		}
	});
	*/
	
	// "수정" 버튼 제어
	$(".updateBtn").on("click", function(){
		let no = $(this).parents("tr").attr('data-no');
		$("#no").val(no);
		
		let s_num = $(this).parents("tr").find("td:eq(1)").html();
		$("#s_num").val(s_num);
		
		let s_name = $(this).parents("tr").find("td:eq(2)").html();
		$("#s_name").val(s_name);
		
		$("#insertBtn").html("수정완료");
		$("#insertBtn").addClass("upBtn");
		$(".upBtn").removeAttr("id");
	});
	
	// "수정완료" 버튼 제어
	$(document).on("click", ".upBtn", () => {
		if(!chkData("#s_name", "학과명을 ")) return;
		else {
			$("#subject").attr({
				"method" : "post",
				"action" : "/servletExample/update"
			});
			$("#subject").submit();
		}
	});
	
	// "삭제" 버튼 제어
	$(".deleteBtn").on("click", function() {
		let s_num = $(this).parents("tr").find("td:eq(1)").html();
		let no = $(this).parents("tr").attr("data-no");
		
		$.ajax({
			url : "/servletExample/studentCheck",
			type : "post",
			data : "s_num=" + s_num,
			dataType : "text",
			success : function(data) {
				if(data > 0) {
					alert("소속된 학생이 존재함으로 학과데이터를 삭제할 수 없습니다.");
					return;
				} else {
					if(confirm("삭제하시겠습니까?")) {
						location.href="/servletExample/delete?no=" + no;
					}
				}
			},
			error : function(xhr, textStatus ) {
				alert(textStatus + " (HTTP - " + xhr.status + " ) ");
			}
		});
	});
});