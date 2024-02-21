package com.spring.client.board.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

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
	 * 글목록 구현하기(페이징 처리부분 제외 목록 조회) 요청 URL : http://localhost:8080/board/boardList
	 */

	// @RequestMapping(value="/boardList", method = RequestMethod.GET) =>
	// @GetMapping
	@GetMapping("/boardList")
	public String boardList(@ModelAttribute BoardVO bvo, Model model) {
		log.info("boardList() 메서드 호출");
		// 전체 레코드 조회
		List<BoardVO> boardList = boardService.boardList(bvo);
		model.addAttribute("boardList", boardList);
		return "client/board/boardList"; // /WEB-INF/views/client/board/boardList.jsp
	}

	/**
	 * 글쓰기 폼 출력하기
	 */
	@GetMapping(value = "/writeForm")
	public String writeForm() {
		log.info("writeForm 호출 성공");

		return "client/board/writeForm";
	}

//	@PostMapping("/boardInsert")
//	public String boardInsert(@ModelAttribute BoardVO bvo, Model model) {
//		log.info("boardInsert 호출 성공");
//
//		int result = 0;
//		String url = "";
//
//		result = boardService.boardInsert(bvo);
//		if (result == 1) {
//			url = "/board/boardList";
//		} else {
//			url = "/board/writeForm";
//		}
//
//		return "redirect:" + url;
//	}

	/**
	 * 글쓰기 구현하기 RedirectAttributes 객체는 리다리엑트 시점(return "redirect:/경로")에 한번만 사용되는
	 * 데이터를 전송할 수 있는 addFlashAttribute() 라는 기능을 지원한다.
	 * 
	 * redirect:/board/writeForm?errorMsg=입력에 문제가 있어 다시 진행해 주세요 라고 전송하고자 할 때 이때
	 * ras.addFlashAttribute("errorMsg", "입력에 문제가 있어 다시 진행해 주세요.");
	 * redirect:/board/writeForm으로 명시하면 된다.
	 */
//	@PostMapping("/boardInsert")
//	public String boardInsert(BoardVO bvo, RedirectAttributes ras) {
//		log.info("boardInsert 호출 성공");
//
//		int result = 0;
//		String url = "";
//
//		
//		result = boardService.boardInsert(bvo);
//		if (result == 1) {
//			url = "/board/boardList";
//		} else {
//			ras.addFlashAttribute("errorMsg", "입력에 문제가 있어 다시 진행해 주세요.");
//			url = "/board/writeForm";
//		}
//
//		return "redirect:" + url;
//	}
	@PostMapping("/boardInsert")
	public String boardInsert(BoardVO bvo, RedirectAttributes ras) {
		log.info("boardInsert 호출 성공");
		boardService.boardInsert(bvo);
		
		log.info(bvo.toString());
		return "redirect:/board/boardList";
	}

	/**
	 * 글 상세보기 구현
	 */
	@GetMapping("/boardDetail")
	public String boardDetail(@ModelAttribute BoardVO bvo, Model model) {
		log.info("boardDetail 호출 성공()");

		BoardVO detail = boardService.boardDetail(bvo);
		model.addAttribute("detail", detail);
		return "client/board/boardDetail";
	}
	
	/**
	 * 글수정 폼 출력하기
	 * @param : BoardVO(글번호만 boardNumber)
	 * @return : BoardVO
	 */
	@GetMapping(value="/updateForm")
	public String updateForm(@ModelAttribute BoardVO bvo, Model model) {
		log.info("updateForm 호출 성공");
		log.info("boardNumber = " + bvo.getBoardNumber());
		
		BoardVO updateData = boardService.updateForm(bvo);
		
		model.addAttribute("updateData", updateData);
		return "client/board/updateForm";
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
