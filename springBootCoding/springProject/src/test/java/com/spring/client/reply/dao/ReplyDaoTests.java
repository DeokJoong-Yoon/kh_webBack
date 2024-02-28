package com.spring.client.reply.dao;

import java.util.List;

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

	@Test
	public void testReplyDaoList() {
		log.info("ReplyDaoList 테스트 시작");
		ReplyVO rvo = new ReplyVO();
		rvo.setBoardNumber(1);
		List<ReplyVO> list = replyDao.replyList(rvo);
		for (ReplyVO vo : list) {
			log.info(vo.toString());
		}
		log.info("ReplyDaoList 테스트 종료");
	}
}
