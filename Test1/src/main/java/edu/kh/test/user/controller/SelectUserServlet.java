package edu.kh.test.user.controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import edu.kh.test.user.model.dao.UserDAO;
import edu.kh.test.user.model.vo.UserDTO;

/**
 * Servlet implementation class SelectUserServlet
 */
@WebServlet("/selectUser")
public class SelectUserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");

		UserDTO dto = new UserDTO();
		int userNo = Integer.parseInt(request.getParameter("userNo"));
		dto.setUserNo(userNo);
		
		UserDAO dao = new UserDAO();
		UserDTO result = dao.userSearch(dto);
		
		String path = "";
		
		if (result != null) {
			request.setAttribute("dto", result);
			path = "views/searchSuccess.jsp";
		} else {
			request.setAttribute("message", "조회 결과가 없습니다.");
			path = "views/searchFail.jsp";
		}
		
		RequestDispatcher dispatcher = null;
		dispatcher = request.getRequestDispatcher(path);
		dispatcher.forward(request, response);
	}
}
