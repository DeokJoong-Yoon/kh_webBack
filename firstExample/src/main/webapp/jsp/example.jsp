<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.ArrayList" %>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
		
		<title>[ 파일명은 example.jsp ] - example.jsp</title>
		
		<link rel="shortcut icon" href="../image/icon.png" />
		<link rel="apple-touch-icon" href="../image/icon.png" />
	</head>
	<body>
	<%
		out.print("<h3>숫자를 저장한 변수 3개(7, 5, 9)를 정의하고 최대값 구하기</h3>");
		int[] num1 = {7, 5, 9};
		int max = Integer.MIN_VALUE;
		for(int n : num1) {
			if (n > max) {
				max = n;
			}
		}
		out.print("<p>최대값은 : " + max + "</p>");
		
		out.print("<h3>배열의 값(12, 26, 68, 98, 76, 54, 8, 6, 4)</h3>");
		int[] num2 = {12, 26, 68, 98, 76, 54, 8, 6, 4};
		max = Integer.MIN_VALUE;
		int min = Integer.MAX_VALUE;
		for(int n : num2) {
			if (n > max) max = n;
			if (n < min) min = n;
		}
		out.print("<p>최대값 : " + max + ", 최소값 : " + min);
		
		out.print("<h3>문자열 추출하기</h3>");
		out.print("<p>동해 물과 백두상이 마르고 닳도록 하느님이 보우하사 우리 나라 만세" + "</p>");
	%>
	</body>
</html>