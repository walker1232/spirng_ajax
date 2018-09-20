package com.gms.web.exm;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.gms.web.sbj.Subject;

import lombok.Data;

@Component
@Data @Lazy
public class Exam {	//교차 엔티티 부모테이블의 기본키를 가지고 있어야 한다.
	String  sbjSeq, exmSea, term, score, userid;
}
