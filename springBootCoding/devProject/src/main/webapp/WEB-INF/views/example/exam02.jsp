<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		
		<link rel="shortcut icon" href="/resources/image/icon.png" />
		<link rel="apple-touch-icon" href="/resources/image/icon.png" />
		<title>exam02.jsp</title>

		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" >
	</head>
	<body>
		<!-- <div>
			<h1>이름 : ${dto.name}</h1>
			<h1>나이 : ${dto.age}</h1>
		</div> -->
		<!-- <div>
			<h1>이름 : ${sampleDTO.name}</h1>
			<h1>나이 : ${sampleDTO.age}</h1>
		</div> -->
		<div>
			<h1>이름 : ${sample.name }</h1>
			<h1>나이 : ${sample.age }</h1>
		</div>
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>		
		<script src="/resources/js/jquery-3.7.1.min.js"></script>
		<script src="/resources/js/main.js"></script>
	</body>
</html>