<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %>
<%@ page import="java.util.Date, java.text.SimpleDateFormat, java.util.Set" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
		<!-- 브라우저의 호환성 보기 모드를 막고, 해당 브라우저에서 지원하는 가장 최신 버전의 방식으로 HTML 보여주도록 설정.-->
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
		<!--viewport : 화면에 보이는 영역을 제어하는 기술. width는 device-width로 설정(브라우저 너비를 장치 너비에 맞추어 표시). initial-scale는 초기비율(보이는 영역과 웹 페이지를 맞춤). user-scalable는 사용자가 화면축소를 하지 못하도록 설정.-->
		<title>내장 객체들 - implicitobject.jsp</title>
		
		<link rel="shortcut icon" href="../image/icon.png" />
		<link rel="apple-touch-icon" href="../image/icon.png" />
		<!--[if lt IE 9]>
		<script src="../js/html5shiv.js"></script>
		<![endif]-->
	</head>
	<body>
		<h2>JSP의 내장 객체들 점검</h2>
		<div>
			<strong>[ request ]</strong><br />
			getMethod() : <%= request.getMethod() %><br />
			getRequesetURI() : <%= request.getRequestURI() %><br />
			getHeader("user-agent") : <%= request.getHeader("user-agent") %><br /><br />
		</div>
		
		<div>
			<strong>[ response ]</strong><br />
			getStatus() : <%= response.getStatus() %><br />
			getBufferSize() : <%= response.getBufferSize() %><br />
			getContentType() : <%= response.getContentType() %><br />
		</div>
		
		<div>
			<strong>[ application ]</strong><br />
			getContextPath() : <%= application.getContextPath() %><br />
			getServletContextName() : <%= application.getServletContextName() %><br />
			getServerIntfo() : <%= application.getServerInfo() %><br />
			Servlet Version : <%= application.getMajorVersion() %>.<%= application.getMinorVersion() %><br /><br />
		</div>
		
		<div>
			<strong>[ session ]</strong>application
				getId() : <%= session.getId()  %><br />
				getCreationTime() : <%= new SimpleDateFormat("yyyy.mm.dd hh:MM:ss").format(new Date(session.getCreationTime())) %><br /><br />
		</div>
		
		<h4>Web application(/implicitObject) 디렉터리의 파일 리스트</h4>
		<%
			Set<String> set = application.getResourcePaths("/");
			if (set != null) {
				Object obj[] = set.toArray();
				for(int i = 0; i < obj.length; ++i) {
					out.print(obj[i] + "<br />");
				}
			}
		%>
	</body>
</html>