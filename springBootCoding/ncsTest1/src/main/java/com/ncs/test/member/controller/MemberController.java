package com.ncs.test.member.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.ncs.test.member.model.service.MemberService;
import com.ncs.test.member.model.vo.Member;

import lombok.Setter;

@SessionAttributes("loginMember")
@Controller
public class MemberController {
	@Setter(onMethod_ = @Autowired)
	private MemberService memberService;

	@GetMapping("/")
	public String memberLogin() {
		return "index";
	}

	@PostMapping("/login")
	public String loginMember(Member login, Model model, RedirectAttributes ras) {
		Member loginMember = memberService.loginProcess(login);

		if (loginMember != null) {
			model.addAttribute("loginMember", loginMember);
		} else {
			ras.addFlashAttribute("errorMsg", "로그인 실패");
		}
		return "redirect:/";
	}

	/*
	 * @GetMapping("/logout") public String logoutProcess(SessionStatus
	 * sessionStatus) { sessionStatus.setComplete(); return "redirect:/"; }
	 */
}
