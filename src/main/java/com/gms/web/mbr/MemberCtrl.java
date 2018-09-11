package com.gms.web.mbr;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import java.util.function.Predicate;

import javax.servlet.http.HttpSession;

import org.apache.catalina.mapper.Mapper;
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

@Controller
@RequestMapping("/member")
@SessionAttributes("user")
public class MemberCtrl {	
	static final Logger logger = LoggerFactory.getLogger(MemberCtrl.class);
	@Autowired Member member;
	@Autowired MemberService memberService;
	@Autowired MemberMapper mbrMapper;
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public String add(@ModelAttribute Member member) {
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
						   , @ModelAttribute("member") Member member
						   , @ModelAttribute("user") Member user) {
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
	public String modify(@ModelAttribute("user") Member member) {
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
	public String remove(@ModelAttribute("member") Member member
						, @ModelAttribute("user") Member user
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
	public String login(@ModelAttribute("member") Member param, Model model,
			HttpSession session) {
		logger.info("MemberController login ::: {}.", "ENTER");
		//System.out.println("MemberController login member 진입 정보 " + member);
		/*Predicate<String> p = s -> !s.equals("");
		System.out.println(">>>>>>>>>>>>>"+param.getUserid());
		String r = mbrMapper.exist(param.getUserid());
		System.out.println("++++++++++++"+r);
		boolean b = p.test(r);
		System.out.println("::::::::::::::::::::"+b);
		Function<Member, String> f = (t) ->{
			return mbrMapper.login(t);
		};*/
		/*System.out.println("param id >>"+param.getUserid());
		System.out.println("param pw >>"+param.getPassword());
		String s2 = f.apply(param);
		System.out.println("88888 ::"+s2);*/
		
		/*String flag = "public:member/login.tiles";
		
		if(mbrMapper.login(param) != null) {
			flag = "auth:common/content.tiles";
			//model.addAttribute("user", memberService.retrieve(member));
		}else {
			flag = "public:member/login.tiles";
		}
		System.out.println("여기는 플래그 정보       "+flag);
		return flag;*/
		
		Predicate<String> p = s -> !s.equals("");
		String view = "public:member/login.tiles";
		if(p.test(mbrMapper.exist(param.getUserid()))) {
			Function<Member, String> f = (t)->{
				return mbrMapper.login(t);
			};
			view = (f.apply(param) != null) ? "auth:common/content.tiles" : "public:member/login.tiles";
		}
		return view;
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