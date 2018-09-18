package com.gms.web.algo;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.cmm.Util;

@RestController
@RequestMapping("/algo")
public class AlgoCtrl {
	static final Logger logger = LoggerFactory.getLogger(AlgoCtrl.class);
	@GetMapping("/money/{money}")
	public void money(@PathVariable String money) {
		Util.Log.accept("넘어온 화폐값: "+ money);
	}
	@PostMapping("/money/")
	public @ResponseBody Map<String, Object> 
		money2(@RequestBody Map<String, Object>map) {
		Map<String, Object>rmap = new HashMap<>();
		Util.Log.accept("넘어온 화폐값: "+map.get("money"));
		rmap.put("test", "축하축하 !!");
		return rmap;	// 데이터 값을 리턴하고 있음
	}
}
