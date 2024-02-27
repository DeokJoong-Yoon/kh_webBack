package com.spring.client.reply.service;

import org.springframework.stereotype.Service;

import com.spring.client.reply.vo.ReplyVO;

@Service
public class ReplyServiceImpl implements ReplyService {

	@Override
	public ReplyVO replyList(ReplyVO rvo) {
		return rvo;
	}

}
