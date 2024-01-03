package com.book;

import java.io.IOException;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.example.BookVO;

/**
 * Servlet implementation class BookInput
 */
@WebServlet("/bookInput")
public class BookInputServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");

		String title = request.getParameter("title");
		String author = request.getParameter("author");
		String publisher = request.getParameter("publisher");

		// BookVO book = new BookVO(request.getParameter("title"),
		// request.getParameter("author"), request.getParameter("publisher"));
		BookVO book = new BookVO();
		book.setTitle(title);
		book.setAuthor(author);
		book.setPublisher(publisher);

		request.setAttribute("book", book);

		RequestDispatcher dispatcher = request.getRequestDispatcher("bookOutput");
		dispatcher.forward(request, response);
	}

}
