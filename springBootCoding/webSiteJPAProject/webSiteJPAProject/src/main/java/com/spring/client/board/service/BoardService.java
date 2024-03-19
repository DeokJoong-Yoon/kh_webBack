package com.spring.client.board.service;

import java.util.List;

import com.spring.client.board.domain.Board;

public interface BoardService {
	public List<Board> boardList(Board board);
	public void boardInsert(Board board);
}
