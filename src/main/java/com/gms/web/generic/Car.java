package com.gms.web.generic;

import java.util.Comparator;

import lombok.Data;

@Data
public class Car {
	String name;
	int price;
	Car(String name, int price){
		this.name = name;
		this.price = price;
	}
	
}
class BMW extends Car{
	BMW(String name, int price){
		super(name, price);
	}
}
class Avante extends Car{
	Avante(String name, int price){
		super(name, price);
	}
}
class Sonata extends Car{
	Sonata(String name, int price){
		super(name, price);
	}
}
class Genesis extends Car{
	Genesis(String name, int price){
		super(name, price);
	}
}
/*class BMWOrder implements Comparator<BMW>{	// 순위 정렬해 주는 것
	public int compare(BMW b1, BMW b2) {
		return b2.price - b1.price;
	}
}
class AvanteOrder implements Comparator<Avante>{	// 순위 정렬해 주는 것
	public int compare(Avante b1, Avante b2) {
		return b2.price - b1.price;
	}
}
class SonataOrder implements Comparator<Sonata>{	// 순위 정렬해 주는 것
	public int compare(Sonata b1, Sonata b2) {
		return b2.price - b1.price;
	}
}
class GenesisOrder implements Comparator<Genesis>{	// 순위 정렬해 주는 것
	public int compare(Genesis b1, Genesis b2) {
		return b2.price - b1.price;
	}
} 아래 클래스 하나로 전부 사용*/
class CarOrder implements Comparator<Car>{	// 순위 정렬해 주는 것
	public int compare(Car b1, Car b2) {
		return b2.price - b1.price;
	}
}
class CarBox<T extends Car> extends Box<T>{}