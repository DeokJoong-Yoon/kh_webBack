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
		<title>JSP 예제 out.jsp</title>
		
		<link rel="shortcut icon" href="../image/icon.png" />
		<link rel="apple-touch-icon" href="../image/icon.png" />
	</head>
	<body>
		<%
			int bufferSize = out.getBufferSize(); // 버퍼크기 얻어냄(8KB : 8192byte)
			out.print("첫번째 텍스트입니다.");
			out.clearBuffer();
		%>
		<h3>out 객체 예제 - getBufferSize(), getRemaining(), println() 메서드 사용</h3>
		<%
			int remainSize = out.getRemaining();	// 남은버퍼의 크기 얻어냄
			int usedSize = bufferSize - remainSize;	// 사용한 버퍼 크기 얻어냄
			boolean isAuto = out.isAutoFlush();
		%>
		<p>현재 페이지의 버퍼 사용 현황</p>
		<ul>
			<li>출력 버퍼의 전체 크기 : <%=bufferSize %>byte</li>
			<li>현재 사용한 버퍼의 크기 : <%=usedSize %>byte</li>
			<li>남은 버퍼의 크기 : <%out.println(remainSize); %>byte</li>
			<li>autoFlush 여부 : <%=isAuto %></li>
		</ul>
		<h3>out.print() 메서드</h3>
		<%
			out.println(100);
			out.println(true);
			out.println(3.14);
			out.println("TEST");
			out.println('가');
			out.println("<br />버퍼의 크기 : " + out.getRemaining());
		%>
	</body>
</html>