<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
		<!-- 브라우저의 호환성 보기 모드를 막고, 해당 브라우저에서 지원하는 가장 최신 버전의 방식으로 HTML 보여주도록 설정.-->
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
		<!--viewport : 화면에 보이는 영역을 제어하는 기술. width는 device-width로 설정(브라우저 너비를 장치 너비에 맞추어 표시). initial-scale는 초기비율(보이는 영역과 웹 페이지를 맞춤). user-scalable는 사용자가 화면축소를 하지 못하도록 설정.-->
		<title>Insert title here</title>
		
		<link rel="shortcut icon" href="../image/icon.png" />
		<link rel="apple-touch-icon" href="../image/icon.png" />

	</head>
	<body>
	<h1>회원 조회</h1>
		<div id="boardList">
			<table summary="게시판 리스트" class="table">
				<thead>
					<tr class="text-center">
						<th class="col-md-1">번호</th>
						<th class="col-md-6">아이디</th>
						<th class="col-md-2">이름</th>
						<th class="col-md-1">주소</th>
						<th class="col-md-1">등록날짜</th>
					</tr>
				</thead>
				<tbody>
					<c:choose>
						<c:when test="${not empty memberList}">
							<c:forEach var="member" items="${memberList}">
							<tr class="text-center">
								<td>${member.userNo}</td>
								<td class="text-left"><span class="goDetail">${member.userId}</span></td>
								<td>${member.userPw}</td>
								<td>${member.userName}</td>
								<td>${member.userAddr}</td>
								<td>${member.regDate}</td>
							</tr>
							</c:forEach>
						</c:when>
						<c:otherwise>
						<tr>
							<td colspan="5" class="text-center">등록된 멤버가 존재하지 않습니다.</td>
						</tr>
						</c:otherwise>
					</c:choose>
				</tbody>
			</table>
		</div>
	</body>
</html>