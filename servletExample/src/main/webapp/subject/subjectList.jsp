<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %>
<%@ page import="java.util.ArrayList, com.subject.SubjectVO" %>
<%
	@SuppressWarnings("unchecked")
	ArrayList<SubjectVO> list = (ArrayList<SubjectVO>)request.getAttribute("list");
	int counter = list.size();
%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
		<!-- 브라우저의 호환성 보기 모드를 막고, 해당 브라우저에서 지원하는 가장 최신 버전의 방식으로 HTML 보여주도록 설정.-->
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
		<!--viewport : 화면에 보이는 영역을 제어하는 기술. width는 device-width로 설정(브라우저 너비를 장치 너비에 맞추어 표시). initial-scale는 초기비율(보이는 영역과 웹 페이지를 맞춤). user-scalable는 사용자가 화면축소를 하지 못하도록 설정.-->
		<title>subject 테이블 예제 : subjectList.jsp</title>
		
		<link rel="shortcut icon" href="../image/icon.png" />
		<link rel="apple-touch-icon" href="../image/icon.png" />
		<!--IE8이하 브라우저에서 HTML5를 인식하기 위해서는 아래의 패스필터를 적용하면 된다.--> 
		<!--[if lt IE 9]>
		<script src="../js/html5shiv.js"></script>
		<![endif]-->
		<script type="text/javascript" src="/servletExample/js/jquery-3.7.1.min.js"></script>
		<%-- <script type="text/javascript">
			$(function() {
				//학과 정보 등록 버튼 제어
				$("#subjectInsert").on("click", () =>{
					location.href="<%=request.getContextPath()%>/subject/subjectForm.jsp";
				});
			});
		</script>--%>
		<script type="text/javascript" src="/servletExample/js/subjectList.js"></script>
	</head>
	<body>
		<div id="container">
			<h3>테이블 subject 학과 정보 조회</h3>
			<hr />
			<div id="subjectList">
				<div class="text-right">
					<input type="button" value="학과정보등록" id="subjectInsert" />
				</div>
				<table>
					<thead>
						<tr>
							<th>번호</th>
							<th>학과번호</th>
							<th>학과명</th>
						</tr>
					</thead>
				<tbody>
				<%
					if (counter > 0) {
						for (SubjectVO sub : list ) {
						/* for(int i = 0; i < counter; ++i) {
							SubjectVO sub = list.get(i); */
				%>
							<tr class="text-center" data-no="<%= sub.getNo() %>">
								<td><%= sub.getNo() %></td>
								<td><%= sub.getS_num() %></td>
								<td><%= sub.getS_name() %></td>
							</tr>
				<% 
						}
					} else {
				%>
						<tr>
							<td colspan="3" class="text-center">
								조회된 학과 정보가 존재하지 않습니다.
							</td>
						</tr>
				<%  } %>
				</tbody>
			</table>
			<div class="text-right">
				조회된 학과 수는 <span id="counter"><%=counter %></span>입니다.
			</div>
			</div>
		</div>
	
	</body>
</html>