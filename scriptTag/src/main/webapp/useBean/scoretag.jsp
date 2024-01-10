<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %>
<%--ScoreBean score = new ScoreBean(); 아래의 코드는 동일. --%>
<jsp:useBean id="score" class="com.javabean.ScoreBean" scope="page" />
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
		<!-- 브라우저의 호환성 보기 모드를 막고, 해당 브라우저에서 지원하는 가장 최신 버전의 방식으로 HTML 보여주도록 설정.-->
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
		<!--viewport : 화면에 보이는 영역을 제어하는 기술. width는 device-width로 설정(브라우저 너비를 장치 너비에 맞추어 표시). initial-scale는 초기비율(보이는 영역과 웹 페이지를 맞춤). user-scalable는 사용자가 화면축소를 하지 못하도록 설정.-->
		<title>JSP 예제 : scoretag.jsp</title>
		
		<link rel="shortcut icon" href="../image/icon.png" />
		<link rel="apple-touch-icon" href="../image/icon.png" />
		<!--IE8이하 브라우저에서 HTML5를 인식하기 위해서는 아래의 패스필터를 적용하면 된다.--> 
		<!--[if lt IE 9]>
		<script src="../js/html5shiv.js"></script>
		<![endif]-->
	</head>
	<body>
		<h3>JavaBeans를 이용한 학생의 이름과 성적의 저장과 조회 예제</h3>
		<% request.setCharacterEncoding("UTF-8"); %>
		<hr />
		
		<%--
		<h4>이름과 성적을 JavaBeans ScoreBean에 직접 저장</h4>
		<p>
			이름 : 홍길동, 성적 : 85
		</p>
		<jsp:setProperty name="score" property="name" value="홍길동" />
		<jsp:setProperty name="score" property="point" value="85" />
		 --%>
		
		 
		<h4>폼에서 전달받은 이름과 성적을 JavaBeans ScoreBean에 저장</h4>
		<%--score.setName(request.getParameter("name")); 과 같은 표현.
		<jsp:setProperty name="score" property="name" value="<%= request.getParameter(\"name\") %>" />
		<jsp:setProperty name="score" property="point" value="<%= Integer.parseInt(request.getParameter(\"point\")) %>" />
		 --%>
		<%--
		<jsp:setProperty name="score" property="name" param="name" />
		<jsp:setProperty name="score" property="point" param="point" />
		 --%>
		 
		<%-- 클라이언트로 전송된 name명이 필드의 값과 동일하다면 param 속성을 생략할 수 있다. --%>
		<%--
		<jsp:setProperty name="score" property="name" />
		<jsp:setProperty name="score" property="point" />
		 --%> 		
		 
		 <jsp:setProperty name="score" property="*" />
		
		
		<h4>JavaBeans ScoreBean에 저장된 정보를 조회 출력</h4>
		<p>
			<%-- out.print(score.getName()); 과 같은 표현. --%>
			이름 : <jsp:getProperty name="score" property="name" /><br />
			성적 : <jsp:getProperty name="score" property="point" /><br />
			학점 : <jsp:getProperty name="score" property="grade" /><br />
	</body>
</html>