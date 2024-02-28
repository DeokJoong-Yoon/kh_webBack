<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/common/common.jspf"%>


<tr>
	<td></td>
	<td colspan="3"></td>
</tr>

<script type="text/javascript">
function template(replyName, replyContent, replyDate) {
	let $div = $('#list');
	
	let $element = $('#media-template').clone().removeAttr('id');
	$element.attr("data-seq", animalSeq);
	$element.addClass("animal-list");
	$element.find('.item-place').html(foundPlace);
	$element.find('.item-heading').html(species + " - " + age);
	$element.find('.item-color').html(hairColor);
	$element.find('.item-memo').html(memo);
	
	$div.append($element);
}
	$(function() {
			data();
		});
	function data() {
		let b_num = ${param.boardNumber};
		$.ajax({
			url : "/data/replies/" + b_num,
			type : "get",
			dataType : "json",
			success : function(data) {
				let replyName = $(data).find("replyName").text();
				let replyContent = $(replyContent).find("replyContent").text();
				let replyDate = $(data).find("replyDate").text();

				//template(replyName, replyContent, replyDate);
			},
			error : (xhr, textStatus, errorThrown) => {
				alert(textStatus + " (HTTP - " + xhr.status + " / " + errorThrown + " ) ");	
			}
		});
	});
</script>