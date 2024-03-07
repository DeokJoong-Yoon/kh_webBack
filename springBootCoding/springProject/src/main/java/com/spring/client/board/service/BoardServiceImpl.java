package com.spring.client.board.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.client.board.dao.BoardDao;
import com.spring.client.board.vo.BoardVO;
import com.spring.client.reply.dao.ReplyDao;
import com.spring.common.file.FileUploadUtil;

import lombok.Setter;

@Service
public class BoardServiceImpl implements BoardService {

	@Autowired
	private BoardDao boardDao;

	@Setter(onMethod_ = @Autowired)
	private ReplyDao replyDao;

	// 글목록 구현
	@Override
	public List<BoardVO> boardList(BoardVO bvo) {
		List<BoardVO> list = null;
		list = boardDao.boardList(bvo);
		return list;
	}

	/*
	 * // 글입력 구현
	 * 
	 * @Override public int boardInsert(BoardVO bvo) { int result = 0;
	 * 
	 * 예외를 발생시킬 코드 작성 bvo.setBoardNumber(0); if(bvo.getBoardNumber() == 0 ) { return
	 * result; }
	 * 
	 * result = boardDao.boardInsert(bvo); return result; }
	 */

	@Override
	public int boardInsert(BoardVO bvo) throws Exception {
		int result = 0;
		if (bvo.getFile().getSize() > 0) {
			String fileName = FileUploadUtil.fileUpload(bvo.getFile(), "board"); // board_1658205347_cat.jpg
			bvo.setBoardFile(fileName);
		}
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
	/*
	 * @Override public int boardUpdate(BoardVO bvo) { int result = 0; result =
	 * boardDao.boardUpdate(bvo); return result; }
	 */

	@Override
	public int boardUpdate(BoardVO bvo) throws Exception {
		int result = 0;
		if (!bvo.getFile().isEmpty()) { // 새롭게 업로드할 파일이 존재하면
			if (!bvo.getBoardFile().isEmpty()) { // 기존 파일이 존재하면
				FileUploadUtil.fileDelete(bvo.getBoardFile());
			}

			String fileName = FileUploadUtil.fileUpload(bvo.getFile(), "board");
			bvo.setBoardFile(fileName);
		}
		result = boardDao.boardUpdate(bvo);
		return result;
	}

	/*
	 * @Override public int boardDelete(BoardVO bvo) { int result = 0; result =
	 * boardDao.boardDelete(bvo); return result; }
	 */

	@Override
	public int boardDelete(BoardVO bvo) {
		int result = 0;
		if (!bvo.getBoardFile().isEmpty()) { // boardFile 필드의 값이 null 이거나 "" 아니면 (이미지 파일이 존재하면)
			FileUploadUtil.fileDelete(bvo.getBoardFile());
		}
		result = boardDao.boardDelete(bvo);
		return result;
	}

	@Override
	public int boardListCnt(BoardVO bvo) {
		return boardDao.boardListCnt(bvo);
	}

	/**
	 * 해당 게시물의 댓글 존재 여부 확인 댓글이 존재하면 댓글수를 반환하고 존재하지 않으면 0을 반환
	 */
	@Override
	public int replyCount(int boardNumber) {
		int result = 0;
		result = replyDao.replyCount(boardNumber);
		return result;
	}

}
