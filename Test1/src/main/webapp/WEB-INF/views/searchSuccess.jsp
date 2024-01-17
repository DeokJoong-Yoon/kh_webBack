<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %>
<%@ page import="edu.kh.test.user.model.vo.UserDTO" %>
<% UserDTO dto = (UserDTO) request.getAttribute("dto"); %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
		<!-- 브라우저의 호환성 보기 모드를 막고, 해당 브라우저에서 지원하는 가장 최신 버전의 방식으로 HTML 보여주도록 설정.-->
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
		<!--viewport : 화면에 보이는 영역을 제어하는 기술. width는 device-width로 설정(브라우저 너비를 장치 너비에 맞추어 표시). initial-scale는 초기비율(보이는 영역과 웹 페이지를 맞춤). user-scalable는 사용자가 화면축소를 하지 못하도록 설정.-->
		<title>Insert title here</title>
		
		<link rel="shortcut icon" href="../image/icon.png" />
		<link rel="apple-touch-icon" href="../image/icon.png" />
		<!--IE8이하 브라우저에서 HTML5를 인식하기 위해서는 아래의 패스필터를 적용하면 된다.--> 
		<!--[if lt IE 9]>
		<script src="../js/html5shiv.js"></script>
		<![endif]-->
	</head>
	<body>
		<h3>
			회원 정보
		</h3>
		<table border="1">
			<tr>
				<td>회원번호</td>
				<td>회원 아이디</td>
				<td>회원 이름</td>
				<td>회원 나이</td>
			</tr>
			<tr>
				<td><%= dto.getUserNo() %></td>
				<td><%= dto.getUserId() %></td>
				<td><%= dto.getUserName() %></td>
				<td><%= dto.getUserAge() %></td>
			</tr>
			<tr>
				<td>${dto.userNo}</td>
				<td>${dto.userId}</td>
				<td>${dto.userName}</td>
				<td>${dto.userAge}</td>
			</tr>
		</table>		
		<div>
			<a href="/Test1/index.jsp">메인 페이지로 이동</a><br />
			<a href="/Test1">메인 페이지로 이동</a><br />
			<a href="${pageContext.request.contextPath}">메인 페이지로 이동</a><br />
		</div>
	</body>
</html>