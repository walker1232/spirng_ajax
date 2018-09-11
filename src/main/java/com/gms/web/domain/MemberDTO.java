package com.gms.web.domain;

import org.springframework.stereotype.Component;


import lombok.Data;


@Component
@Data
public class MemberDTO {
	public String userid, teamid, name, ssn, age, roll, password, subject, gender, email, phone;
}
 