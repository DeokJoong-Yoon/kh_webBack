package com.ncs.test.member.model.vo;

import java.sql.Date;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class Member {
	private String memberId;
	private String memberPwd;
	private String memberName;
	private Date memberEnrollDate;
}
