package com.spring.client.board.service;

import java.util.List;

import com.spring.client.board.vo.BoardVO;

public interface BoardService {
	public List<BoardVO> boardList(BoardVO bvo); /* 검색 포함 리스트 */
}