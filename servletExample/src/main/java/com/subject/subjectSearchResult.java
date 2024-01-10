package com.subject;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class subjectSearchResult
 */
@WebServlet("/searchResult")
public class subjectSearchResult extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");

		SubjectVO vo = new SubjectVO();
		int no = Integer.parseInt(request.getParameter("no"));
		vo.setNo(no);
		
		SubjectDAO dao = new SubjectDAO();
		SubjectVO result = dao.subjectSearch(vo);
		
		String path = "";
		
		if (result != null) {
			request.setAttribute("svo", result);
			path = "subject/subjectSearchSuccess.jsp";
		} else {
			request.setAttribute("message", "조회 결과가 없습니다.");
			path = "subject/subjectFail.jsp";
		}
		RequestDispatcher dispatcher = null;
		dispatcher = request.getRequestDispatcher(path);
		dispatcher.forward(request, response);
	}

}
