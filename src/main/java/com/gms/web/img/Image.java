package com.gms.web.img;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class Image {
	private String imgSeq, imgName, extension, userid;
}