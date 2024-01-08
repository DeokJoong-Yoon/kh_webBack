package com.jdbc;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.subject.SubjectDAO;
import com.subject.SubjectVO;

/**
 * Servlet implementation class SubjectServlet2
 */
@WebServlet("/listView")
public class SubjectServlet2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		
		SubjectDAO dao = new SubjectDAO();
		ArrayList<SubjectVO> list = dao.getSubjectTotal(null);
		int counter = list.size();

		out.println("<!DOCTYPE html><html>");
		out.println("<head><meta charset='UTF-8' />");
		out.println("<title>학과 리스트 예제</title>");
		out.println("<link rel='stylesheet' href='servletExample/css/subject.css' />");
		out.println("<link rel='icon' href='data:,'>");
		out.println("</head>");
		out.println("<body>");
		out.println("<h3>학과 리스트</h3>");
		out.println("<div id='subjectList'><table>");
		out.println("<thead><tr>");
		out.println("<th>일련번호</th>");
		out.println("<th>학과번호</th>");
		out.println("<th>학과명</th>");
		out.println("</tr></thead>");
		out.println("<tbody>");
		if (counter > 0) {
			for (SubjectVO svo : list) {
				out.print("<tr class='text-center'>");
				out.print("<td>" + svo.getNo() + "</td>");
				out.print("<td>" + svo.getS_num() + "</td>");
				out.print("<td>" + svo.getS_name() + "</td>");
				out.print("</tr>");
			}
		}
		out.println("</body></table>");
		out.println("</body></html>");
		out.close();
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
