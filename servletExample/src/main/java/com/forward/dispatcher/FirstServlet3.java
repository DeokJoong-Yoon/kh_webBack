package com.forward.dispatcher;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class FirstServlet3
 */
@WebServlet("/firstDispatcher")
public class FirstServlet3 extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/html;charset=utf-8");

		// get 방식
//		RequestDispatcher dispatch = request.getRequestDispatcher("secondDispatcher?language=java");
//		dispatch.forward(request, response);

		// 바인딩
		// 포워드 서블릿까지 유효한 요청 객체 속성으로 설정
		request.setAttribute("language", "java");
		request.setAttribute("name", "홍길동");
		request.setAttribute("address", "서울 특별시 강남구 강남구 테헤테헤라로");
		request.setAttribute("age", 20);

		RequestDispatcher dispatch = request.getRequestDispatcher("secondDispatcher");
		dispatch.forward(request, response);
	}
}
