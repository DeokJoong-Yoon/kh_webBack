<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<!DOCTYPE html>
												
<html>
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
         <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />         
      <title>책정보 리스트</title>
      
      <link rel="shortcut icon" href="/resources/image/icon.png" />
      <link rel="apple-touch-icon" href="/resources/image/icon.png" />      
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css">

   </head>
   <body>
      <div class="container">
         <div class="text-center"><h3>책정보 조회</h3></div>
         <!-- 컬럼들은 모바일과 데스크탑에서 항상 50% 너비가 됩니다 -->
         <div class="row">
            <div class="col-xs-6">
               <table class="table table-hover">
                  <thead>
                     <tr>
                        <th scope="col">책번호</th>
                        <th scope="col">책제목</th>
                        <th scope="col">출판사</th>
                        <th scope="col">출간연도</th>
                        <th scope="col">책가격</th>
                        <th scope="col">수정여부</th>
                        <th scope="col">삭제여부</th>
                     </tr>
                  </thead>
                  <tbody>
                     <c:choose>
                        <c:when test="${not empty bookList}">
                           <c:forEach var="book" items="${bookList}">
                              <tr data-id="${book.bookId}">
                                 <th scope="row">${book.bookId}</th>
                                 <td>${book.title}</td>
                                 <td>${book.publisher}</td>
                                 <td>${book.year}</td>
                                 <td>${book.price}</td>
                                 <td><button type="button" class="updateBtn btn btn-outline-primary btn-sm">수정</button></td>
                                 <td><button type="button" class="deleteBtn btn btn-outline-primary btn-sm">삭제</button></td>
                              </tr>
                           </c:forEach>
                        </c:when>
                        <c:otherwise>
                           <tr>
                              <td colspan="5">등록된 책이 존재하지 않습니다</td>
                           </tr>
                        </c:otherwise>                           
                     </c:choose>
                  </tbody>   
               </table>   
            </div>
            <div class="col-xs-6">
            	<%@ include file="insertForm.jsp" %>
            </div>
         </div>
      </div>
      
	  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
      <script src="/resources/js/jquery-3.7.1.min.js"></script>
      <script src="/resources/js/common.js"></script>
      <script src="/resources/js/book.js"></script>																						  
   </body>
</html>