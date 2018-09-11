package com.gms.web.service;

import java.util.List;
import java.util.Map;

import com.gms.web.domain.MemberDTO;

public interface MemberService {
	public void add(MemberDTO p);
	public List<?> list(Map<?,?>p);
	public List<?> search(Map<?,?>p);
	public MemberDTO retrieve(MemberDTO p);
	public int count(Map<?,?> p);
	public void modify(MemberDTO p);
	public void remove(MemberDTO p);
	public MemberDTO login(MemberDTO p);
}