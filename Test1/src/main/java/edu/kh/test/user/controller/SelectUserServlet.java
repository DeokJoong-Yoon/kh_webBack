package edu.kh.test.user.controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import edu.kh.test.user.model.service.UserService;
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
		
//		UserDAO dao = UserDAO.getInstance();
//		UserDTO userDTO = dao.userSearch(dto);
		
		UserService service = UserService.getInstance();
		UserDTO userDTO = service.memberSelect(dto);
		
		String path = "";
		
		if (userDTO != null) {
			request.setAttribute("dto", userDTO);
			path = "/WEB-INF/views/searchSuccess.jsp";
		} else {
			request.setAttribute("message", "조회 결과가 없습니다.");
			path = "/WEB-INF/views/searchFail.jsp";
		}
		
		RequestDispatcher dispatcher = null;
		dispatcher = request.getRequestDispatcher(path);
		dispatcher.forward(request, response);
	}
}
