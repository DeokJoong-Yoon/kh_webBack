package com.boot.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.boot.example.domain.SubjectVO;
import com.boot.example.service.SubjectService;

import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequestMapping("/subject/*")
@Controller
public class SubjectController {
	@Setter(onMethod_ = @Autowired)
	private SubjectService subjectservice;
	
	/**
	 * subject 메서드 호출
	 * @return
	 */
	@GetMapping("/subjectList")
	public String subjectList(Model model) {
		log.info("subjectList() 메서드 호출");
		
		List<SubjectVO> subjectList = subjectservice.subjectList();
		
		model.addAttribute("subjectList", subjectList);
		
		log.info(model.toString());
		return "subject/subjectList";
	}
}
