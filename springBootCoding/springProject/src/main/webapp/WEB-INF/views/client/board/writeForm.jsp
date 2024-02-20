<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/common/common.jspf" %>
<!DOCTYPE html>
												
<html>
	<body>
	<div><h1>글쓰기</h1></div>
		<form>
			<table>
				<div class="row">
					<label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">글제목</label>
					<div class="col-sm-10">
						<input type="text" class="form-control form-control-lg" id="colFormLabelLg" placeholder="제목을 입력하세요.">
					</div>
					<label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">작성자</label>
					<div class="col-sm-10">
						<input type="text" class="form-control form-control-lg" id="colFormLabelLg" placeholder="작성자를 입력하세요.">
					</div>
					
					<div class="mb-10">
						<label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">글내용</label>
						<textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
					</div>
				</div>
			</table>	
		</form>
		<script src="/resources/include/js/writeForm.js"></script>
	</body>
</html>