package com.gms.web.brd;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
	@Autowired HashMap<String,Object> map;
	@RequestMapping("/boards/{pageNo}")
	public @ResponseBody Map<String, Object>
		list(@PathVariable String pageNo){
		logger.info("BoardCtrl  ::: {}.", pageNo);
		map.clear();
		Util1.Log.accept("넘어온 페이지 :"+pageNo);
		map.put("pageNumber", pageNo);
		Util1.Log.accept("전체 게시글 수 :"+brdMap.countAll());
		map.put("rowCount", brdMap.countAll());
		page.carryOut(map);
		Util1.Log.accept("rowCount :"+page.getRowCount());
		Util1.Log.accept("existPrev :"+page.isExistNext());
		Util1.Log.accept("prevBlock :"+page.getPrevBlock());
		Util1.Log.accept("beginPage :"+page.getBeginPage());
		Util1.Log.accept("existNext :"+page.isExistNext());
		Util1.Log.accept("nextBlock :"+page.getNextBlock());
		List<Board> list = brdMap.listAll(page);
		Util1.Log.accept("게시글 리스트:"+list);
		map.clear();
		map.put("list", list);
		map.put("page", page);
		return map;
	}
	@RequestMapping("/boards/{id}/{pageNo}")
	public @ResponseBody Map<String, Object>
		myList(@PathVariable String pageNo, @PathVariable String id){
		logger.info("BoardCtrl  ::: {}.", pageNo);
		map.clear();
		
		map.put("pageNumber", pageNo);
		
		map.put("id", id);
		map.put("rowCount", brdMap.userCount(map));	
		page.carryOut(map);
		
		map.put("beginRow", page.getBeginRow());
		map.put("endRow", page.getEndRow());	
		Util1.Log.accept("beginRow:::::" + map.get("beginRow"));
		Util1.Log.accept("endRow:::::" + map.get("endRow"));
		Util1.Log.accept("id:::::" + map.get("id"));
		
		List<Board> list = brdMap.userBrdList(map);
		
		map.clear();
		map.put("list", list);
		map.put("page", page);
		Util1.Log.accept("리스트:::::" + map.get("list"));
		Util1.Log.accept("리스트:::::" + map.get("page"));
		return map;
	}
}


/*
 * Util1.Log.accept("로그인 후 넘어온 페이지 :"+pageNo);
		Util1.Log.accept("넘어온 페이지 :"+pageNo);
		Util1.Log.accept("rowCount :"+page.getRowCount());
		Util1.Log.accept("existPrev :"+page.isExistNext());
		Util1.Log.accept("prevBlock :"+page.getPrevBlock());
		Util1.Log.accept("beginPage :"+page.getBeginPage());
		Util1.Log.accept("existNext :"+page.isExistNext());
		Util1.Log.accept("nextBlock :"+page.getNextBlock());
		Util1.Log.accept("게시글 리스트:"+list);
 * */
 