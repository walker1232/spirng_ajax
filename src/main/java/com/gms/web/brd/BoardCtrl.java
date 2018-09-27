package com.gms.web.brd;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.cmm.Util1;
import com.gms.web.cmm.Util2;
import com.gms.web.page.Pagination;

@RestController
public class BoardCtrl {
	static final Logger logger = LoggerFactory.getLogger(BoardCtrl.class);
	@Autowired Board brd;
	@Autowired BoardMapper brdMap;
	@Autowired Util2 tae;
	@Autowired Pagination page;
	@RequestMapping("/boards/{pageNo}")
	public @ResponseBody List<Board>
		list(@PathVariable int pageNo){
		logger.info("BoardCtrl  ::: {}.", pageNo);
		/*page.setBeginRow(pageNo);
		page.setEndRow(5);*/
		//page.setPageNumber(pageNo);
		page.carryOut(pageNo);
		System.out.println("brdMap 쿼리 실행 "+brdMap.listAll(page).size());
		List<Board> ls = brdMap.listAll(page);
		Util1.Log.accept("게시글 리스트:"+ls);
		
		return ls;
	}
}
