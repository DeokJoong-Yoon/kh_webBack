package com.binding;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.member.Address;
import com.member.User;

/**
 * Servlet implementation class UserServlet
 */
@WebServlet("/userInfo")
public class UserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Address address = new Address();
		address.setCity("서울 특별시 강남구 삼성동 9999");
		address.setZipcode("28930");
		
		User user = new User();
		user.setUname("홍길동");
		user.setUid("javauser");
		user.setUnum(21010001);
		user.setAddress(address);
		
		request.setAttribute("user", user);
		
		RequestDispatcher dispatcher = request.getRequestDispatcher("jsp/user.jsp");
		dispatcher.forward(request, response);
	}

}
