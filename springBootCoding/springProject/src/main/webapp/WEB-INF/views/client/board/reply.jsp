<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/common/common.jspf"%>

<div>
	<div id="reviewList">
		<div class="card mb-2" id="item-template">
			<div class="card-header">
				<span class="name"></span>
				<span class="date"></span>
				<button type="button" data-btn="upBtn" class="btn btn-primary btn-sm">수정하기</button>
				<button type="button" data-btn="delBtn" class="btn btn-primary btn-sm">삭제하기</button>
			</div>
			<div class="card-body">
				<p class="card-text"></p>
			</div>
		</div>
	</div>
</div>


<script type="text/javascript">
	let message = "작성시 입력한 비밀번호를 입력해 주세요.", btnKind="", replyTotal=0;
	$(function() {
			/* 기본 댓글 목록 불러오기*/
			let boardNumber = ${detail.boardNumber};
			listAll(boardNumber);
	});	// 최상위 $ 종료.
	
	function listAll(boardNumber) {
		let url = "/replies/all/" + boardNumber;
		$.getJSON(url, function(data){	// data = [{replyNumber:1, replyName:"홍길동"}, ...{}].
			$(data).each(function(index) {
				let replyNumber = this.replyNumber;
				let replyName = this.replyName;
				let replyContent = this.replyContent;
				let replyDate = this.replyDate;
				replyContent = replyContent.replace(/(\r\n|\r\n)/g, "<br />");
				
				template(replyNumber, replyName, replyContent, replyDate);
				//$('#reviewList').append(replyNumber + replyName + replyContent + replyDate +"<br />");
			});
		}).fail(function() {
			alert("댓글 목록을 불러오는데 실패하였습니다. 잠시후에 다시 시도해 주세요.")
		});
	}
	
	/** 새로운 글을 화면에 추가하기(보여주기) 위한 함수*/
	function template(replyNumber, replyName, replyContent, replyDate) {
		let $div = $('#reviewList');
		
		let $element = $('#item-template').clone().removeAttr('id');
		$element.attr("data-num", replyNumber);
		$element.addClass("reply");
		$element.find('.card-header .name').html(replyName);
		$element.find('.card-header .date').html(" / " + replyDate);
		$element.find('.card-body .card-text').html(replyContent);
		
		$div.append($element);
	}
	
	/* 입력 폼 초기화 
	function dataReset() {
		$("#replyForm").each(function() {
			this.reset();
		});
	}*/
</script>