
$(".goDetail").on("click", function() {
	let no = $(this).parents("tr").data("data-no");
	console.log(no);
	//locationProcess("/board/" + no);
});
$("#insertFormBtn").on("click", function() {
	alert("insertform");
	locationProcess("/board/insertForm");	
});

