<%@ page language="java" contentType="text/html; charset=UTF-8" 
   pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %>
<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8" /> 
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
      
      <title>JSP 예제 - scriptlet.jsp</title>   
      
      <link rel="shortcut icon" href="/servletExample/image/icon.png" />
      <link rel="apple-touch-icon" href="/servletExample/image/icon.png" />
      
      <link rel="stylesheet" href="/servletExample/css/subject.css" />
      
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
      <script src="/servletExample/js/jquery-3.7.1.min.js"></script>
      <script src="/servletExample/js/common.js"></script>
      <script src="/servletExample/js/subjectForm.js"></script>
   </head>
   <body>
         <h3>테이블 subject 학과 정보 등록</h3>
         <hr />
         <!-- 부트스트랩 적용 전 
         <form name="subject" id="subject">
               <table summary="학과 정보 등록을 위한 입력 페이지">
                  <colgroup>
                     <col width="100"></col>
                     <col width="400"></col>
                  </colgroup>
                  <thead>
                     <tr><th colspan="2">학과 정보 등록</th></tr>
                  </thead>
                  <tbody>
                     <tr>
                        <th class="ls2">학과번호</th>
                        <td><input type="text" name="s_num" id="s_num" readonly="readonly" /></td>
                     </tr>
                     <tr>
                        <th class="ls7">학과명</th>
                        <td><input type="text" name="s_name" id="s_name" maxlength="8" /></td>
                     </tr>
                     <tr>
                        <td colspan="2" class="text-center">
                           <button type="button" id="insertBtn" >입력완료</button>
                           <button type="button" id="resetBtn" >다시쓰기</button>
                           <button type="button" id="listBtn" >목록</button>
                           <!--  <button type="button" id="updateBtn" >수정</button>
                           <button type="button" id="deleteBtn" >삭제</button>
                        </td>   
                     </tr>
                  </tbody>
               </table>
         </form> -->
         
      <!-- 부트스트랩 적용 후 -->         
         <form name="subject" id="subject" class="row row-cols-lg-auto g-3 align-items-center">
         <input type="hidden" name="no" id="no" value="0" />
         <div class="col-12">
            <label class="visually-hidden" for="s_num">학과번호</label>
            <div class="input-group">
               <input type="text" name="s_num" id="s_num" readonly="readonly" class="form-control"  placeholder="학과번호">
            </div>
         </div>
         
         <div class="col-12">
            <label class="visually-hidden" for="s_num">학과명</label>
            <div class="input-group">
               <input type="text" name="s_name" id="s_name" class="form-control"  placeholder="학과명">
            </div>
         </div>
         
         <div class="col-12">
            <button type="button" id="insertBtn" class="btn btn-success" >입력완료</button>
            <button type="button" id="resetBtn" class="btn btn-success">다시쓰기</button>
                <!-- <button type="button" id="listBtn" class="btn btn-success">목록</button>-->   
         </div>
      </form>
      
      
   </body>
</html> 