package com.boot.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boot.example.dao.BookDAO;
import com.boot.example.domain.BookVO;

@Service
public class BookServiceImpl implements BookService {

//	@Setter(onMethod_ = @Autowired)
	@Autowired
	private BookDAO bookDAO;

	@Override
	public List<BookVO> bookList() {
		List<BookVO> bookList = bookDAO.bookList();
		return bookList;
	}

	@Override
	public int bookInsert(BookVO bookVO) {
		int result = bookDAO.bookInsert(bookVO);
		return result;
	}
	
	@Override
	public int bookUpdate(BookVO bookVO) {
		int result = bookDAO.bookUpdate(bookVO);
		return result;
	}

	@Override
	public int bookDelete(BookVO bookVO) {
		int result = bookDAO.bookDelete(bookVO);
		return result;
	}
}
