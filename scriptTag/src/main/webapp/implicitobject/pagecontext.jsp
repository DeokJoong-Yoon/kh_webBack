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
		<title>JSP 예제 pagecontext.jsp</title>
		
		<link rel="shortcut icon" href="../image/icon.png" />
		<link rel="apple-touch-icon" href="../image/icon.png" />
	</head>
	<body>
		<h2>pageContext 예제</h2>
		<%! 
		public void work(String param, PageContext page) {
			try {
				JspWriter out = page.getOut();
				
				if(param == null) {
					out.print("다음과 같은 형식으로 URL을 요청해야 정상 처리 됩니다.<br />");
					out.print("http://localhost:8080/scriptTag/implicitobject/pagecontext.jsp?param=include or forward");
					return;
				}
				
				if (param.equals("include")) {
					out.print("-- include 전 -- <br /><hr />");
					page.include("page.jsp");
					out.print("-- include 후 -- <br /><hr />");
				} else if (param.equals("forward")) {
					out.print("-- include 전 -- <br /><hr />");
					page.forward("page.jsp");
				}
			} catch (Exception e) {
				System.out.println("오류 발생!!");
			}
		}
		%>
		<%
			String param = request.getParameter("param");
			this.work(param, pageContext);
		%>
	</body>
</html>