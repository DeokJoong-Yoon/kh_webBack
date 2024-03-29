
let keyword = $("#keyword").val();
let search = $("#search").val();

/* 날짜 검색 화면 제어 */
if(search !="b_date") {
	let now = new Date();
	$(".dateArea").hide();
	let start = getDateFormat(new Date(now.setMonth(now.getMonth()-1)));
	let end = getDateFormat(new Date());
	
	$('#startDate').val(start);
	$('#endDate').val(end);
} else {
	$(".textArea").hide();	
}

/* 입력 양식 enter 제거 */
$("#keyword").bind("keydown", function(event) {
	if(event.keyCode == 13) {
		event.preventDefault();
	}
});

/* 검색 버튼 클릭 시 처리 이벤트 */
$("#searchBtn").on("click", function() {
	if($("#search").val() !="b_date") {
		$("#startDate").val("");
		$("#endDate").val("");
		if(!chkData("#keyword", "검색어를")) return;
	} else if($("#search").val() == "b_date") {
		$("#keyword").val("");
		if(!chkData("#startDate", "시작날자를")) return;
		else if(!chkData("#endDate", "종료날자를")) return;
		else if($('#startDate').val()>$('#endDate').val()) {
			alert("시작날자가 종료날자보다 더 클 수 없습니다.");
			return;
		}
	}
	$("#pageNum").val(1); // 페이지 초기화
	actionProcess("#searchForm", "get", "/board/boardList");
});

$("allSearchBtn").on("click", function() {
	locationProcess("/board/boardList");
});

/* 검색 대상이 변경될 때마다 처리 이벤트 */
$("#search").change(function() {
	if($("#search").val() != "b_date") {
		$(".dateArea").hide();
		$(".textArea").show();
		$("#keyword").val("");
		$("#keyword").focus();
	}if($("#search").val()=="b_date") {
		$(".textArea").hide();
		$(".dateArea").show();
	}
});

$(".goDetail").on("click", function() {
	let boardNumber = $(this).parents("tr").data("num");
	locationProcess("/board/"+boardNumber);
});
$("#insertFormBtn").on("click", function() {
	locationProcess("/board/insertForm");	
});

/*페이징 처리 */
$(".page-item a").on("click", function(e) {
	e.preventDefault();
	$("#searchForm").find("input[name='pageNum']").val($(this).attr("href"));
	actionProcess("#searchForm", "get", "/board/boardList");
});




