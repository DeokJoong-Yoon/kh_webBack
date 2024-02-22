package com.spring.client.board.dao;

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

	/*@Test
	public void testBoardDaoList() {
		BoardVO bvo = new BoardVO();
		List<BoardVO> list = boardDao.boardList(bvo);
		for (BoardVO vo : list) {
			log.info(vo.toString());
		}
	}*/

	/*@Test
	public void testBoardInsert() {
		log.info("boardInsert 메서드 테스트");
		BoardVO bvo = new BoardVO();
		bvo.setBoardName("bnametest1");
		bvo.setBoardTitle("board title test 1");
		bvo.setBoardContent("board test content 1");
		bvo.setBoardPasswd("1234");
		log.info(bvo.toString());
		log.info("적용 된 행의 개수 : " + boardDao.boardInsert(bvo));
	}*/

	/*@Test
	public void testReadCntUpdate() {
		log.info("readCntUpdate 메서드 호출()");
		BoardVO bvo = new BoardVO();
		bvo.setBoardNumber(21);
		int count = boardDao.readCntUpdate(bvo);
		log.info("수정된 행의 수 : " + count);
	}*/
	
	/*@Test
	public void testBoardDetail() {
		log.info("boardDetail 메서드 호출()");
		BoardVO bvo = new BoardVO();
		bvo.setBoardNumber(21);
		log.info(boardDao.boardDetail(bvo).toString());
	}*/
	
	/*@Test
	public void testBoardUpdate() {
		log.info("boardUpdate 메서드 호출");
		BoardVO bvo = new BoardVO();
		bvo.setBoardNumber(4);
		bvo.setBoardTitle("꿈");
		bvo.setBoardContent("새벽하늘에 꿈을 그리고 그 꿈을 품에 안고 다시 잠이든다.");
		int count = boardDao.boardUpdate(bvo);
		log.info("수정된 행의 수 : " + count);
	}*/
	
	/*@Test
	public void testBoardDelete() {
		log.info("boardDelete 메서드 호출");
		BoardVO bvo = new BoardVO();
		bvo.setBoardNumber(3);
		int count = boardDao.boardDelete(bvo);
		log.info("수정된 행의 수 : " + count);
	}*/
	
	@Test
	public void pwdConfirm() {
		log.info("pwdConfirm 메서드 호출");
		BoardVO bvo = new BoardVO();
		bvo.setBoardNumber(11);
		bvo.setBoardPasswd("aetf");
		int state = boardDao.boardDelete(bvo);
		log.info("결과 : " + state);
	}
}
