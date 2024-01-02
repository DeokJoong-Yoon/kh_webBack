package com.example;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class CalcServlet
 */
@WebServlet("/calcServlet")
public class CalcServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public CalcServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8");

		int number1 = Integer.parseInt(request.getParameter("num1"));
		int number2 = Integer.parseInt(request.getParameter("num2"));
		char operator = (request.getParameter("operator")).charAt(0);
		int result = calc(number1, number2, operator);
		PrintWriter out = response.getWriter();

		out.println("<DOCTYPE html><html>");
		out.println("<head><meta charset='UTF-8' /><title>POST DATA</title>");
		out.println("<link rel='icon' href='data:,'>");
		out.println("</head>");
		out.println("<body>");
		out.println("<h2 style='text-align:center'>POST 방식 테스트입니다.</h2>");
		out.println("<h1>계산기<h1>");
		out.println("<hr style='width:28%; margin-left:0px' />");

		out.println(number1 + " " + operator + " " + number2 + " = " + result);

		out.println("</body>");
		out.println("</html>");

		out.close();

	}

	private int calc(int number1, int number2, char operator) {
		int result = 0;
		switch (operator) {
		case '+':
			result = number1 + number2;
			break;
		case '-':
			result = number1 - number2;
			break;
		case '*':
			result = number1 * number2;
			break;
		case '/':
			if (number2 != 0)
				result = number1 / number2;
			else
				result = 0;
			break;
		}
		return result;
	}

}
