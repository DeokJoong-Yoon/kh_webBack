package com.mvc.board.service;

import java.util.List;

import com.mvc.board.dao.BoardMapper;
import com.mvc.board.dao.BoardMapperImpl;
import com.mvc.board.vo.BoardVO;

public class BoardServiceImpl implements BoardService {
	/**
	 * private static BoardServiceImpl service = null;
	 * 
	 * private BoardDAO dao = BoardDAO.getInstance();
	 * 
	 * public BoardServiceImpl() { }
	 * 
	 * public static BoardServiceImpl getInstance() { if (service == null) { service
	 * = new BoardServiceImpl(); } return service; }
	 * 
	 * @Override public List<BoardVO> boardList(BoardVO vo) { List<BoardVO> list =
	 *           dao.boardList(vo); return list; }
	 * 
	 * @Override public int boardInsert(BoardVO vo) { int result =
	 *           dao.boardInsert(vo); return result; }
	 */
	private static BoardServiceImpl service = null;

	private BoardMapper mapper = new BoardMapperImpl();
	

	private BoardServiceImpl() {
	}

	public static BoardServiceImpl getInstance() {
		if (service == null) {
			service = new BoardServiceImpl();
		}
		return service;
	}
	
	public List<BoardVO> boardList(BoardVO vo) {
		List<BoardVO> boardList = mapper.boardList(vo);
		return boardList;
	}

	@Override
	public int boardInsert(BoardVO vo) {
		int result = mapper.boardInsert(vo);
		return result;
	}
	
	@Override
	public BoardVO boardDetail(BoardVO boardVO) {
		BoardVO vo = mapper.boardDetail(boardVO);
		return vo;
	}

	@Override
	public void readcntUpdate(BoardVO vo) {
		mapper.readcntUpdate(vo);
	}
}
