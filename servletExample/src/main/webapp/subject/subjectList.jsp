<%@ page language="java" contentType="text/html; charset=UTF-8" 
   pageEncoding="UTF-8"%>
<%@ page import="java.util.ArrayList, com.subject.SubjectVO" %>
<%   
   @SuppressWarnings("unchecked")
   ArrayList<SubjectVO> list = (ArrayList<SubjectVO>)request.getAttribute("list");
   int counter = list.size();
   
   String word = request.getParameter("s_name");
   if(word == null) {
	   word = "";
   }
%>
<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8" /> 
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
      
      <title>subject 테이블 예제 : subjectList.jsp</title>   
      
      <link rel="shortcut icon" href="/servletExample/image/icon.png" />
      <link rel="apple-touch-icon" href="/servletExample/image/icon.png" />
      
      <!-- <link rel="stylesheet" href="/servletExample/css/subject.css" /> -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css">
      
      <%-- <script src="/servletExample/js/jquery-3.7.1.min.js"></script> --%>
      <%--request.getContextPath() 현재 프로젝트의 Context명을 반환. 즉 /servletExample 
      <script>
         $(function() {
            // 학과 정보 등록 버튼 제어
            $("#subjectInsert").on("click", () => {
               location.href="<%=request.getContextPath() %>/subject/subjectForm.jsp";
            }); 
         });
      </script>--%>
      
   </head>
   <body>
         <div class="container">
               <h3> 테이블 subject 학과 정보 조회 </h3>
               <hr />
               <div id="subjectList">
                  <!-- <div class="text-end">
                     <button type="button" id="subjectInsert">학과정보등록</button>
                  </div> -->
                  
                  <form id="search">
                  	<div class="input-group">
                  		<input type="text" class="form-control" name="ss_name" id="ss_name" placeholder="학과명 입력" />
                  		<button class="btn btn-outline-secondary" type="button" id="searchBtn">학과명 검색</button>
                  		<button class="btn btn-outline-secondary" type="button" id="searchAllBtn">전체 검색</button>
                  	</div>
                  </form>
                  
                  <table class="table table-striped">
                     <thead>
                        <tr class="text-center">
                           <th>번호</th>
                           <th>학과번호</th>
                           <th>학과명</th>
                           <th>삭제여부</th>
                           <th>수정</th>
                           <th>삭제</th>
                        </tr>
                     </thead>
                     <tbody>
                     <% if (counter > 0) {
                        for( SubjectVO sub : list ) {
                        /* for(int i=0; i<counter; i++) {
                           SubjectVO sub = list.get(i); */
                     %>   
                           <tr class="text-center" data-no="<%= sub.getNo() %>">
                              <td><%= sub.getNo() %></td>
                              <td><%= sub.getS_num() %></td>
                              <td><%= sub.getS_name() %></td>
                              <td><%= sub.getDeleteable() %></td>
                              <td><button type="button" class="updateBtn btn btn-outline-success btn-sm">수정</button>
                              <!-- <td><button type="button" class="deleteBtn btn btn-outline-success btn-sm">삭제</button> -->
                              <td><button type="button" class="deleteBtn btn btn-outline-success btn-sm" 
                              <% if(sub.getDeleteable().equals("삭제불가능")) { %> disabled="disabled" <% } %>>삭제</button>
                           </tr>  
                     <%
                         }
                        } else {
                     %>      
                           <tr>
                              <td colspan="4" class="text-center">
                                 조회된 학과 정보가 존재하지 않습니다.
                              </td>
                           </tr>
                     <% } %>
                     </tbody>
                  </table>
                  <div class="text-end">
                     조회된 학과 수는 <span id="counter"><%=counter %></span>입니다.
                  </div>
               </div>
               <div>
                  <jsp:include page="subjectForm.jsp" /> 
               </div> <!-- 액션태그를 이용해 subjectForm.jsp를 현재 문서에 삽입하는 법  -->
         </div>
       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
       <script src="/servletExample/js/jquery-3.7.1.min.js"></script>
       <script src="/servletExample/js/subjectList.js"></script>
       <script>
       	let keyword = "<%=word%>";
       	if(keyword != "") {
       		$("#s_name").val(keyword);
       	}
       </script>
   </body>
</html> 