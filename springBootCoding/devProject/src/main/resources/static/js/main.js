$(function() {
	$("#exam01Btn").on("click", ()=>{
		$("#exam01Form").attr({
			method:"get",
			action:"/sample/exam01"
		});
		$("#exam01Form").submit();
	});
	
	$("#exam02Btn").on("click", ()=> {
		$("#exam01Form").attr({
			method : "get",
			action : "sample/exam02"
		});
		$("#exam01Form").submit();
	});
	
	$("#exam02ArrayBtn").on("click", ()=>{
		$("#exam02ArrayForm").attr({
			method : "get",
			action : "sample/exam02Array"
		});
		$("#exam02ArrayForm").submit();
	});
	
	$("#exam02ListBtn").on("click", ()=>{
		$("#exam02ListForm").attr({
			method : "get",
			action : "sample/exam02List"
		});
		$("#exam02ListForm").submit();
	});
	
	$("#exam02BeanBtn").on("click", ()=>{
		$("#exam02BeanForm").attr({
			method : "get",
			action : "sample/exam02Bean"
		});
		$("#exam02BeanForm").submit();
	});
	
	$("#exam02Bean1Btn").on("click", ()=>{
		$("#exam02Bean1Form").attr({
			method : "get",
			action : "sample/exam02Bean1"
		});
		$("#exam02Bean1Form").submit();
	});
	
	$("#exam03Btn").on("click", ()=>{
		$("#exam03Form").attr({
			method : "get",
			action : "sample/exam03"
		});
		$("#exam03Form").submit();
	});
});	// $() 종료