package com.gms.web.brd;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
@Component
@Lazy	// context가 필요할 때에만 만들게 하는 것, Ajax는 모두 이 방식
@Data
public class Article {
	private Integer bno, title, content, writer, regdate, viewcnt;
}