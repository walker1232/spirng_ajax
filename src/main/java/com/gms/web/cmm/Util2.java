package com.gms.web.cmm;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.function.Function;

import org.springframework.stereotype.Component;

import com.gms.web.mbr.Member;
@Component
public class Util2 {
	public Function<Member, Member> ageAndGender = (Member mbr) ->{
		int current = Integer.valueOf(new SimpleDateFormat("yyyy").format(new Date()))+1-1900;
	       String ssn = mbr.getSsn();
	       String gender = "";
	       gender=(ssn.substring(7,8).equals("1"))? "man":"woman";
	       mbr.setAge(String.valueOf(current - Integer.parseInt(ssn.substring(0,2))));
	       mbr.setGender(gender);
	       return mbr;
	};
}
