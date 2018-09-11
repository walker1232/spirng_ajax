package com.gms.web.lambda;

import java.util.function.Predicate;

/*
 Consumer<T>	void accept(T t)	C, U, D
 Function<T,R>	R apply(T t)		R
 Predicate<T>	boolean test(T t)	Login
 Supplier<T>	T get()				Count
 UnaryOperator<T>	static <T> UnaryOperator<T> identity() 
 이미 만들어져 있다. https://docs.oracle.com/javase/8/docs/api/java/util/function/package-summary.html 참조
 * */
public class OracleLambda {
	public static void main(String[] args) {
		Predicate<String> p = s -> s.length() == 0;
		String x = "";
		String y = "hello";
		String r = (p.test(x)) ? "NULL" : "NOT NULL";
		System.out.println(r);
		
		/*
		 Predicate<String> p = s -> s.length() == 0;
		 여기서 <>안은 매개변수로 받을 타입
		 * */
		
	}
}
