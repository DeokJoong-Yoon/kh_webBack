package com.example;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ScoreServlet
 */
@WebServlet("/score")
public class ScoreServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		int score = Integer.parseInt(request.getParameter("score"));
		
		String data = request.getParameter("score");
		if (data != null) {
			score = Integer.parseInt(data);
		}
		String grade = "";
		if(score >= 90) {
			grade = "A";
		} else if (score >= 80) {
			grade = "B";
		} else if (score >= 70) {
			grade = "C";
		} else if (score >=60) {
			grade = "D";
		} else {
			grade = "F";
		}
		
		request.setAttribute("grade", grade);
		
		RequestDispatcher dispatcher = request.getRequestDispatcher("implicitobject/score1.jsp");
		dispatcher.forward(request, response);
	}

}
