package com.gms.web.sbj;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.gms.web.mbr.Member;

@Repository
public interface SubjectMapper {
	public void post(Member p);
	public List<?> list(Map<?,?>p);
	public Member get(Member p);
	public int count(Member p);
	public void update(Member p);
	public void delete(Member p);
}
