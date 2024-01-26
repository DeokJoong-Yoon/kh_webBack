package com.mvc.board.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mvc.board.service.BoardService;
import com.mvc.board.service.BoardServiceImpl;
import com.mvc.board.vo.BoardVO;
import com.mvc.common.controller.Controller;

public class GetBoardListController implements Controller {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) {
		BoardVO vo = new BoardVO();

		BoardService service = BoardServiceImpl.getInstance();

		
		String keyword = request.getParameter("keyword");
		if (keyword != null) {
			String search = request.getParameter("search");
			vo.setSearch(search);
			vo.setKeyword(keyword);
		}
		List<BoardVO> list = service.boardList(vo);

		request.setAttribute("list", list);
		return "/board/getBoardList";
	}

}
