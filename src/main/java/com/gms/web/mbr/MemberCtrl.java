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

import com.gms.web.cmm.Util;

@Controller
@RequestMapping("/member")
@SessionAttributes("user")
public class MemberCtrl {	
	static final Logger logger = LoggerFactory.getLogger(MemberCtrl.class);
	@Autowired Member member;
	@Autowired MemberService memberService;
	@Autowired MemberMapper mbrMapper;
	@RequestMapping(value="/add", method=RequestMethod.POST)
	// Autowired 는 자동으로 객체와 연결
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
		//Predicate<String> p = s -> !s.equals("");	//파라미터로 받은 녀석이 null이 아니면 true 리턴
		String view = "public:member/login.tiles";
		if(Util.notEm.test(mbrMapper.exist(param.getUserid()))) {
			Function<Member, String> f = (t)->{	// Member input type, String return type. Function<input type, return type>
				return mbrMapper.login(t);
			};
			view = (f.apply(param) != null) ? "auth:common/content.tiles" : "public:member/login.tiles";
		}
		
		//강사님 방식
		member = Predicate.isEqual("auth:common/content.tiles").test(view) ? 
			mbrMapper.selectOne(param): new Member();
		Util.Log.accept(member.toString());
		
		return view;
		// 위의 코드 전 방식
		//Predicate<String> p2 = s -> s.equals("auth:common/content.tiles");
				/*if(Predicate.isEqual("auth:common/content.tiles").test(view)) {
					member = mbrMapper.selectOne(param);
				}
				Util.Log.accept(member.toString());*/
		//System.out.println(member);
		
		//처음에 해본 방식 
		/*
		member memInfo;
		Function<Member, Member> f2 = (t) ->{
		return mbrMapper.selectOne(t);
	};*/
	/*if(p.test(mbrMapper.exist(param.getUserid()))) {
		Function<Member, Member> f = (t) -> {
			return mbrMapper.selectOne(t);
		};
		memInfo = f.apply(param);
		System.out.println(memInfo);
		
	}*/
		/*memInfo = f2.apply(param);
		System.out.println(memInfo);*/
		// syso -> member 정보
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