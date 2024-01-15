package com.mvc.board.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.mvc.board.vo.BoardVO;

import mybatis.SqlSessionTemplate;

public class BoardMapperImpl implements BoardMapper {
	private SqlSession session;

	public BoardMapperImpl() {
		session = SqlSessionTemplate.getSqlSession();
	}

	@Override
	public List<BoardVO> boardList(BoardVO vo) {
		return session.selectList("boardList");
	}
	
	@Override
	public int boardInsert(BoardVO vo) {
//		return session.insert("boardInsert");
		return session.insert("boardInsert", vo);
	}


	public void close() {
		session.close();
	}


}
