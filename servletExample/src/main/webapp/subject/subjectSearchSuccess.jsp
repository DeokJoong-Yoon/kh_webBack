<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %>
<%@ page import="com.subject.SubjectVO" %>
<% SubjectVO vo = (SubjectVO) request.getAttribute("svo"); %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
		<!-- 브라우저의 호환성 보기 모드를 막고, 해당 브라우저에서 지원하는 가장 최신 버전의 방식으로 HTML 보여주도록 설정.-->
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
		<!--viewport : 화면에 보이는 영역을 제어하는 기술. width는 device-width로 설정(브라우저 너비를 장치 너비에 맞추어 표시). initial-scale는 초기비율(보이는 영역과 웹 페이지를 맞춤). user-scalable는 사용자가 화면축소를 하지 못하도록 설정.-->
		<title>조회 성공 - subjectSearchSuccess.jsp</title>
		
		<link rel="shortcut icon" href="../image/icon.png" />
		<link rel="apple-touch-icon" href="../image/icon.png" />
		
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css">
	</head>
	<body>
		<h3>학과 정보</h3>
		<hr />
		
		<table class="table table-striped">
			<thead>
				<tr class="text-center">
                	<th>번호</th>
                    <th>학과번호</th>
                    <th>학과명</th>
                </tr>
            </thead>
            <tbody>
            	<tr class="text-center">
            		<td>
            			<%= vo.getNo() %>
            		</td>
            		<td>
            			<%= vo.getS_num() %>
            		</td>
            		<td>
            			<%= vo.getS_name() %>
            		</td>
            	</tr>
            </tbody>
        </table>
		<div>
			<a href="/servletExample/search">메인 페이지로 이동</a>
		</div>
	</body>
</html>