package com.spring.client.reply.vo;

import lombok.Data;

@Data
public class ReplyVO {
	private int replyNumber;
	private int boardNumber;
	private String replyName;
	private String replyContent;
	private String replyPasswd;
	private String replyDate;
}
