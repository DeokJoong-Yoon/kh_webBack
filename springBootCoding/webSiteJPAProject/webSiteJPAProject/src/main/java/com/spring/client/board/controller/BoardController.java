package com.spring.client.board.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.spring.client.board.domain.Board;
import com.spring.client.board.service.BoardService;

import lombok.Setter;

/*************************************
 * Object-Relational Mapping (ORM: 객체와 관계형데이터베이스 매핑, 객체와 DB의 테이블이 매핑을 이루는 것) -
 * 객체가 테이블이 되도록 매핑 시켜주는 프레임워크 이다. - 프로그램의 복잡도를 줄이고 자바 객체와 쿼리를 분리할 수 있으며 트랜잭션 처리나
 * 기타 데이터베이스 관련 작업들을 좀 더 편리하게 처리할 수 있는 방법
 * 
 * JPA란? - Java Persistence API (자바 ORM 기술에 대한 API 표준 명세) - 한마디로 ORM을 사용하기 위한
 * 인터페이스를 모아둔 것이라고 볼 수 있다. - 자바 어플리케이션에서 관계형 데이터베이스를 사용하는 방식을 정의한 인터페이스이다. -
 * ORM에 대한 자바 API 규격이며 Hibernate, OpenJPA 등이 JPA를 구현한 구현체 이다. (ORM을 사용하기 위한
 * 인터페이스를 모아둔 것) - Hibernate 이외에도 EcipseLink, DataNucleus, OpenJPA, TopLink 등이
 * 있습니다. ※결국 인터페이스이기 때문에 JPA를 사용하기 위해서는 JPA를 구현한 Hibernate, EclipseLink,
 * DataNucleus 같은 ORM 프레임워크를 사용해야 한다.
 * 
 * Hibernate? - JPA를 사용하기 위해서 JPA를 구현한 ORM 프레임워크중 하나. (자바를 위한 오픈소스
 * ORM(Object-relational mapping) 프레임워크를 제공한다.) - Hibernate는 JPA 명세의 구현체이다.
 * javax.persistence.EntityManager와 같은 JPA의 인터페이스를 직접 구현한 라이브러리이다.
 ********************************************/
@Controller
@RequestMapping("/board")
public class BoardController {

	@Setter(onMethod_ = @Autowired)
	private BoardService boardService;

	/**
	 * 검색 기능 및 페이징 처리 제외
	 * 
	 * @param board
	 * @return
	 */
	@GetMapping("/boardList")
	public String boardList(Board board, Model model) {
		List<Board> boardList = boardService.boardList(board);
		model.addAttribute("boardList", boardList);

		return "client/board/boardList";
	}

	@GetMapping("/insertForm")
	public String insertForm(Board board) {
		return "client/board/insertForm";
	}

	@PostMapping("/boardInsert")
	public String boardInsert(Board board) {
		boardService.boardInsert(board);
		return "redirect:/board/boardList";
	}

	@GetMapping("/{no}")
	public String boardDetail(@PathVariable("no") Board board, Model model) {
		Board detail = boardService.boardDetail(board);
		model.addAttribute("detail", detail);

		String newLine = System.getProperty("line.separator").toString();
		model.addAttribute("newLine", newLine);
		return "client/board/boardDetail";
	}

	@PostMapping("/updateForm")
	public String updateForm(Board board, Model model) {
		Board updateData = boardService.updateForm(board);
		model.addAttribute("updateData", updateData);
		return "client/board/updateForm";
	}
	
	@PostMapping("/boardUpdate")
	public String boardUpdate(Board board) {
		boardService.boardUpdate(board);;
		return "redirect:/board/" + board.getNo();
	}
	
	@PostMapping("/boardDelete")
	public String boardDelete(Board board) {
		boardService.boardDelete(board);
		return "redirect:/board/boardList";
	}
}
