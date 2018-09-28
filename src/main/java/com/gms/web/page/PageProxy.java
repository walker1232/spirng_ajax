package com.gms.web.page;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import javafx.scene.control.Pagination;
import lombok.Data;
@Data
public class PageProxy implements Proxy{
    private Pagination pagination;
    private HttpServletRequest request;
    
	@Override
	public void carryOut(Map<?,?> p) {
		 this.pagination = new Pagination();
		
	}

}
