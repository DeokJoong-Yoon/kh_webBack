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
		<title>서블릿으로부터 전달받은 속성 출력</title>
		
		<link rel="shortcut icon" href="../image/icon.png" />
		<link rel="apple-touch-icon" href="../image/icon.png" />
		
		<style type="text/css">
			table{ border-collapse: collapse; width:700px; }
			th, td{border:1px solid #000; text-align:center;}
		</style>
	</head>
	<body>
		<h3>서블릿으로부터 전달받은 속성 출력</h3>
		<table>
			<tr>
				<th>회원이름</th>
				<th>아이디</th>
				<th>회원번호</th>
				<th>회원주소</th>
				<th>회원우편번호</th>
			</tr>
			<tr>
				<td>${user.uname}</td>
				<td>${user.uid}</td>
				<td>${user.unum}</td>
				<td>${user.address.city}</td>
				<td>${user.address.zipcode}</td>
			</tr>
		</table>
	</body>
</html>