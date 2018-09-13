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
				let ques = 
					'<h3>시작값 x, 마지막값 y, 공차 d 인 등차수열의 합을 구하시오.</h3>'
					+'	<label for="시작값">시작값</label><input id="sta" type="text" value="">'
					+'	<label for="마지막값">마지막값</label><input id="end" type="text" value="">'
					+'	<label for="공차">공차</label><input id="d" type="text" value="">'
					+'	<button id="bt">결과보기</button>'
					+'	<h6 id="rs"></h6>'
				$('#t__r').append(ques);
				
				$('#bt').click(()=>{
					//console.log(rs);
					$('#rs').empty().text(($.fn.zeroChecker(
						[
						$('#sta').val()*1,
						$('#end').val()*1,
						$('#d').val()*1
					])) ? '빈칸을 채우세요' : '완성하세요');
					
					let sta = $('#sta').val()*1;
					let end = $('#end').val()*1;
					let d = $('#d').val()*1;
					console.log(sta+', '+end+', '+d);
					let sum = 0;
					let i = sta;
					while(i <= end){
						sum += sta;
						sta+=d;
						i++;
					}
					$('#t__r').append(sum);
				});
			});
			$('#swit__seq').click(e=>{
				let ques = 
					'<h3>시작값 x, 마지막값 y, 공차 d 인 등차수열의 합을 구하시오.</h3>'
					+'	<label for="시작값">시작값</label><input id="sta" type="text" value="">'
					+'	<label for="마지막값">마지막값</label><input id="end" type="text" value="">'
					+'	<label for="공차">공차</label><input id="d" type="text" value="">'
					+'	<button id="bt">결과보기</button>'
				$('#t__r').append(ques);
				$('#bt').click(()=>{
					
					
					let sta = $('#sta').val()*1;
					let end = $('#end').val()*1;
					let d = $('#d').val()*1;
					let i = sta;
					let sum = 0;
					while(i <= end){
						if(i % 2 == 1){
							sum += sta*d;
							sta++;
							i++;
						}else{
							sum += sta*(-d);
							sta++;
							i++;
						}
					}
					$('#t__r').append(sum);
				});
			});
			$('#fibo__seq').click(e=>{
				let ques = 
					'<h3>시작값 x, 마지막값 y, 피보나치수열의 합을 구하시오.</h3>'
					+'	<label for="시작값">시작값</label><input id="sta" type="text" value="">'
					+'	<label for="마지막값">두번째값</label><input id="end" type="text" value="">'
					//+'	<label for="공차">공차</label><input id="d" type="text" value="">'
					+'	<button id="bt">결과보기</button>'
				$('#t__r').append(ques);
				$('#bt').click(()=>{
					let sta = $('#sta').val()*1;
					let end = $('#end').val()*1;
					let num1 = sta;
					let num2 = end;
					let sum = num1 + num2;
					let n = 2;
					let c = 0;
					while(n <= 5){
						c = num1 + num2;
						sum = sum + c;
						num1 = num2;
						num2 = c;
						n = n + 1;
					}
					$('#t__r').append(sum-c);
				});
			});
			$('#fact__seq').click(e=>{
				alert('팩토리얼 수열 선택');
			});
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
					$.getScript($.ctx()+'/resources/js/util.js')
					.done(x=>{console.log('실행');})
					.fail(x=>{console.log('실패');})
					algo.main.onCreate();
				}
		);
	}
};
algo.util = {
		onCreate : x =>{
			$.getScript(x+'/resources/js/util.js',
					()=>{
						// 직접 코딩
						algo.main.onCreate();
					}
			);
		}
};