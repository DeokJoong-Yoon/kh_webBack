<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %>
<%@ include file="/WEB-INF/common/common.jsp" %>
<body>
	<div class="container">
		<div class="text-center"><h3>게시판 상세페이지</h3></div>
	</div>
<%-- ==================== 상세 정보 보여주기 시작 ====================--%>
<%-- 표현 언어의 ${detail.num}은 
   BoardVO detail = (BoardVO request.getAttribute("detail");
   out.print(detail.getNum()); 이 된다. ${detail.num}은 ${requestScope.detail.num}의 축약된 형태이다.--%>

<div class="text-center">
	<table class="table table=boardered">
		<tbody>
			<tr>
				<td class="col-md-3">글번호</td>
				<td class="col-md-3 text-start">${detail.num}<label>(조회수 : ${detail.readcnt} })</label></td>
				<td class="col-md-3">작성일</td>
				<td class="col-md-3 text-start">${detail.writeday}</td>
			</tr>
			<tr>
				<td class="col-md-3">작성자</td>
				<td colspan="3" class="col-md-9 text-start">${detail.author}</td>
			</tr>
			<tr>
				<td class="col-md-3">글제목</td>
				<td colspan="3" class="col-md-9 text-start">${detail.title}</td>
			</tr>
			<tr class="table-height">
				<td class="text-valign">글내용</td>
				<td colspan="3" class="text-start">${detail.content}</td>
			</tr>
		</tbody>
	</table>
</div>
</body>
</html>