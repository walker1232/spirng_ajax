package com.gms.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.gms.web.domain.ArticleDTO;
import com.gms.web.domain.MemberDTO;
import com.gms.web.service.MemberService;

@Controller
@RequestMapping("/board")
public class BoardController {
	static final Logger logger = LoggerFactory.getLogger(BoardController.class);
	@Autowired ArticleDTO article;
	@Autowired MemberService memberService;
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public String add(@ModelAttribute MemberDTO member) {
		logger.info("MemberController add ::: {}.", "add");
		System.out.println("ADD 1 " + member);
		memberService.add(member);
		/*Map<String, Object> p = new HashMap<>();
		p.put("add", member);
		System.out.println("name is "+ member.getName());*/
		return "login_page";
	}
	@RequestMapping("/list")
	public void list() {}
	@RequestMapping("/search")
	public void search() {}
	@RequestMapping("/retrieve/{userid}/{action}")
	public String retrieve(@PathVariable String userid, @PathVariable String action ,Model model) {
		logger.info("\n--------- MemberController {} !!-----","retrieve()");
		System.out.println(userid);
		/*MemberDTO m = memberService.retrieve(userid);
		model.addAttribute("user", m);
		return "retrieve_page";*/
		//member.setuserid(userid);
		String res = "";
		switch(action) {
		case "modify":
			logger.info("MemberController modify ::: {}.", "modify");
			res = "modify_page";
			break;
		case "remove":
			logger.info("MemberController remove ::: {}.", "remove");
			res = "remove_page";
			break;
		default:
			logger.info("MemberController retrieve ::: {}.", "retrieve");
			res = "retrieve_page";
			break;
		}
		/*if(action.equals("modify")) {
			res = "modify_page";
		}else if(action.equals("remove")) {
			res = "remove_page";
		}else {
			res = "retrieve_page";
		}*/
		//model.addAttribute("user", memberService.retrieve(member));
		return res;
	}
	@RequestMapping("/count")
	public void count() {}
	@RequestMapping(value="/modify", method=RequestMethod.POST)
	public String modify(@ModelAttribute("member") MemberDTO member, Model model) {
		logger.info("MemberController modify!!! ::: {}.", "ENTER");
		System.out.println("modify 1 " + member.getUserid());
		//member.setuserid(userid);
		memberService.modify(member);
		model.addAttribute("user", memberService.retrieve(member));
		//MemberDTO m = memberService.retrieve(userid);
		//model.addAttribute("user", m);
		return "retrieve_page";
	}
	@RequestMapping(value="/romove", method=RequestMethod.POST)
	public String remove(@ModelAttribute("member") MemberDTO member, Model model) {
		logger.info("MemberController remove ::: {}.", "ENTER");
		System.out.println("remove 1 " + member.getUserid());
		System.out.println("member session : "+ member.getUserid());
		memberService.remove(member);
		return "redirect:/";
	}
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public String login(@ModelAttribute("member") MemberDTO member, Model model) {
		logger.info("MemberController login ::: {}.", "ENTER");
		/*System.out.println(member.getUserid());
		System.out.println(member.getPassword());*/
		System.out.println(member.getUserid());
		System.out.println(member.getPassword());
		//member = memberService.login(member);
		//boolean m = memberService.login(member);
		String f = "";
		
		/*if(m == true) {
		f = "login_success";
		MemberDTO mem = memberService.retrieve(member.getUserid());
		model.addAttribute("user", mem);
		}else {
		f = "login_page";
		}*/
		
		/*if(m == true) {
			System.out.println("로그인 성공");
			f = "login_success";
			model.addAttribute("user", memberService.retrieve(member));
		}else {
			System.out.println("로그인 실패");
			f = "login_page";
		}*/
		return f;
	}
	@RequestMapping("/logout")
	public String logout() {
		logger.info("MemberController logout ::: {}.", "ENTER");
		return "redirect:/";
	}
	@RequestMapping("/fileupload")
	public void fileupload() {}
	@RequestMapping("/register")
	public String register(){
		return "auth:board/register.tiles";
	}
}