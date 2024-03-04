<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/common/common.jspf"%>

<div>
	<div>
		<form id="replyForm" name="replyForm">
			<div class="row mb-3">
				<label for="replyName" class="col-sm-1 col-form-label">작성자</label>
				<div class="col-sm-3">
					<input type="text" name="replyName" id="replyName" maxlength="5" class="form-control" />
				</div>
				<label for="replyPasswd" class="col-sm-1 col-form-label">비밀 번호</label>
				<div class="col-sm-3">
					<input type="password" name="replyPasswd" id="replyPasswd" maxlength="18" class="form-control" />
				</div>
				<button type="button" id="replyInsertBtn" class="btn btn-primary col-sm-1 sendBtn">저장</button>
			</div>
			<div class="row mb-3">
				<label for="replyContent" class="col-sm-1 col-form-label">댓글내용</label>
				<div class="col-sm-11">
					<textarea name="replyContent" id="replyContent" class="form-control" rows="3"></textarea>
				</div>
			</div>
		</form>
	</div>
	<div id="reviewList">
		<div class="card mb-2" id="item-template">
			<div class="card-header">
				<span class="name"></span> <span class="date"></span>
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
			
			/** 글입력을 위한 Ajax 연동 처리 */
			$(document).on("click", "#replyInsertBtn", function() {
				let insertUrl = "/replies/replyInsert";
				
				/* JSON.stringify() : JavaScript 값이나 객체를 JSON 문자열로 반환.*/
				let value = JSON.stringify({
					boardNumber:boardNumber,
					replyName:$("#replyName").val(),
					replyPasswd:$("#replyPasswd").val(),
					replyContent:$("#replyContent").val()
				});
				
				$.ajax({
					url : insertUrl,	// 전송 url
					type : "post",
					headers : {
						"Content-Type" : "application/json"
					},
					dataType : "text",
					data : value,
					error : function(xhr, textStatus, errorThrown) {
						alert(textStatus + " (HTTP - " + xhr.status + " / " + errorThrown + ")");
						// alert("시스템에 문제가 있어 잠시 후 다시 진행해 주세요.");
					},
					beforeSend : function() {
						if (!checkForm("#replyName", "작성자를"))	return false;
						else if (!checkForm("#replyPasswd", "비밀번호를"))	return false;
						else if (!checkForm("#replyContent", "댓글내용을")) return false;
							
					},
					success : function(result) {	// 서버로부터 응답코드 200으로 정상 처리가 되었을 경우
						if(result == "SUCCESS") {
							alert("댓글 등록이 완료되었습니다.");	//	입력폼 초기화
							dataReset();
							listAll(boardNumber);
						}
					}
				});
			});
	});	// 최상위 $ 종료.
	
	function listAll(boardNumber) {
		$(".reply").detach();
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
	
	/* 입력 폼 초기화 */
	function dataReset() {
		$("#replyForm").each(function() {
			this.reset();
		});
	}
	
	/**/
</script>