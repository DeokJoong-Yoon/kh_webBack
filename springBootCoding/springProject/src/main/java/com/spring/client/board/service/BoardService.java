package com.spring.client.board.service;

import java.util.List;

import com.spring.client.board.vo.BoardVO;

public interface BoardService {
	public List<BoardVO> boardList(BoardVO bvo); /* 검색 포함 리스트 */

	public int boardListCnt(BoardVO bvo);

	/* public int boardInsert(BoardVO bvo); */

	public BoardVO boardDetail(BoardVO bvo);

	public int pwdConfirm(BoardVO bvo);

	public BoardVO updateForm(BoardVO bvo);

	/* public int boardUpdate(BoardVO bvo); */

	/* public int boardDelete(BoardVO bvo); */

	public int replyCount(int boardNumber);

	/* 첨부파일 추가시 */
	public int boardInsert(BoardVO bvo) throws Exception;

	public int boardUpdate(BoardVO bvo) throws Exception;

	public int boardDelete(BoardVO bvo) throws Exception;
}
