<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<%@ page trimDirectiveWhitespaces="true" %>

<div class="text-center"><h5>책정보 등록</h5></div>
<form id="insertForm">
	<input type="hidden" name="bookId" id="bookId" value ="0" />
	<div class="md-3 row">
		<label for="title" class="col-sm-2 col-form-label">책제목</label>
		<div class="col-sm-10">
			<input type="text" class="form-control" name="title" id="title" />
		</div>
	</div>
	<div class="md-3 row">
		<label for="publisher" class="col-sm-2 col-form-label">출판사</label>
		<div class="col-sm-10">
			<input type="text" class="form-control" name="publisher" id="publisher" />
		</div>
	</div>
	<div class="md-3 row">
		<label for="year" class="col-sm-2 col-form-label">출간연도</label>
		<div class="col-sm-10">
			<input type="text" class="form-control" name="year" id="year" />
		</div>
	</div>
	<div class="md-3 row">
		<label for="price" class="col-sm-2 col-form-label">책가격</label>
		<div class="col-sm-10">
			<input type="text" class="form-control" name="price" id="price" />
		</div>
	</div>
	<div class="text-end">
		<button type="button" class="btn btn-primary btn-sm" id="insertBtn">책정보등록</button>
		<button type="button" class="btn btn-primary btn-sm" id="cancleBtn">다시입력</button>
	</div>
</form>
