package com.gms.web.cmm;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeCtrl {
	
	static final Logger logger = LoggerFactory.getLogger(HomeCtrl.class);	// 자바에서는 리플렉션 자바스크립트에서는 리커전
	
	@RequestMapping(value = "/", method = RequestMethod.GET)						// mapping은 key와 value를 준 것. 만약 redilect를 하면 move를 타지않고 home을 타게 된다
	public String home(Model model, HttpServletRequest request) {			// 여기서의 Model은 POM.xml에서 전역으로 정의된 것 Model안에는 request가 들어있음..
		
		model.addAttribute("ctx", Util1.ctx.apply(request));
		
		return "main";
	}
	@RequestMapping("/move/{prefix}/{dir}/{page}")
	public String move(
			@PathVariable String prefix,
			@PathVariable String dir,
			@PathVariable String page) {
		logger.info("HomeController ::: move() {}.", "ENTER");
		String path = prefix+":"+dir+"/"+page+".tiles";
		return path;
	}
	
}