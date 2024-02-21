package com.spring.client.board.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.spring.client.board.vo.BoardVO;

@Mapper
public interface BoardDao {
	public List<BoardVO> boardList(BoardVO bvo); /* 검색 포함 리스트 */
	public int boardInsert(BoardVO bvo);
	public BoardVO boardDetail(BoardVO bvo);
	public int readCntUpdate(BoardVO bvo);
}
