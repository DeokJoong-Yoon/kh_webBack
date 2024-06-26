package com.spring.client.reply.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.client.reply.dao.ReplyDao;
import com.spring.client.reply.vo.ReplyVO;

import lombok.Setter;

@Service
public class ReplyServiceImpl implements ReplyService {

	@Setter(onMethod_ = @Autowired)
	private ReplyDao replyDao;

	@Override
	public List<ReplyVO> replyList(ReplyVO rvo) {
		List<ReplyVO> list = null;
		list = replyDao.replyList(rvo);
		return list;
	}

	@Override
	public int replyInsert(ReplyVO rvo) {
		return replyDao.replyInsert(rvo);
	}

	@Override
	public int replyUpdate(ReplyVO rvo) {
		int result = 0;
		result = replyDao.replyUpdate(rvo);
		return result;
	}

	@Override
	public int replyDelete(ReplyVO rvo) {
		int result = 0;
		result = replyDao.replyDelete(rvo);
		return result;
	}

}
