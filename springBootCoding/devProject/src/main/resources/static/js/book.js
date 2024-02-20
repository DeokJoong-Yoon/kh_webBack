$(function() {
	$("#insertBtn").click(()=>{
		if(!chkData("#title", "책제목을")) return;
		else if (!chkData("#publisher", "출판사를")) return;
		else if (!chkData("#year", "출간연도를")) return;
		else if (!chkData("#price", "책가격을")) return;
		else {
			$("#insertForm").attr("method", "post");
			if($("#bookId").val() == "0") {
				$("#insertForm").attr("action", "/book/bookInsert");	
			} else {
				$("#insertForm").attr("action", "/book/bookUpdate");
			}
			$("#insertForm").submit();
		}
	});
	
	$("#cancelBtn").click(function() {
		$("#insertBtn").html("책정보등록");
		$("#bookId").val(0);
		$("#insertForm").each(function() {
			this.reset();
		});
	});
	
	$(".updateBtn").click(function() {
		$("#insertBtn").html("책정보수정");
		
		let bookId = $(this).parents("tr").attr("data-id");
		$("#bookId").val(bookId);
		 
		let title = $(this).parents("tr").children().eq(1).html();
		$("#title").val(title);
		
		let publisher = $(this).parents("tr").children().eq(2).html();
		$("#publisher").val(publisher);
		
		let year = $(this).parents("tr").children().eq(3).html();
		$("#year").val(year);
		
		let price = $(this).parents("tr").children().eq(4).html();
		$("#price").val(price);

	});
	
	
	$(".deleteBtn").click(function() {
		let bookId = $(this).parents("tr").attr("data-id");
		if(confirm("선택하신 책 삭제하시겠습니까?")) {
			location.href = "/book/bookDelete?bookId=" + bookId;
		}
	});
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});	// $() 종료