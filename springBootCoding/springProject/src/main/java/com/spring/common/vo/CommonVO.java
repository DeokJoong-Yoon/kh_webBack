package com.spring.common.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

//@Data
@ToString
@Setter
@Getter
public class CommonVO {
	private int pageNum = 0; // 페이지 번호
	private int amount = 0; // 페이지에 보여줄 데이터 수

	// 조건검색시 사용할 필드 (검색대상, 검색단어)
	private String search = "";
	private String keyword = "";

	// 날짜검색시 사용할 필드 ( 시작일, 종료일 )
	private String stateDate = "";
	private String endDate = "";

	public CommonVO() {
		this(1, 10);
	}

	public CommonVO(int pageNum, int amount) {
		this.pageNum = pageNum;
		this.amount = amount;
	}

}
