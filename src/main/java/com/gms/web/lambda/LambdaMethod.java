package com.gms.web.lambda;

import java.util.function.Consumer;
import java.util.function.Function;

/*
Consumer<T>	void accept(T t)	C, U, D
Function<T,R>	R apply(T t)		R			파라미터가 있는 Read
Predicate<T>	boolean test(T t)	Login
Supplier<T>	T get()				Count		파라미터가 없는 Read
UnaryOperator<T>	static <T> UnaryOperator<T> identity() 
이미 만들어져 있다. https://docs.oracle.com/javase/8/docs/api/java/util/function/package-summary.html 참조
* */
public class LambdaMethod {
	public static void main(String[] args) {
		Function<String, Integer> f = Integer::parseInt;	// 어차피 들어온 값이 하나고 리턴값이 하나라면 가능
		int a = f.apply("5");
		System.out.println(a);
		Consumer<String> c = System.out::println;	// 메소드 앞에서 끊어줘야 한다. out이 인스턴스
		c.accept("Hello Lambda !!");
	}
}
