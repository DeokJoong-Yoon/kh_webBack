package com.example;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class CalcServlet2
 */
//@WebServlet("/calcServlet2")
public class CalcServlet2 extends HttpServlet {
	private static final long serialVersionUID = 1L;

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
		int num1, num2;
		int result;
		String op;

		response.setContentType("tesxt/plain; charset=UTF-8");
		PrintWriter out = response.getWriter();

		num1 = Integer.parseInt(request.getParameter("num1"));
		num2 = Integer.parseInt(request.getParameter("num2"));
		op = request.getParameter("operator");

		Calc calc = new Calc(num1, num2, op);
		result = calc.getResult();

		out.print(result);
		out.close();
	}

}
