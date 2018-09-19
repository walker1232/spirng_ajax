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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;

import com.gms.web.cmm.Util2;
import com.gms.web.cmm.Util1;

@RestController
@RequestMapping("/member")
public class MemberCtrl {	
	static final Logger logger = LoggerFactory.getLogger(MemberCtrl.class);
	@Autowired Member mbr;
	@Autowired MemberMapper mbrMap;
	@Autowired Util2 tae;
	// Autowired 는 자동으로 객체와 연결
	@PostMapping("/add")
	public void add(@RequestBody Member pm) {
		logger.info("MemberController add ::: {}.", "add");
		Util1.Log.accept("넘어온 조인 정보"+ pm);
		pm.setAge(tae.ageAndGender.apply(pm).getAge());
		pm.setGender(tae.ageAndGender.apply(pm).getGender());
		//Map<String,Object> rmap = new HashMap<>();
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
		System.out.println("MemberController retrieve member 징입후 정보 " + member);
		return "auth:member/retrieve.tiles";
		
	}
	@RequestMapping("/count")
	public void count() {}
	@RequestMapping(value="/modify", method=RequestMethod.POST)
	public String modify(@ModelAttribute("user") Member member) {
		logger.info("MemberController modify ::: {}.", "ENTER");
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
		System.out.println("MemberController remove 진입후 정보 " + member);
		return "redirect:/";
	}
	@PostMapping("/login")
	public @ResponseBody Map<String,Object> login(@RequestBody Member pm) {
		logger.info("MemberController login ::: {}.", "ENTER");
		Map<String,Object> rm = new HashMap<>();
		Util1.Log.accept("넘어온 로그인정보: "+pm.toString());
		//Predicate<String> p = s -> !s.equals("");	//파라미터로 받은 녀석이 null이 아니면 true 리턴
		String pwValid = "WRONG";
		String idValid = "WRONG";
		if(mbrMap.count(pm)!=0) {
			idValid = "CORRECT";
			Util1.Log.accept("ID 유효성체크결과 : "+idValid);
			Function<Member,Member> f = (t)->{
				return mbrMap.get(t);
			};
			mbr = f.apply(pm);
			pwValid = (mbr != null) ? "CORRECT" : "WRONG";
			mbr = (mbr != null) ? mbr : new Member();
			Util1.Log.accept("PW 유효성체크결과 : "+pwValid);
		}
		Util1.Log.accept("ID 유효성체크결과 2 : "+idValid);
		Util1.Log.accept("PW 유효성체크결과 2: "+pwValid);
		Util1.Log.accept("MBR 유효성체크결과 2 : "+mbr.toString());
		rm.put("ID", idValid);
		rm.put("PW", pwValid);
		rm.put("MBR", mbr);
		return rm;
		/*if(YoonHo.notEm.test(mbrMapper.exist(param.getUserid()))) {
			Function<Member, String> f = (t)->{	// Member input type, String return type. Function<input type, return type>
				return mbrMapper.login(t);
			};
			pwValid = (f.apply(param) != null) ? "CORRECT" : "WRONG";
		}else {
			idValid = "WRONG";
		}
		
		mbr = Predicate.isEqual("auth:common/content.tiles").test(pwValid) ? 
			mbrMapper.selectOne(param): new Member();*/
		/*YoonHo.Log.accept(mbr.toString());
		rmap.put("ID", idValid);
		rmap.put("PW", pwValid);
		rmap.put("MBR", mbr);
		return rmap;*/
		
	}
	
	@RequestMapping("/fileupload")
	public void fileupload() {}
}