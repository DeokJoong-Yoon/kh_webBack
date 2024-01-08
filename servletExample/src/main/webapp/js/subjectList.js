$(function() {
	//학과 정보 등록 버튼 제어
	$("#subjectInsert").on("click", () => {
		location.href = "/servletExample/subject/subjectForm.jsp";
	});
});