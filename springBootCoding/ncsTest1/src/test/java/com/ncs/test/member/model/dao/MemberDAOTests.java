package com.ncs.test.member.model.dao;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.ncs.test.member.model.vo.Member;

import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class MemberDAOTests {

	@Setter(onMethod_ = @Autowired)
	MemberDAO memberDAO;

	@Test
	public void testLoginProcess() {

		Member member = new Member();
		member.setMemberId("user01");
		member.setMemberPwd("pass01");
		Member result = memberDAO.loginMember(member);
		log.info("결과 + " + result.toString());
	}
}
