<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %>
<%@ page import="java.util.Arrays" %>
<% // 웹 브라우저에서 서버로 넘어오는 파라미터 값에 한글이 있는 경우 한글 처리 
	request.setCharacterEncoding("UTF-8");

	String name = request.getParameter("name");
	String birth = request.getParameter("birth");
	String scholarship = request.getParameter("scholarship");
	String major = request.getParameter("major");
	String[] platforms = request.getParameterValues("platform");
	String[] languages = request.getParameterValues("language");
%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
		<!-- 브라우저의 호환성 보기 모드를 막고, 해당 브라우저에서 지원하는 가장 최신 버전의 방식으로 HTML 보여주도록 설정.-->
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
		<!--viewport : 화면에 보이는 영역을 제어하는 기술. width는 device-width로 설정(브라우저 너비를 장치 너비에 맞추어 표시). initial-scale는 초기비율(보이는 영역과 웹 페이지를 맞춤). user-scalable는 사용자가 화면축소를 하지 못하도록 설정.-->
		<title>예제 request.jsp</title>
		
		<link rel="shortcut icon" href="../image/icon.png" />
		<link rel="apple-touch-icon" href="../image/icon.png" />
		
		<script type="text/javascript" src="../js/jquery-3.7.1.min.js"></script>
		<script type="text/javascript">
			$(function(){
				// get 방식 데이터 전송
				<%--$("#btnInfo").on("click", function() {
					location.href="request1.jsp?name=<%=name%>&birth=<%=birth%>"
				});--%>
				$("#btnInfo").on("click", function() {
					$("#dataForm").attr({
						"method" : "post",
						"action" : "request1.jsp"
					});
					$("#dataForm").submit();
				});
			});
		</script>
	</head>
	<body>
		<form id="dataForm">
			<input type="hidden" name="name" value="<%=name %>" />
			<input type="hidden" name="birth" value="<%=birth %>" />
		</form>
		<fieldset>
			<legend>
				<strong>기술정보 이력서</strong>
				<input type="button" id="btnInfo" value="개인정보" />
			</legend>
			<table>
			<!-- 
				<tr>
					<td class="t1">이 름</td>
					<td class="t2">&nbsp;<%=name %></td>
				</tr>
				<tr>
					<td class="t1">생년월일</td>
					<td class="t2">&nbsp;<%=birth%></td>
				</tr>
			 -->
				<tr>
					<td class="t1">학 력</td>
					<td class="t2">&nbsp;<%=scholarship%></td>
				</tr>
				<tr>
					<td class="t1">학과(전공)</td>
					<td class="t2">&nbsp;<%=major%></td>
				</tr>
				<tr>
					<td class="t1">사용가능 플랫폼</td>
					<td class="t2">&nbsp;
					<%
						/* for (int i = 0; i < platforms.length; ++i) {
							out.println(" [ " + platforms[i] + " ] ");
						}*/
						
						int i = 0;
						for ( String forms : platforms ) {
							out.println(forms);
							if(i++ < platforms.length - 1) out.println(", ");
						}
					%>
					</td>
				</tr>
				<tr>
					<td class="t1">사용가능 언어</td>
					<td class="t2">&nbsp;<%=Arrays.toString(languages) %> </td>
				</tr>
			</table>
		</fieldset>
		<br />
		
		<fieldset>
			<legend><strong>요청 정보</strong></legend>
			<table>
				<tr>
					<td class="t1">요청 방식</td>
					<td class="t2">&nbsp;<%= request.getMethod() %></td>
				</tr>					
				<tr>
					<td class="t1">요청 URL</td>
					<td class="t2">&nbsp;<%= request.getRequestURL()%></td>
				</tr>					
				<tr>
					<td class="t1">요청 URI</td>
					<td class="t2">&nbsp;<%= request.getRequestURI() %></td>
				</tr>					
				<tr>
					<td class="t1">클라이언트 주소</td>
					<td class="t2">&nbsp;<%= request.getRemoteAddr() %></td>
				</tr>					
				<tr>
					<td class="t1">프로토콜 방식</td>
					<td class="t2">&nbsp;<%= request.getProtocol() %></td>
				</tr>					
				<tr>
					<td class="t1">서버 이름</td>
					<td class="t2">&nbsp;<%= request.getServerName() %></td>
				</tr>					
				<tr>
					<td class="t1">서버 포트 번호</td>
					<td class="t2">&nbsp;<%= request.getServerPort() %></td>
				</tr>					
			</table>
		</fieldset>
	</body>
</html>