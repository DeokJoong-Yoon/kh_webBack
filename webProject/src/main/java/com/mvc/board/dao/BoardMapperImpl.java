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
		return session.insert("boardInsert", vo);
	}

	@Override
	public void readcntUpdate(BoardVO vo) {
		session.update("readcntUpdate", vo);
	}

	@Override
	public BoardVO boardDetail(BoardVO vo) {
		return (BoardVO) session.selectOne("boardDetail", vo);
	}

	@Override
	public int boardPasswdChk(BoardVO vo) {
		return (int)session.selectOne("boardPasswdChk", vo);
	}

	@Override
	public int boardUpdate(BoardVO vo) {
		return session.update("boardUpdate", vo);
	}

	@Override
	public int boardDelete(BoardVO vo) {
		return session.delete("boardDelete", vo);
	}

	public void close() {
		session.close();
	}

}
