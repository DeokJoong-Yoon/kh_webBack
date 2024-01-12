<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
		<!-- 브라우저의 호환성 보기 모드를 막고, 해당 브라우저에서 지원하는 가장 최신 버전의 방식으로 HTML 보여주도록 설정.-->
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
		<!--viewport : 화면에 보이는 영역을 제어하는 기술. width는 device-width로 설정(브라우저 너비를 장치 너비에 맞추어 표시). initial-scale는 초기비율(보이는 영역과 웹 페이지를 맞춤). user-scalable는 사용자가 화면축소를 하지 못하도록 설정.-->
		<title>JSTL Core : set(setvar.jsp)</title>
		
		<link rel="shortcut icon" href="../image/icon.png" />
		<link rel="apple-touch-icon" href="../image/icon.png" />
		<!--IE8이하 브라우저에서 HTML5를 인식하기 위해서는 아래의 패스필터를 적용하면 된다.--> 
		<!--[if lt IE 9]>
		<script src="../js/html5shiv.js"></script>
		<![endif]-->
	</head>
	<body>
		<h2>JSTL Core Tag : set</h2>
		<%--
			pageContext.setAttribute("setStr", "set Tag 테스트입니다.");
			out.print(pageContext.getAttribute("setStr"));
		--%>
		<c:set var="setStr" value="set Tag 테스트입니다." scope="page" />
		\${pageScore.setStr} = ${pageScope.setStr} <br />
		
		<c:set var="n">
			24
		</c:set>
		\${n} = ${n}
		
		<c:set var="d">
			31.54
		</c:set>
		\${d} = ${d} <br />
		\${n + d} = ${n + d} <br />
		
		<c:set var="b" value="true" />
		\${!b} = ${!b} <br />
		
		<%
			session.setAttribute("str", "Hello set Tag!!!");
			out.print(session.getAttribute("str"));
		%>
		<c:set var="str" value="Hello set Tag!!!" scope="session" />
		\${str} = ${str} <br />
		\${sessionScope.str} = ${sessionScope.str} <br />
		
		<c:remove var="str" scope="page" />
		\${str} = ${str} <br />
		
		<c:remove var="str" scope="session" />
		\${str} = ${str} <br />
	</body>
</html>