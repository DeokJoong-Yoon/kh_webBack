<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %>
<%@ page import="java.io.BufferedReader, java.io.InputStreamReader, java.io.IOException" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
		<!-- 브라우저의 호환성 보기 모드를 막고, 해당 브라우저에서 지원하는 가장 최신 버전의 방식으로 HTML 보여주도록 설정.-->
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
		<!--viewport : 화면에 보이는 영역을 제어하는 기술. width는 device-width로 설정(브라우저 너비를 장치 너비에 맞추어 표시). initial-scale는 초기비율(보이는 영역과 웹 페이지를 맞춤). user-scalable는 사용자가 화면축소를 하지 못하도록 설정.-->
		<title>application 기본 객체 사용하여 자원 읽기 - getResourceAsStream() : readFileUsingApplication.jsp </title>
		
		<link rel="shortcut icon" href="../image/icon.png" />
		<link rel="apple-touch-icon" href="../image/icon.png" />
	</head>
	<body>
		<%
			String resourcePath = "/message/notice.txt";
		%>
		자원의 실제 경로 : <br />
		<%= application.getRealPath(resourcePath) %><br />
		--------------------------------------------<br />
		<%= resourcePath %>의 내용<br />
		--------------------------------------------<br />
		<%
			String line = "";
			
			try(BufferedReader br = new BufferedReader(
					new InputStreamReader(application.getResourceAsStream(resourcePath), "UTF-8"))) {
				while ( (line = br.readLine()) != null) {
					out.print(line);
					out.print("<br />");
				}
			} catch (IOException ex) {
				out.println("예외 발생 : " + ex.getMessage());
			}
		%>
	</body>
</html>