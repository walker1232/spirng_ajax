package com.gms.web.brd;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;
@Repository
public interface BoardMapper {
	public void insert(Article p);
	public List<?> selectList(Map<?,?>p);
	public List<?> selectSome(Map<?,?>p);
	public Article selectOne(Article p);
	public int count(Map<?,?>p);
	public void update(Article p);
	public void delete(Article p);
	public boolean login(Article p);
	public int countPaging();
	public Article listCriteria();
	public List<Article> listSearch();
}