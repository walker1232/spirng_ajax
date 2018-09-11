package com.gms.web.mbr;

import org.springframework.stereotype.Component;


import lombok.Data;


@Component
@Data
public class Member {
	public String userid, teamid, name, ssn, age, roll, password, subject, gender, email, phone;
}
 