<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
		<!-- 브라우저의 호환성 보기 모드를 막고, 해당 브라우저에서 지원하는 가장 최신 버전의 방식으로 HTML 보여주도록 설정.-->
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
		<!--viewport : 화면에 보이는 영역을 제어하는 기술. width는 device-width로 설정(브라우저 너비를 장치 너비에 맞추어 표시). initial-scale는 초기비율(보이는 영역과 웹 페이지를 맞춤). user-scalable는 사용자가 화면축소를 하지 못하도록 설정.-->
		<title>login.jsp</title>
		
		<link rel="shortcut icon" href="../image/icon.png" />
		<link rel="apple-touch-icon" href="../image/icon.png" />
		<!--IE8이하 브라우저에서 HTML5를 인식하기 위해서는 아래의 패스필터를 적용하면 된다.--> 
		<!--[if lt IE 9]>
		<script src="../js/html5shiv.js"></script>
		<![endif]-->
		<script type="text/javascript" src="/servletExample/js/jquery-3.7.1.min.js"></script>
		<script type="text/javascript" src="/servletExample/js/login.js"></script>
		<script src="/servletExample/js/common.js"></script>
		
	</head>
	<body>
		<form id="login">
			<fieldset>
				<div>
					<label for="memberId">아이디</label>
					<input type="text" name="memberId" id="memberId" />
				</div>
				<div>
					<label for="memberPasswd">비밀번호</label>
					<input type="password" name="memberPasswd" id="memberPasswd" />
				</div>
				<div>
					<button type="button" id="loginBtn">로그인</button>
				</div>
			</fieldset>
		</form>
	</body>
</html>