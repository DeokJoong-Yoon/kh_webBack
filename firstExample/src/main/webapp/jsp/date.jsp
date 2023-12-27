<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.Date, java.text.SimpleDateFormat" %>
<%@ page import="example.Clock" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
		
		<title>JSP 예제 파일date.jsp</title>
		
		<link rel="shortcut icon" href="../image/icon.png" />
		<link rel="apple-touch-icon" href="../image/icon.png" />
	</head>
	<body>
	<%
		Date nowDate = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy년 MM원 dd일");
		String formatDate = dateFormat.format(nowDate);
	%>
	<p> 일반적인 JSP 페이지의 형태로 아래와 같이 현재 날짜를 제공합니다. <br/>
		현재 날짜는 <%=formatDate%> 입니다.<br/>
		<% out.print("out.print 사용 : " + formatDate); %>
	<%
		// example 패키지의 Clock 클래스를 생성하여 오늘 날짜와 시간 출력.
		Clock clock = new Clock();
		String data = clock.now();
//		out.print("현재 날짜는 " + data + " 입니다.");
	%>
	<p> 현재 날짜는 <%=data%> 입니다. </p> <%--표현식 이라고 함. JSP 주석문. --%>
	</body>
</html>