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
	
	$("#jsonBtn").on("click", () =>{
		$("#dataArea").html("");
		$.ajax({
			url : "/example/getExample",	// 전송 url
			type : "get",					// 전송시 method 방식
			dataType : "json",
			error : function(xhr, textStatus) {	// 실행시 오류가 발생하였을 경우
				alert(textStatus + " (HTTP - " + xhr.status + " ) ");
				//alert("잠시 후에 다시 접근해 주세요.");
			},
			success : function(resultData) {	// 정상적으로 실행이 되었을 경우
				let no = resultData.no;
				let name = resultData.name;
				let phone = resultData.phone;
				
				let noLi = $("<li>").html(no);
				let nameLi = $("<li>").html(name);
				let phoneLi = $("<li>").html(phone);
				
				$("#dataArea").append(noLi).append(nameLi).append(phoneLi);
			}
		});
	});
	
	$("#jsonListBtn").on("click", function(){
		$("#list").css("display", "block");
		$("#list").css("padding", "40px");
		
		$("#listData").empty();
		
		$.getJSON('/example/getList', function(data){
			$(data).each(function() {
			let no = this.no;
			let name = this.name;
			let phone = this.phone;
			
			let noTd = $("<td>").html(no);
			let nameTd = $("<td>").html(name);
			let phoneTd = $("<td>").html(phone);
			
			let tr = $("<tr>").append(noTd).append(nameTd).append(phoneTd);
			$("#listData").append(tr);
			});
		}).fail(function(xhr, textStatus) {
			alert(textStatus + " (HTTP - " + xhr.status + " ) " );
		});
	});
	
	$("#bookListBtn").on("click", function(){
		$("#bookList").css("display", "block");
		$("#bookList").css("padding", "40px");
		
		$("#bookListData").empty();
		
		$.getJSON('/example/getBookList', function(data){
			$(data).each(function() {
			let bookId = this.bookId;
			let title = this.title;
			let publisher = this.publisher;
			let year = this.year;
			let price = this.price;
			
			
			let bookIdTd = $("<td>").html(bookId);
			let titleTd = $("<td>").html(title);
			let publisherTd = $("<td>").html(publisher);
			let yearTd = $("<td>").html(year);
			let priceTd = $("<td>").html(price);
			
			let tr = $("<tr>").append(bookIdTd).append(titleTd).append(publisherTd).append(yearTd).append(priceTd);
			$("#bookListData").append(tr);
			});
		}).fail(function(xhr, textStatus) {
			alert(textStatus + " (HTTP - " + xhr.status + " ) " );
		});
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});	// $() 종료