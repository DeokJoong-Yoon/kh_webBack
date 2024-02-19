package com.boot.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.boot.example.domain.BookVO;
import com.boot.example.service.BookService;

import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequestMapping("/book/*")
@Controller
public class BookController {

//	@Autowired
	@Setter(onMethod_ = @Autowired)
	private BookService bookService;

	@GetMapping("/bookList")
	public String bookList(Model model) {
		log.info("bookList() 메서드 호출");

		List<BookVO> bookList = bookService.bookList();

//		log.info(bookList.toString());
		model.addAttribute("bookList", bookList);

		log.info(model.toString());
		return "book/bookList";
	}

	@PostMapping("/bookInsert")
	public String bookInsert(@ModelAttribute BookVO bookVO) {
		log.info("bookInsert() 메서드 호출");
		bookService.bookInsert(bookVO);
		// redirect는 mapping url을 불러온다. -->@GetMapping("/bookList")
		return "redirect:/book/bookList";
	}
	
	@GetMapping("/bookDelete")
	public String bookDelete(BookVO bookVO) {
		log.info("bookDelete() 메서드 호출");
		log.info("bookId : " + bookVO.getBookId());
		bookService.bookDelete(bookVO);
		
		return "redirect:/book/bookList";
	}
	
	@GetMapping("/bookUpdate")
	public String bookUpdateForm(@ModelAttribute BookVO bookVO) {
		
		return "redirect:/book/updateForm";
	}
	
	@GetMapping("/bookUpdateForm")
	public String bookUpdate() {
		return "redirect:/book/bookList";
	}
}
