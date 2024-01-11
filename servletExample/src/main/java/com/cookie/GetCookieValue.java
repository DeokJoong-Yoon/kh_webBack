package com.cookie;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLDecoder;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class GetCookieValue
 */
@WebServlet("/getCookie")
public class GetCookieValue extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		
		out.println("<!DOCTYPE html><html>");
		out.println("<head><meta charset='UTF-8' />");
		out.println("<title>Cookie 예제</title>");
		out.println("<link rel='icon' href='data:.'></head>");
		out.println("<body>");
		
		Cookie[] allValues = request.getCookies();
		for (int i = 0; i < allValues.length; i++) {
			out.println("<h5>Cookie 값 가져오기 : ");
			if(!allValues[i].getName().equals("cookieName")) {
				out.print(URLDecoder.decode(allValues[i].getValue(), "utf-8"));
			} else {
				out.print(allValues[i].getValue());
			}
			out.print("</h3>");
		}
		out.print("<br /><br /><br /><br /><br /><br /><br />");
		out.print("cookie 원본<br />");
		for (int i = 0; i < allValues.length; i++) {
				out.print(allValues[i].getName()+ " : " + allValues[i].getValue() + "<br />");
		}
		
		out.println("</body></html>");
		out.close();
	}

}
