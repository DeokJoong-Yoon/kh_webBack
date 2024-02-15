<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		
		<link rel="shortcut icon" href="/resources/image/icon.png" />
		<link rel="apple-touch-icon" href="/resources/image/icon.png" />
		<title>exam02Bean1.jsp</title>

		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" >
	</head>
	<body>
		<div>
            	<h1>번호 : ${exampleVO.no }</h1>
            	<h1>이름 : ${exampleVO.name }</h1>
            	<h1>전화번호 : ${exampleVO.phone }</h1>
		</div>
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>		
		<script src="/resources/js/jquery-3.7.1.min.js"></script>
		<script src="/resources/js/main.js"></script>
	</body>
</html>