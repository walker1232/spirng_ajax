package com.gms.web.generic;

import java.util.ArrayList;
import java.util.List;

public class Box<T>{	// 내부에 있는 item 타입을 외부에서 주겠다는 것을 의미
	ArrayList<T> list = new ArrayList<T>();
	
	public void add(T item) {list.add(item);}
	public T get(int i) {return list.get(i);}
	public ArrayList<T> getList() {return list;}
	int size() {return list.size();}
	public String toString() {return list.toString();}

}
