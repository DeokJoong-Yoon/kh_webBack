<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<!DOCTYPE html>
												
<html>
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
         <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />         
      <title>책정보 수정</title>
      
      <link rel="shortcut icon" href="/resources/image/icon.png" />
      <link rel="apple-touch-icon" href="/resources/image/icon.png" />      
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css">

   </head>
   <body>
      <div class="container">
         <div class="text-center"><h3>책정보 수정</h3></div>
         <!-- 컬럼들은 모바일과 데스크탑에서 항상 50% 너비가 됩니다 -->
         <div class="row">
            <div class="col-xs-6">
               <table class="table table-hover">
                     <tr>
                        <th scope="col">책번호</th>
                        <td>
                        	<input type="text" id="bookId" name="bookId" value="${bookVO.bookId }" readonly="readonly" />
               			</td>
                     </tr>
                     <tr>
                        <th scope="col">책제목</th>
                        <td>
                        	<input type="text" id="title" name="title" value="${bookVO.title }" />
                        </td>
					 </tr>	
                     <tr>                        
                        <th scope="col">출판사</th>
                        <td>
                        	<input type="text" id="publisher" name="publisher" value="${bookVO.publisher }"/>
                        </td>
                     </tr>
                     <tr>
                        <th scope="col">출간연도</th>
                        <td>
                        	<input type="text" id="year" name="year" value="${bookVO.year }" />
                        </td>
                     </tr>
                     <tr>
                        <th scope="col">책가격</th>
                        <td>
                        	<input type="text" id="price" name="price" value="${bookVO.price }" />
                        </td>
                     </tr>
                     <tr>
                     	<td>
                        	<button>수정완료</button>
                        	<button>수정취소</button>
                        </td>
                     </tr>
               </table>   
            </div>
         </div>
      </div>
      
      <script src="/resources/js/jquery-3.7.1.min.js"></script>
	  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
      <script src="/resources/js/common.js"></script>
      <script src="/resources/js/book.js"></script>																						  
   </body>
</html>