package com.spring.client.board.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.client.board.dao.BoardDao;
import com.spring.client.board.vo.BoardVO;

@Service
public class BoardServiceImpl implements BoardService {

	@Autowired
	private BoardDao boardDao;

	// 글목록 구현
	@Override
	public List<BoardVO> boardList(BoardVO bvo) {
		List<BoardVO> list = null;
		list = boardDao.boardList(bvo);
		return list;
	}

	// 글입력 구현
	@Override
	public int boardInsert(BoardVO bvo) {
		int result = 0;
		/*
		 * 예외를 발생시킬 코드 작성 bvo.setBoardNumber(0); if(bvo.getBoardNumber() == 0 ) { return
		 * result; }
		 */
		result = boardDao.boardInsert(bvo);
		return result;
	}

	@Override
	public BoardVO boardDetail(BoardVO bvo) {
		boardDao.readCntUpdate(bvo);

		BoardVO detail = boardDao.boardDetail(bvo);
		if (detail != null) {
			detail.setBoardContent(detail.getBoardContent().replaceAll("\n", "<br />"));
		}
		return detail;
	}
	
	
	// 글수정 폼 구현
	@Override
	public BoardVO updateForm(BoardVO bvo) {
		BoardVO updateData = null;
		updateData = boardDao.boardDetail(bvo);
		return updateData;
	}
	
	// 비밀번호 확인 구현
	@Override
	public int pwdConfirm(BoardVO bvo) {
		int result = 0;
		result = boardDao.pwdConfirm(bvo);
		return result;
	}

	// 글 수정 구현
	@Override
	public int boardUpdate(BoardVO bvo) {
		int result = 0;
		result = boardDao.boardUpdate(bvo);
		return result;
	}

	@Override
	public int boardDelete(BoardVO bvo) {
		int result = 0;
		result = boardDao.boardDelete(bvo);
		return result;
	}

}
