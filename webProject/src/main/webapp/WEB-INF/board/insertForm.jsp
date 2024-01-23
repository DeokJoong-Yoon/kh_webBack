<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %>
<%@ include file="/WEB-INF/common/common.jsp" %>
	<body>
		<div class="containter">
			<div class="text-center"><h3>게시판 입력화면</h3></div>
			<form id="f_writeForm">
				<div class="mb-3 row">
    				<label for="author" class="col-sm-2 col-form-label">작 성 자</label>
    				<div class="col-sm-10">
      					<input type="text" class="form-control" name="author" id="author" />
    				</div>
  				</div>
				<div class="mb-3 row">
    				<label for="title" class="col-sm-2 col-form-label">글 제 목</label>
    				<div class="col-sm-10">
      					<input type="text" class="form-control" name="title" id="title" placeholder="글제목 입력" />
    				</div>
  				</div> 				
				<div class="mb-3 row">
    				<label for="content" class="col-sm-2 col-form-label">글 내 용</label>
    				<div class="col-sm-10">
    					<textarea name="content" id="content" rows="content" cols="content" class="form-control" rows="8"></textarea>
    				</div>
  				</div>
				<div class="mb-3 row">
    				<label for="passwd" class="col-sm-2 col-form-label">비밀번호</label>
    				<div class="col-sm-10">
      					<input type="password" class="form-control" name="passwd" id="passwd" placeholder="비밀번호 입력" />
    				</div>
  				</div>  				
			</form>
			<div class="text-end">
				<button type="button" id="boardInsert" class="btn btn-primary">입력</button>
				<button type="button" id="boardListBtn" class="btn btn-primary">목록</button>
			</div>
		</div>
		<script src="/include/js/insertForm.js"></script>
	</body>
</html>