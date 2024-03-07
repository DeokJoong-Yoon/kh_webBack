<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/common/common.jspf" %>
												
<body>
	<div class="container">
		<div class="text-center"><h3>게시판 수정화면</h3></div>
		
		<%-- post 방식으로 전송 시 반드시 form 태그 추가해 주어야 합니다. --%>
		<form name=f_updateForm id="f_updateForm">
			<input type="hidden" id="boardNumber" name="boardNumber" value="${updateData.boardNumber}" />
			<input type="hidden" name="boardFile" id="boardFile" value="${updateData.boardFile}" />
			<div class="text-center">
				<table class="table table-boared">
					<thead>
						<tr>
							<td class="col-3">글번호</td>
							<td>${updateData.boardNumber} (조회수 : ${updateData.readcnt})</td>
							<td>작성일</td>
							<td>${updateData.boardDate}</td>
						</tr>
					</thead>
					<tbody>
					<tr>
						<td colspan="4">
							<table class="table md-0">
								<tr>
									<td class="col-3">작성자</td>
									<td class="text-start">${updateData.boardName}</td>
								</tr>
								<tr>
									<td>글제목</td>
									<td class="text-start">
										<input type="text" name="boardTitle" id="boardTitle" 
										value="${updateData.boardTitle}" class="form-control"/>
									</td>
								</tr>
								<tr>
									<td>글내용</td>
									<td class="text-start">
									<textarea name="boardContent" id="boardContent" class="form-control" rows="8">${updateData.boardContent}</textarea>
									</td>
								</tr>
								<tr>
									<td>비밀번호</td>
									<td class="col-sm-10">
									<input type="password" name="boardPasswd" id="boardPasswd"
									class="form-control" placeholder="기존 비밀번호가 아니라 수정할 비밀번호를 입력해 주세요."/>
									</td>
								</tr>
								<tr>
									<td>이미지파일첨부</td>
									<td class="col-sm-10">
									<input type="file" name="file" id="file" class="form-control" />
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</form>
	<div class="text-end">
		<button type="button" id="boardUpdateBtn" class="btn btn-success btn-sm">수정</button>
		<button type="button" id="boardCancelBtn" class="btn btn-success btn-sm">취소</button>
		<button type="button" id="boardListBtn" class="btn btn-success btn-sm">목록</button>
	</div>
	<script src="/resources/include/js/updateForm.js"></script>
</div>
</body>
</html>