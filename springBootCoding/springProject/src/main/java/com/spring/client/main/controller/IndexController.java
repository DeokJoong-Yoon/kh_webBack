package com.spring.client.main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

//	@GetMapping("/")
//	@ResponseBody
//	public String index() {
//		return "springProject 실행";
//	}
	
	@GetMapping
	public String index() {
		return "index";
	}
}
