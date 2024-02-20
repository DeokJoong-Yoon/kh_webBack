package com.spring.client.board.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import com.spring.client.board.service.BoardService;
import com.spring.client.board.vo.BoardVO;

import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequestMapping("/board/*")
@Controller
public class BoardController {
	
	@Setter(onMethod_ = @Autowired)
	private BoardService boardService;
	
	/*
	 * 글목록 구현하기(페이징 처리부분 제외 목록 조회)
	 * 요청 URL : http://localhost:8080/board/boardList
	 */
	
	//@RequestMapping(value="/boardList", method = RequestMethod.GET) => @GetMapping
	@GetMapping("/boardList")
	public String boardList(@ModelAttribute BoardVO bvo, Model model) {
		log.info("boardList() 메서드 호출");
		// 전체 레코드 조회
		List<BoardVO> boardList = boardService.boardList(bvo);
		model.addAttribute("boardList", boardList);
		return "client/board/boardList";	// /WEB-INF/views/client/board/boardList.jsp
	}
	
	/**
	 * 글쓰기 폼 출력하기
	 */
	@GetMapping(value="/writeForm")
	public String writeForm() {
		log.info("writeForm 호출 성공");
		
		return "client/board/writeForm";
	}
}
