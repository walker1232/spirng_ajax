package com.gms.web.cmm;

import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;

import javax.servlet.http.HttpServletRequest;


public class Util {	//ex) algo
	public static Consumer<Integer> Logi = System.out :: println;	//클래스 변수 아래 모두 동일
	public static Consumer<String> Log = System.out :: println;
	public static Function<String, Integer> convInt = Integer::parseInt;
	public static Predicate<String> em = s -> s.equals("");
	public static Predicate<String> notEm = em.negate();
	public static Function<HttpServletRequest, String> ctx = HttpServletRequest::getContextPath;
}
