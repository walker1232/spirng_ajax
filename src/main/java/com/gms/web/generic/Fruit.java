package com.gms.web.generic;

public class Fruit {public String toString() {return "Fruit";}}	// ex) user
class Apple extends Fruit{public String toString() {return "Apple";}}	//member
class Grape extends Fruit{public String toString() {return "Grape";}}
class Juice{
	String name;
	Juice(String name){this.name = name + "Juice";}
	public String toString() {return name;}
}
class Mixer{
	static Juice makeJuice(FruitBox<? extends Fruit> box) {	// 과일의 자식들만 들어올 수 있게 한다. Apple, Grape만 들어올 수 있다
		String t = "";
		for(Fruit f : box.getList())
			t += f + " ";
		return new Juice(t);
	}
}
class FruitBox<T extends Fruit> extends Box<T>{}
