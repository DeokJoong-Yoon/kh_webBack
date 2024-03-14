package com.spring.client.board.vo;

import lombok.Data;

@Data
//@EqualsAndHashCode(callSuper = false)
public class BoardVO /* extends CommonVO */ {
	private int boardNumber = 0; // 글번호
	private String boardName = ""; // 작성자
	private String boardTitle = ""; // 제목
	private String boardContent = ""; // 내용
	private String boardDate; // 작성일
	private String boardPasswd = ""; // 비밀번호
	private int readcnt = 0; // 조회수
	private int replyCnt = 0; // 댓글개수
	
//	private MultipartFile file;	// 파일 업로드를 위한 필드
//	private String boardThumb = ""; // 실제서버에 저장할 파일명
//	private String boardFile = ""; // 실제서버에 저장할 파일명
}
