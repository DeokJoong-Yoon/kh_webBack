<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %>
<%@ page import="java.util.Calendar" %>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
		<!-- 브라우저의 호환성 보기 모드를 막고, 해당 브라우저에서 지원하는 가장 최신 버전의 방식으로 HTML 보여주도록 설정.-->
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
		<!--viewport : 화면에 보이는 영역을 제어하는 기술. width는 device-width로 설정(브라우저 너비를 장치 너비에 맞추어 표시). initial-scale는 초기비율(보이는 영역과 웹 페이지를 맞춤). user-scalable는 사용자가 화면축소를 하지 못하도록 설정.-->
		<title>JSP - 예제 - declaration.jsp</title>
		
		<link rel="shortcut icon" href="../image/icon.png" />
		<link rel="apple-touch-icon" href="../image/icon.png" />
		<!--IE8이하 브라우저에서 HTML5를 인식하기 위해서는 아래의 패스필터를 적용하면 된다.--> 
		<!--[if lt IE 9]>
		<script src="../js/html5shiv.js"></script>
		<![endif]-->
	</head>
	<body>
		<%! double radius = 4.8; %>
		<%!
			// 원의 면적을 구하는 메서드
			public double getArea(double r) {
				return r * r *3.14;
			}
		%>
		<%-- 위의 태그는 선언문으로 메서드의 선언이나 멤버변수를 정의하고자 할 때 사용. --%>
		반지름 <%= radius %>인
		원의 면적은 <%= getArea(radius) %>이다.
		
		<%!
			char getKorDay() {
				char result =' ';
				int day = Calendar.getInstance().get(Calendar.DAY_OF_WEEK);
				switch(day) {
					case 1: result = '일'; break;
					case 2: result = '월'; break;
					case 3: result = '화'; break;
					case 4: result = '수'; break;
					case 5: result = '목'; break;
					case 6: result = '금'; break;
					case 7: result = '토';
				}
				return result;
			}
		%>
		<p>오늘은 <%= getKorDay() %>요일입니다.</p>
		
		<p>
			<% int i = 0; %>
			<label>[지역변수] i = <%= ++i %></label> 
		</p>
		<p>
			<label>[전역변수/필드] memi = <%= ++memi %></label>
			<%! int memi = 0; %>
		</p>
		<!-- 1부터 10까지의 합 구하기 (sum 메서드 선언) -->
		<p>
			<%!
			int sum(int num1, int num2) {
				int result = 0;
				while(true) {
					if (num1 > num2) break;
					result += num1;
					++num1;
				}
				return result;
			}
			%>
			<%= "1부터 10까지 합은 " + sum(1, 10) + " 입니다." %>
		</p>
	</body>
</html>