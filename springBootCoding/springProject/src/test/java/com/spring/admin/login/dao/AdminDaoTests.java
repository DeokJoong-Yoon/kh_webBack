package com.spring.admin.login.dao;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.spring.admin.login.vo.AdminLoginVO;

import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@SpringBootTest
public class AdminDaoTests {

	@Setter(onMethod_ = @Autowired)
	private AdminLoginDao adminLoginDao;

	@Test
	public void testBoardDaoList() {
		AdminLoginVO admin = new AdminLoginVO();
		
		admin.setAdminId("javaadmin");
		admin.setAdminPasswd("java1234");
		
		AdminLoginVO result = adminLoginDao.loginProcess(admin);
		log.info(result.toString());
	}

}
