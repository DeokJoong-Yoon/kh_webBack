package com.forward.redirect;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class SecondServlet
 */
@WebServlet("/secondRedirect")
public class SecondServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
//	protected void doGet(HttpServletRequest request, HttpServletResponse response)
//			throws ServletException, IOException {
//		response.setContentType("text/html; charset=utf-8");
//		PrintWriter out = response.getWriter();
//
//		String name = request.getParameter("name");
//		String id = request.getParameter("id");
//
//		out.println("<!DOCTYPE html><html>");
//		out.println("<head><meta charset='UTF-8' />");
//		out.println("<title>redirect 예제</title>");
//		out.println("<link rel='icon' href='data:,'></head>");
//		out.println("<body><div>sendRedirect를 이용한 redirect 실습입니다.</div>");
//		out.println("<div>이름 : " + name + "</div>");
//		out.println("<div>아이디 : " + id + "</div>");
//		out.println("</body></html>");
//
//		out.close();
//	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/html; charset=utf-8");
		PrintWriter out = response.getWriter();

		String address = (String) request.getAttribute("address");

		out.println("<!DOCTYPE html><html>");
		out.println("<head><meta charset='UTF-8' />");
		out.println("<title>redirect 예제</title>");
		out.println("<link rel='icon' href='data:,'></head>");
		out.println("<body><div>sendRedirect를 이용한 바인딩 실습입니다.</div>");
		out.println("<div>주소 : " + address + "</div>");
		out.println("</body></html>");

		out.close();
	}

}
