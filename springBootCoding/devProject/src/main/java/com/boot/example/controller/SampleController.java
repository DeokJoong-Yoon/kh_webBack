package com.boot.example.controller;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.boot.example.domain.ExampleVO;
import com.boot.example.domain.SampleDTO;
import com.boot.example.domain.SampleDTOList;

import lombok.extern.slf4j.Slf4j;

@Controller
@RequestMapping("/sample/*")
@Slf4j
public class SampleController {

//	@GetMapping("/basic")
//	public String basic() {
//		log.info("basic get ................");
//		
//		return "example/basic";	// /WEB-INF/views/example/basic.jsp
//	}

	@GetMapping("/basic")
	public void basic() {
		log.info("basic get1........................"); // WEB-INF/views/sample/basic.jsp
	}

	/*
	 * params는 쿼리 스트링에 따라 요청 범위를 제한. /bbs에서 kind-notice를 params에 정의하면
	 * /bbs?kind=notice인 요청만 받아 드림
	 */
	@GetMapping(path = "/bbs", params = "kind=notice")
	public String get1() {
		log.info("params에 따른 get2.................");

		return "example/basic";
	}

	@GetMapping(path = "/bbs", params = "kind=qna")
	public String get2() {
		log.info("params에 따른 get3...............");

		return "example/basic";

	}

	/* 요청방법 : http://localhost:8080/sample/exam01?name=홍길동&age=25 */
	@GetMapping("/exam01")
	public String exam01(@RequestParam("name") String name, @RequestParam(required = false, defaultValue = "0") int age,
			Model model) {
		log.info("name : " + name);
		log.info("age : " + age);

		model.addAttribute("name", name);
		model.addAttribute("age", age);
		return "example/exam01"; // 뷰정보 /WEB-INF/views/example/exam01.jsp

	}

	/* 요청방법 : http://localhost:8080/sample/exam02?name=홍길동&age=30 */
	/* 참고 : @ModelAttribute는 전달받은 파라미터를 Model에 담아서 전달하도록 할 때 필요한 어노테이션이다. */
	@GetMapping("/exam02")
	public String exam02(@ModelAttribute("sample") SampleDTO dto/* , Model model */) {
		log.info("" + dto);

//		 model.addAttribute("dto", dto);
		return "example/exam02";
	}

	@GetMapping("/exam02Array")
	public String exam02Array(@RequestParam("hobby") String[] hobby, Model model) {
		log.info("array hobby : " + Arrays.toString(hobby));

		model.addAttribute("hobby", hobby);
		return "example/exam02Array";
	}

	@GetMapping("/exam02List")
	public String exam02List(@RequestParam("language") ArrayList<String> language, Model model) {
		log.info("list language : " + language.toString());
		for (String lang : language) {
			log.info("language values : " + lang);
		}

		model.addAttribute("language", language);
		return "example/exam02List";
	}

	@GetMapping("/exam02Bean")
	public String exam02Bean(@ModelAttribute SampleDTOList list) {
		log.info("list name/age : " + list);

		return "example/exam02Bean";
	}

	@GetMapping("/exam02Bean1")
	public String exam02Bean1(@ModelAttribute ExampleVO exampleVO) {
		log.info("ExampleVO no/name/phone : " + exampleVO.toString());

		return "example/exam02Bean1";
	}

	@GetMapping("/exam03")
	public String exam03(SampleDTO dto, @ModelAttribute("number") int number) {
		log.info("dto : " + dto);
		log.info("number : " + number);

		return "example/exam03";
	}

	/**
	 * @ResponseBody : 일반적인 JSP와 같은 뷰로 전달되는 게 아니라 데이터 자체를 전달하기 위한 용도이다.
	 */
	@GetMapping(value = "/exam04", produces = "text/plain; charset=UTF-8")
	@ResponseBody
	public String exam04() {
		return "화면에 데이터 그대로 출력합니다.";
	}

	@GetMapping("/exam05")
//	@GetMapping(value = "/exam05", produces = "application/json; charset=UTF-8")
	@ResponseBody
	public SampleDTO exam05() {
		log.info("/exam05...........");

		SampleDTO dto = new SampleDTO();
		dto.setAge(30);
		dto.setName("홍길동");

		return dto;
	}

	/**
	 * ResponseEntity는 개발자가 직접 결과 데이터와 HTTP 상태 코드(200, 404, 500..)를 직접 제어할 수 있는 클래스
	 */
	@GetMapping("/exam06")
	public ResponseEntity<SampleDTO> exam06() {
		log.info("/exam06...........");

		SampleDTO dto = new SampleDTO();
		dto.setAge(25);
		dto.setName("김철수");

		HttpHeaders header = new HttpHeaders();
		header.add("Content-Type", "application/json;charset=UTF-8");

		return new ResponseEntity<>(dto, header, HttpStatus.OK);
	}
}
