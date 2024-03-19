package com.spring.client.board.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.client.board.domain.Board;
import com.spring.client.board.repository.BoardRepository;

import lombok.Setter;

@Service
public class BoardServiceImpl implements BoardService {

	@Setter(onMethod_ = @Autowired)
	private BoardRepository boardRepository;

	@Override
	public List<Board> boardList(Board board) {
		List<Board> boardList = null;
		boardList = (List<Board>) boardRepository.findAll();
		return boardList;
	}

	@Override
	public void boardInsert(Board board) {
		boardRepository.save(board);
	}
}
