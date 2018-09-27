package com.gms.web.page;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.gms.web.brd.BoardMapper;

import lombok.Data;
@Component
@Data @Lazy
public class Pagination implements Proxy{
	@Autowired BoardMapper brdMap;
	private int pageNumber, pageSize, blockSize, rowCount, pageCount, blockCount,
	beginRow, endRow, prevBlock, nextBlock, beginPage, endPage;
boolean existPrev, existNext;
@Override
public void carryOut(Object o) {
	this.pageNumber = (int)o;
	this.pageSize = 5;
	this.blockSize = 5;
	//this.rowCount = MemberServiceImpl.getinstance().count();
	this.rowCount = brdMap.count();
	this.pageCount = rowCount%pageSize == 0? rowCount/pageSize: rowCount/pageSize+1;
	
	this.blockCount = pageCount%blockSize == 0? pageCount/blockSize: pageCount/blockSize+1;
	this.beginRow = pageNumber*pageSize-(pageSize-1);
	this.endRow = pageNumber*pageSize;
	this.beginPage = pageNumber-((pageNumber-1)%blockSize);
	this.endPage = ((beginPage)+pageSize-1)<pageCount? beginPage+blockSize-1:pageCount;
	this.prevBlock = beginPage - blockSize;
	this.nextBlock = beginPage + blockSize;
	this.existPrev = false;
	if(prevBlock >= 0) {
		existPrev = true;
	}
	this.existNext = false;
	if(nextBlock <= pageCount) {
		existNext = true;
	}
	System.out.println("======================");
	System.out.println(">>>>>"+existNext);
}
}
