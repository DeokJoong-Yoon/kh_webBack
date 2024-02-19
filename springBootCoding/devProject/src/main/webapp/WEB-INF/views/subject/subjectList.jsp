<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<!DOCTYPE html>
												
<html>
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
         <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />         
      <title>과목 정보 리스트</title>
      
      <link rel="shortcut icon" href="/resources/image/icon.png" />
      <link rel="apple-touch-icon" href="/resources/image/icon.png" />      
      

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css">
   </head>
   <body>
      <div class="container">
         <div class="text-center"><h3>과목 정보 조회</h3></div>
         <!-- 컬럼들은 모바일과 데스크탑에서 항상 50% 너비가 됩니다 -->
         <div class="row">
            <div class="col-xs-6">
               <table class="table table-hover">
                  <thead>
                     <tr>
                        <th scope="col">번호</th>
                        <th scope="col">학과번호</th>
                        <th scope="col">확과명</th>
                        <th scope="col">수정여부</th>
                        <th scope="col">삭제여부</th>
                     </tr>
                  </thead>
                  <tbody>
                     <c:choose>
                        <c:when test="${not empty subjectList}">
                           <c:forEach var="subject" items="${subjectList}">
                              <tr class="text-center" data-id="${subject.no}">
                                 <td>${subject.no}</td>
                                 <td>${subject.subjectNum}</td>
                                 <td>${subject.subjectName}</td>
                                 <td><button type="button" class="updateBtn btn btn-outline-success.">학과정보수정</button></td>
                                 <td><button type="button" class="deleteBtn btn btn-outline-success.">학과정보삭제</button></td>
                              </tr>
                           </c:forEach>
                        </c:when>
                        <c:otherwise>
                           <tr>
                              <td colspan="5">등록된 학과이 존재하지 않습니다</td>
                           </tr>
                        </c:otherwise>                           
                     </c:choose>
                  </tbody>   
               </table>   
            </div>
            <div class="col-xs-6">

            </div>
         </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
      <script src="/resources/js/jquery-3.7.1.min.js"></script>
      <script src="/resources/js/common.js"></script>																									  
   </body>
</html>