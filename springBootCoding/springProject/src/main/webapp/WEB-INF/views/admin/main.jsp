<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/common/common.jspf" %>
												
<body>
<div class="container">
	<c:if test="${empty adminLogin}">
	<form id="loginForm">
    <h1 class="h3 mb-3 fw-normal">관리자 로그인 페이지</h1>

    <div class="form-floating">
      <input type="text" class="form-control" id="adminId" name="adminId" placeholder="Id">
      <label for="adminId">Admin ID</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="adminPasswd" name="adminPasswd" placeholder="password">
      <label for="password">Password</label>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="button" id="loginBtn" name="loginBtn">Sign in</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
  </form>
  </c:if>
  <c:if test="${not empty adminLogin}">
  	<h3>${adminLogin.adminName} 님 환영합니다.</h3>
  	<button type="button" id="logoutBtn" name="logoutBtn">로그아웃</button>
  </c:if>
</div>

	<script>
	$(function() {
		let errorMsg = "${errorMsg}";
		if(errorMsg != "") {
			alert(errorMsg);
		}
	});
	</script>
	<script src="/resources/include/js/adminLogin.js"></script>
</body>
</html>