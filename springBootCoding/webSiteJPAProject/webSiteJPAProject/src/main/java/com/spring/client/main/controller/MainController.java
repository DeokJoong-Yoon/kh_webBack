package com.spring.client.main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MainController {
	
	/** 실제 메인 페이지 */
	@GetMapping("/")
	public String main() {

		return "main";
	}
}
