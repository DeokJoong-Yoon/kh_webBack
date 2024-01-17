package org.kh.member.model.controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.kh.member.model.service.MemberServiceImpl;
import org.kh.member.model.vo.MemberVO;

/**
 * Servlet implementation class MemberInsertController
 */
@WebServlet("/insert")
public class MemberInsertController extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		MemberVO vo = new MemberVO();
		vo.setUserId("jspuser2");
		vo.setUserPw("jsp1234");
		vo.setUserName("김철수");
		vo.setUserAddr("서울특별시 강남구 테헤란로14길 6");
		
		MemberServiceImpl service = new MemberServiceImpl();
		int result = service.insertMember(vo);
		String message = "";
		
		if(result == 1) {
			message = "회원 등록 완료";
		} else {
			message = "회원 등록 실패";
		}
		request.setAttribute("message", message);
		request.setAttribute("vo", vo);
		RequestDispatcher dispatcher = request.getRequestDispatcher("/WEB-INF/jsp/memberResult.jsp");
		dispatcher.forward(request, response);
	}

}
