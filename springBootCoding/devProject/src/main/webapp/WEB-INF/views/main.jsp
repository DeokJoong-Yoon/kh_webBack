<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		
		<link rel="shortcut icon" href="/resources/image/icon.png" />
		<link rel="apple-touch-icon" href="/resources/image/icon.png" />
		<title>시작 페이지</title>
		
		<style type="text/css">
			form {margin-botton: 30px;}
			div#list {display: none}
		</style>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" >
		
		
	</head>
	<body>
		<div class="contrainer">
			<div class="text-center"><h3>웹 MVC 관련 예제</h3></div>	
			
			<h5>매개변수 처리 예제</h5>
			<form id="exam01Form" class="form-inline">
				<div class="form-group">
					<label class="sr-only">이름</label>
					<input type="text" class="form-control" name="name" id="name" placeholder="이름 입력" />
				</div>
				<div class="form-group">
					<label class="sr-onle">나이</label>
					<input type="text" class="form-control" name="age" id="age" placeholder="나이 입력" />
				</div>
				<button type="button" id="exam01Btn" class="btn btn-success">exam01 예제 확인</button>
				<button type="button" id="exam02Btn" class="btn btn-success">exam02 예제 확인</button>
			</form>
			<br />	
			<h5>매개변수 값을 배열(Array) 처리 예제 - name=hobby</h5>
			<form id="exam02ArrayForm">
				<label class="checkbox=inline">
					<input type="checkbox" name="hobby" value="여행"> 여행
				</label>
				<label class="checkbox=inline">
					<input type="checkbox" name="hobby" value="영화, 드라마 감상"> 영화, 드라마 감상
				</label>
				<label class="checkbox=inline">
					<input type="checkbox" name="hobby" value="운동"> 운동
				</label>
				<label class="checkbox=inline">
					<input type="checkbox" name="hobby" value="독서"> 독서
				</label>
				<label class="checkbox=inline">
					<input type="checkbox" name="hobby" value="맛집 탐방"> 맛집 탐방
				</label>
				<button type="button" id="exam02ArrayBtn" class="btn btn-success">exam02Array 예제 확인</button>
			</form>
			<br />
			<h5>매개변수 값을 List 타입에 대입 예제 - name="language"</h5>
			<form id="exam02ListForm">
				<label class="checkbox-inline">
					<input type="checkbox" name="language" value="java"> java
				</label>
				<label class="checkbox-inline">
					<input type="checkbox" name="language" value="jsp"> jsp
				</label>
				<label class="checkbox-inline">
					<input type="checkbox" name="language" value="oracle"> oracle
				</label>
				<label class="checkbox-inline">
					<input type="checkbox" name="language" value="spring"> spring
				</label>
				<label class="checkbox-inline">
					<input type="checkbox" name="language" value="jquery"> jquery
				</label>
				<button type="button" id="exam02ListBtn" class="btn btn-success">exam02ListBtn 예제 확인</button>
			</form>
		</div>
		<form id="exam02BeanForm">
			<div class="mb-3">
	  			<label for="name" class="form-label">이름</label>
	  			<input type="text" class="form-control" name="list[0].name" placeholder="이름 입력" />
			</div>
			<div class="mb-3">
	  			<label for="age" class="form-label">나이</label>
	  			<input type="text" class="form-control" name="list[0].age" placeholder="나이 입력" />
			</div>
			<div class="mb-3">
	  			<label for="name" class="form-label">이름</label>
	  			<input type="text" class="form-control" name="list[1].name" placeholder="이름 입력" />
			</div>
			<div class="mb-3">
	  			<label for="age" class="form-label">나이</label>
	  			<input type="text" class="form-control" name="list[1].age" placeholder="나이 입력" />
			</div>
			<div class="mb-3">
	  			<label for="name" class="form-label">이름</label>
	  			<input type="text" class="form-control" name="list[2].name" placeholder="이름 입력" />
			</div>
			<div class="mb-3">
	  			<label for="age" class="form-label">나이</label>
	  			<input type="text" class="form-control" name="list[2].age" placeholder="나이 입력" />
			</div>
			<button type="button" id="exam02BeanBtn" class="btn btn-success">exam02BeanBtn 예제 확인</button>
		</form>
		<br />
		<form id="exam02Bean1Form">
		<h5>ExampleVO 값 처리 예제</h5>
			<div class="mb-3">
	  			<label for="no" class="form-label">번호</label>
	  			<input type="text" class="form-control" name="no" placeholder="번호 입력" />
			</div>
			<div class="mb-3">
	  			<label for="name" class="form-label">이름</label>
	  			<input type="text" class="form-control" name="name" placeholder="이름 입력" />
			</div>
			<div class="mb-3">
	  			<label for="phone" class="form-label">전화번호</label>
	  			<input type="text" class="form-control" name="phone" placeholder="전화번호 입력" />
			</div>
			<button type="button" id="exam02Bean1Btn" class="btn btn-success">exam02BeanBtn 예제 확인</button>
		</form>
		<br />		
		<form id="exam03Form">
		<h5>DTO와 일반 매개변수 값 처리 예제</h5>
			<div class="mb-3">
	  			<label for="name" class="form-label">이름</label>
	  			<input type="text" class="form-control" name="name" placeholder="이름 입력" />
			</div>
			<div class="mb-3">
	  			<label for="age" class="form-label">나이</label>
	  			<input type="text" class="form-control" name="age" placeholder="나이 입력" />
			</div>
			<div class="mb-3">
	  			<label for="number" class="form-label">상품번호</label>
	  			<input type="text" class="form-control" name="number" placeholder="상품번호 입력" />
			</div>
			<button type="button" id="exam03Btn" class="btn btn-success">exam03 예제 확인</button>
		</form>
		<br />
		
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>		
		<script src="/resources/js/jquery-3.7.1.min.js"></script>
		<script src="/resources/js/main.js"></script>
	</body>
</html>