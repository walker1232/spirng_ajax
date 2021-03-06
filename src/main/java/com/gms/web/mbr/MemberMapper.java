package com.gms.web.mbr;

import java.util.List;
import java.util.Map;

public interface MemberMapper {
	public void insert(Member p);
	public List<?> selectList(Map<?,?>p);
	public List<?> selectSome(Map<?,?>p);
	public Member selectOne(Member p);
	public int count(Map<?,?>p);
	public void update(Member p);
	public void delete(Member p);
	public String login(Member t);
	public String exist(String p);
}