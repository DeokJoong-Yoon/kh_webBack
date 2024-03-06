package com.spring.client.reply.dao;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.spring.client.reply.vo.ReplyVO;

import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@SpringBootTest
public class ReplyDaoTests {

	@Setter(onMethod_ = @Autowired)
	private ReplyDao replyDao;

	/*
	 * @Test public void testReplyDaoList() { log.info("ReplyDaoList 테스트 시작");
	 * ReplyVO rvo = new ReplyVO(); rvo.setBoardNumber(1); List<ReplyVO> list =
	 * replyDao.replyList(rvo); for (ReplyVO vo : list) { log.info(vo.toString()); }
	 * log.info("ReplyDaoList 테스트 종료"); }
	 */

	/*@Test
	public void testReplyInsert() {
		ReplyVO rvo = new ReplyVO();
		rvo.setBoardNumber(1);
		rvo.setReplyName("Philip");
		rvo.setReplyContent(
				"함께 있는 사람보다 학식이 높아 보이지 말라, 당신의 학식을 회중시계 마냥 주머니 속에 감춰라. 단지 시간을 세기 위해 시계를 꺼내지말라. 누군가가 시간을 물어보면 알려줘라. ");
		rvo.setReplyPasswd("1234");
		int result = replyDao.replyInsert(rvo);

		log.info("입력결과 : " + result);
	}*/
	
	/*@Test
	public void testReplyDelete() {
		ReplyVO rvo = new ReplyVO();
		rvo.setReplyNumber(2);
		int result = replyDao.replyDelete(rvo);
		
		log.info("삭제결과 : " + result);
	}*/
	
	/*@Test
	public void testReplyUpdate() {
		ReplyVO rvo = new ReplyVO();
		rvo.setReplyContent("타인의 권리를 침해하지 않는 한, 모든 자유는 보장되어야 한다.");
		rvo.setReplyPasswd("1234");
		rvo.setReplyName("존 밀");
		rvo.setReplyNumber(11);
		int result = replyDao.replyUpdate(rvo);
		
		log.info("수정결과 : " + result);
	}*/
	
	@Test
	public void testReplyCount() {
		int boardNumber = 1;
		int result = replyDao.replyCount(boardNumber);
		log.info(boardNumber + "번 게시물 댓글 수 : " + result);
	}
	
	public void testReplyChoiceDelete() {
		
	}
}
