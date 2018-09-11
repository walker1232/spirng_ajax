package com.gms.web.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;

import com.gms.web.domain.MemberDTO;
import com.gms.web.service.MemberService;

@Controller
@RequestMapping("/member")
@SessionAttributes("user")
public class MemberController {	
	static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@Autowired MemberDTO member;
	@Autowired MemberService memberService;
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public String add(@ModelAttribute MemberDTO member) {
		logger.info("MemberController add ::: {}.", "add");
		System.out.println("MemberController ADD 정보 " + member);
		memberService.add(member);
		return "public:member/login.tiles";
	}
	@RequestMapping("/list")
	public void list() {}
	@RequestMapping("/search")
	public void search() {}
	@RequestMapping("/retrieve")
	public String retrieve(Model model
						   , @ModelAttribute("member") MemberDTO member
						   , @ModelAttribute("user") MemberDTO user) {
		logger.info("\n--------- MemberController {} !!-----","retrieve()");
		System.out.println("MemberController retrieve member 징입 정보 " + member);
		System.out.println("MemberController retrieve user 정보 " + user.getUserid());
		member.setUserid(user.getUserid());
		model.addAttribute("user", memberService.retrieve(member));
		System.out.println("MemberController retrieve member 징입후 정보 " + member);
		return "auth:member/retrieve.tiles";
		
	}
	@RequestMapping("/count")
	public void count() {}
	@RequestMapping(value="/modify", method=RequestMethod.POST)
	public String modify(@ModelAttribute("user") MemberDTO member) {
		logger.info("MemberController modify ::: {}.", "ENTER");
		memberService.modify(member);
		memberService.retrieve(member);
		System.out.println("MemberController modify 진입후 정보 " + member);
		return "auth:common/content.tiles";
	}
	/*@RequestMapping(value="/modify", method=RequestMethod.POST)
	public String modify(@ModelAttribute("member") MemberDTO member
						, @ModelAttribute("user") MemberDTO user
						,Model model) {
		logger.info("MemberController modify ::: {}.", "ENTER");
		System.out.println("MemberController modify member 진입 정보 " + member);
		System.out.println("MemberController modify user 정보 " + user.getUserid());
		member.setUserid(user.getUserid());
		memberService.modify(member);
		model.addAttribute("user", memberService.retrieve(member));
		System.out.println("MemberController modify 진입후 정보 " + member);
		return "auth:common/content.tiles";
	}*/
	@RequestMapping(value="/remove", method=RequestMethod.POST)
	public String remove(@ModelAttribute("member") MemberDTO member
						, @ModelAttribute("user") MemberDTO user
						,Model model) {
		logger.info("MemberController remove ::: {}.", "ENTER");
		System.out.println("MemberController remove member 진입 정보 " + member);
		System.out.println("MemberController remove user 정보 " + user.getUserid());
		member.setUserid(user.getUserid());
		memberService.remove(member);
		System.out.println("MemberController remove 진입후 정보 " + member);
		return "redirect:/";
	}
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public String login(@ModelAttribute("member") MemberDTO member, Model model,
			HttpSession session) {
		logger.info("MemberController login ::: {}.", "ENTER");
		System.out.println("MemberController login member 진입 정보 " + member);
		//member = memberService.login(member);
		String f = "public:member/login.tiles";
		if(memberService.login(member) != null) {
			f = "auth:common/content.tiles";
			model.addAttribute("user", memberService.retrieve(member));
		}else {
			f = "public:member/login.tiles";
		}
		return f;
	}
	@RequestMapping("/logout")
	public String logout(SessionStatus session) {
		logger.info("MemberController logout ::: {}.", "ENTER");
		session.setComplete();
		return "redirect:/";
	}
	@RequestMapping("/fileupload")
	public void fileupload() {}
}