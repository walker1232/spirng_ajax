"use strict";
var algo = algo || {};
algo = {
		init : x =>{
			//alert('step 1' + x);
			algo.onCreate(x);
			algo.setContentView();
		},
		onCreate : x=>{
			algo.router.onCreate(x);
		},
		setContentView : ()=>{
			$('#wrapper').empty();
		}
};
algo.main = {
		onCreate : () =>{
			//alert('step 4 ::' + $.ctx());
			algo.main.setContentView();
		},
		setContentView : ()=>{
			//alert('step 5 ::' + $.ctx());
			$('#wrapper').html('<h1>알고리즘</h1><h3>수 열</h3><div id="ctn">'
					+'<table id="tbl" style="width:800px;height:300px;'
					+'border-collapse: collapse;border: 1px solid black;margin:0 auto">'
					+'<tr style="border: 1px solid black;">'
					+'<td id="t__l" style="width: 50%;border: 1px solid black;"></td>'
					+'<td id="t__r" style="width: 50%;border: 1px solid black;"></td>'
					+'</tr>'
					+'</table>'
					+'</div>');
			$('#t__l').html('<a id="arith__seq"><h3>등차수열</h3></a>');
			$('#t__l').append('<a id="swit__seq"><h3>스위치수열</h3></a>');
			$('#t__l').append('<a id="fibo__seq"><h3>피보나치 수열</h3></a>');
			$('#t__l').append('<a id="fact__seq"><h3>팩토리얼 수열</h3></a>');
			$('#arith__seq').click(e=>{
				alert('등차수열 선택');
			});
			$('#swit__seq').click(e=>{
				alert('스위치수열 선택');
			});
			$('#fibo__seq').click(e=>{
				alert('피보나치 수열 선택');
			});
			$('#fact__seq').click(e=>{
				alert('팩토리얼 수열 선택');
			});
			/*$('#content').append('<a id="arith"><h3>등차수열</h3></a>');
			$('#arith').click(e=>{
				alert('등차수열 선택');
			});
			$('#content').append('<a id="fibonacci"><h3>피보나치</h3></a>');
			$('#fibonacci').click(e=>{
				alert('피보나치 선택');
			});
			$('#content').append('<a id="swit"><h3>스위치 수치</h3></a>');
			$('#swit').click(e=>{
				alert('스위치 수치 선택');
			});
			$('#content').append('<a id="factorial"><h3>팩토리얼</h3></a>');
			$('#factorial').click(e=>{
				alert('팩토리얼 선택');
			});*/
			
		}
};
algo.series = {
		arith : x =>{
			
		},
		fibonacci : x =>{},	//피보나치
		swit : x => {},	// 스위치 수치
		factorial : x => {}	// 팩토리얼
};
algo.array = {
		bubble : x =>{},
		insert : x =>{},
		select : x => {},
		ranking : x =>{}
};
algo.matrix = {
		fiveBy5 : x =>{},
		sandGlass : x =>{},
		snail : x =>{},
		diamond : x =>{},
		zigzag : x =>{}
};
algo.math = {
		
};
algo.appl = {};

algo.router = {
	onCreate : x =>{
		//alert('step 2' + x);
		$.getScript(x+'/resources/js/router.js',  // 외부의 JS 파일을 호출하는 것. 자바로치면 import의 의미.
				()=>{
					//alert('step 3' + x);
					$.extend(new Session(x));		//확장. JS 객체기반언어
					algo.main.onCreate();
				}
		);
	}
};