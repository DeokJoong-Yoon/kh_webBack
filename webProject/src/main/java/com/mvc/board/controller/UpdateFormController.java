package com.mvc.board.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mvc.board.service.BoardService;
import com.mvc.board.service.BoardServiceImpl;
import com.mvc.board.vo.BoardVO;
import com.mvc.common.controller.Controller;

public class UpdateFormController implements Controller {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) {
		BoardVO vo = new BoardVO();
		vo.setNum(Integer.parseInt(request.getParameter("num")));
		// String code = request.getParameter("code");

		BoardService service = BoardServiceImpl.getInstance();
		BoardVO boardVO = service.updateForm(vo);

		request.setAttribute("updateData", boardVO);

		// code 변수를 사용한 이유는 수정화면 이동시 정상적인 접근인지 수정에 문제가 생겨 수정화면으로 접근한 것인지 식별하기 위해 사용.
		// if (code != null && code.equals("1")) { // 수정처리 시 문제가 발생하면 code값을 전달받음.
		// request.setAttribute("errorMsg", "수정완료에 문제가 있어 잠시 후 다시 입력해 주세요.");
		// }

		return "/board/updateForm";
	}

}
