package com.mvc.board.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mvc.board.service.BoardService;
import com.mvc.board.service.BoardServiceImpl;
import com.mvc.board.vo.BoardVO;
import com.mvc.common.controller.Controller;

public class DetailBoardController implements Controller {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) {
		BoardVO boardVO = new BoardVO();
		boardVO.setNum(Integer.parseInt(request.getParameter("num")));

		BoardService service = BoardServiceImpl.getInstance();
		service.readcntUpdate(boardVO);

		BoardVO data = service.boardDetail(boardVO);

		request.setAttribute("detail", data);

		return "/board/detailBoard";
	}

}
