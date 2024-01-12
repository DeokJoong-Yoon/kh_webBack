<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %>
<%--@ page import="java.util.ArrayList, com.user.User" --%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
		<!-- 브라우저의 호환성 보기 모드를 막고, 해당 브라우저에서 지원하는 가장 최신 버전의 방식으로 HTML 보여주도록 설정.-->
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
		<!--viewport : 화면에 보이는 영역을 제어하는 기술. width는 device-width로 설정(브라우저 너비를 장치 너비에 맞추어 표시). initial-scale는 초기비율(보이는 영역과 웹 페이지를 맞춤). user-scalable는 사용자가 화면축소를 하지 못하도록 설정.-->
		<title>JSTL Core Tag : forEach(foreach.jsp)</title>
		
		<link rel="shortcut icon" href="../image/icon.png" />
		<link rel="apple-touch-icon" href="../image/icon.png" />
	</head>
	<body>
		<h2>JSTL Core Tag : forEach(foreach.jsp)</h2>
		<h3>배열 처리</h3>
		<c:set var="score" value="<%= new int[] {95, 88, 77, 45, 99} %>" />
		
		<c:set var="sum" value="0" />
		점수 :
		<c:forEach var="point" items="${score}" >
			${point} <br />
			<c:set var="sum" value="${sum + point}" />
		</c:forEach>
		<br /> 합 = ${sum} <br />
		
		<h3>1 부터 100까지 합</h3>
		<c:set var="sum" value="0" />
		<c:forEach var="i" begin="1" end="100" >
			<c:set var="sum" value="${sum + i}" />		
		</c:forEach>
		결과 : ${sum} <br />
		
		<h3> Map인 sessionScope 처리 </h3>
		<c:set target="${sessionScope}" property="name" value="홍길동" />
		<c:set target="${sessionScope}" property="id" value="dong" />
		<c:set target="${sessionScope}" property="passwd" value="1234" />
		
		<c:forEach var="i" items="${sessionScope}" >
			${i.key} = ${i.value} <br />
		</c:forEach>
		
		<h3>ArrayList 원소 반복</h3>
		<%--
			ArrayList<User> userList = new ArrayList<User>();
			userList.add(new User("홍길동", "ㅓㅁㅍ머네", 180701));
			userList.add(new User("홍길동", "ㅓㅁㅍ머네", 180701));
			userList.add(new User("홍길동", "ㅓㅁㅍ머네", 180701));
			pageContext.setAttribute("list", userList);
		--%>
	</body>
</html>