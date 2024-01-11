<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %>
<%@ page import="com.member.MemberDTO" %>
<%
	MemberDTO dto = (MemberDTO) session.getAttribute("login");
%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
		<!-- 브라우저의 호환성 보기 모드를 막고, 해당 브라우저에서 지원하는 가장 최신 버전의 방식으로 HTML 보여주도록 설정.-->
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
		<!--viewport : 화면에 보이는 영역을 제어하는 기술. width는 device-width로 설정(브라우저 너비를 장치 너비에 맞추어 표시). initial-scale는 초기비율(보이는 영역과 웹 페이지를 맞춤). user-scalable는 사용자가 화면축소를 하지 못하도록 설정.-->
		<title>로그인정보 출력</title>
		
		<link rel="shortcut icon" href="../image/icon.png" />
		<link rel="apple-touch-icon" href="../image/icon.png" />
		<!--IE8이하 브라우저에서 HTML5를 인식하기 위해서는 아래의 패스필터를 적용하면 된다.--> 
		<!--[if lt IE 9]>
		<script src="../js/html5shiv.js"></script>
		<![endif]-->
	</head>
	<body>
		<div class="container">
			<% if(dto != null) { %>
			<div>
				<table>
					<tr>
						<th colspan="2">세션에 저장된 정보 얻기</th>
					</tr>
					<tr>
						<td>아이디</td>
						<td><%=dto.getMemberId() %></td>
					</tr>
					<tr>
						<td>이름</td>
						<td><%=dto.getMemberName() %></td>
					</tr>
					<tr>
						<td>이메일</td>
						<td><%=dto.getMemberEmail() %></td>
					</tr>
				</table>
			</div>
			<div>
				<a href='/servletExample/logout'>로그아웃</a>
			</div>
			<% } else { %>
				<div>
					로그인 상태가 아닙니다.<br /> 로그인부터 다시 진행해 주세요.
				</div>
				<div>
					<a href='/servletExample/jdbc/login.jsp'>로그인 화면으로 이동핫기</a>
				</div>
			<% } %>
		</div>
	</body>
</html>