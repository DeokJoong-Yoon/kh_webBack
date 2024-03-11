package com.spring.data.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.spring.data.service.DataService;

@Controller
@RequestMapping("/data/*")
public class DataController {

	@GetMapping("/chungnamView")
	public String chungnamView() {
		return "data/chungnamView";
	}

	@Autowired
	DataService dataService;
	
	@ResponseBody
	@GetMapping(value = "/chungnamList", produces = "application/xml; charset=UTF-8")
	public String chungnamList() throws Exception {

		StringBuffer result = dataService.chungnamList();

		return result.toString();
	}
}
