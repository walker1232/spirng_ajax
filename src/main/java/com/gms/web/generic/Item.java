package com.gms.web.generic;

import java.util.ArrayList;
import java.util.List;
@SuppressWarnings("unchecked")
public class Item<T> {
	T one;	// 무슨 타입이든 올 거야
	List<T> some = new ArrayList<>();
	public T getOne() {return one;}
	public void setOne(T t) {this.one = t;}
	public T getSome() {return (T) some;}
	public void setSome(T t) {this.some = (List<T>) t;}
}
