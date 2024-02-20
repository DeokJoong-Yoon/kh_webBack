package com.spring.client.board.dao;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.spring.client.board.vo.BoardVO;

import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@SpringBootTest
public class BoardDaoTests {

	@Setter(onMethod_ = @Autowired)
	private BoardDao boardDao;

	@Test
	public void testBoardDaoList() {
		BoardVO bvo = new BoardVO();
		List<BoardVO> list = boardDao.boardList(bvo);
		for (BoardVO vo : list) {
			log.info(vo.toString());
		}

	}
}
