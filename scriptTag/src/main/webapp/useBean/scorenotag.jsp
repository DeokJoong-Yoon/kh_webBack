<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %>
<%@ page import="com.javabean.ScoreBean" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
		<!-- 브라우저의 호환성 보기 모드를 막고, 해당 브라우저에서 지원하는 가장 최신 버전의 방식으로 HTML 보여주도록 설정.-->
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
		<!--viewport : 화면에 보이는 영역을 제어하는 기술. width는 device-width로 설정(브라우저 너비를 장치 너비에 맞추어 표시). initial-scale는 초기비율(보이는 영역과 웹 페이지를 맞춤). user-scalable는 사용자가 화면축소를 하지 못하도록 설정.-->
		<title>JSP 예제 : scorenotag.jsp</title>
		
		<link rel="shortcut icon" href="../image/icon.png" />
		<link rel="apple-touch-icon" href="../image/icon.png" />
	</head>
	<body>
		<h3>태그를 사용하지 않는 방법으로 JavaBeans를 이용하는 예제</h3>
		<% ScoreBean score = new ScoreBean(); %>
		<hr />
		
		<h4>이름과 성적을 JavaBeans ScoreBean에 저장</h4>
		<p>
			이름 : 홍길동, 성적 : 85 직접 저장
		</p>
		<% score.setName("홍길동"); %>
		<% score.setPoint(85); %>
		
		<p>
			파라미터로 저장
		</p>
		<% 
			request.setCharacterEncoding("UTF-8"); 
			score.setName(request.getParameter("name")); 
			score.setPoint(Integer.parseInt(request.getParameter("point"))); 
		%>
		<hr />
		
		<h4>JavaBeans ScoreBean에 저장된 정보를 조회 출력</h4>
		<p>
			이름 : <%= score.getName()%><br>
			성적 : <% out.println(score.getPoint()); %>
		</p>	
	</body>
</html>