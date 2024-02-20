package com.spring.client.board.vo;

import lombok.Data;

@Data
public class BoardVO {
	private int boardNumber = 0; // 글번호
	private String boardName = ""; // 작성자
	private String boardTitle = ""; // 제목
	private String boardContent = ""; // 내용
	private String boardDate = ""; // 작성일
	private String boardPasswd = ""; // 비밀번호
	private int readcnt = 0; // 조회수
}
