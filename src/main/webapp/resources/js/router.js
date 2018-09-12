"use strict"
function Session(x){	//new로 만들것은 첫 글자를 대문자로
	sessionStorage.setItem('ctx', x);
	sessionStorage.setItem('script', x+'/resources/js');
	sessionStorage.setItem('style', x+'/resources/css');
	sessionStorage.setItem('img', x+'/resources/img');
	return {
		ctx : ()=>{return sessionStorage.getItem('ctx');},
		script : ()=>{return sessionStorage.getItem('script');},
		style : ()=>{return sessionStorage.getItem('style');},
		img : ()=>{return sessionStorage.getItem('img');}
	};
}

