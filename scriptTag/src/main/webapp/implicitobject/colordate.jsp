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
		<title>예제 - colordate.jsp</title>
		
		<link rel="shortcut icon" href="../image/icon.png" />
		<link rel="apple-touch-icon" href="../image/icon.png" />
		<style type="text/css">
			div:first-child {
				margin-bottom: 10px;
			}
		</style>
		
		<script src="../js/jquery-3.7.1.js"></script>
		<script src="../js/common.js"></script>
		<script src="../js/colordate.js"></script>
	</head>
	<body>
		<% if (request.getMethod().equals("GET")) { %>
		
			<h2>원하는 색상과 날짜를 선택하세요.</h2>
			<form id="form">
				<div>색상 : <input type="color" name="fcolor" id="fcolor" /></div>
				<div>날짜 : <input type="date" name="fdate" id="fdate" /></div>
				<button type="button" id="sendBtn">전송</button>
			</form>
			
			<% } else { %>
				
					<script type="text/javascript">
					
						$(function() {
							$("span").css("color", "<%=request.getParameter("fcolor") %>");
						})
					</script>
					<h2>선택 날짜는 <span><%= request.getParameter("fdate") %></span>입니다.</h2>
					
			<% } %>
	</body>
</html>