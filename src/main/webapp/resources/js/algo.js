"use strict"; 
var algo = algo || {};
algo = {
    init :x=>{
    	algo.onCreate(x);
    	algo.setContentView();
    },
    onCreate:x=>{
    	algo.router.onCreate(x);
    },
    setContentView:()=>{
        $('#wrapper').empty();
    }
};
algo.main =(()=>{
	var $wrapper, ctx, img, script, style, compo, json,$t__l,$t__r; //$준 이유는 dom객체인지 가독성때문에 줬다.
	var onCreate = ()=>{
    	ctx = $.ctx();
    	img = $.img();
    	script = $.script();
    	style = $.style();
    	compo = script + '/compo.js';
    	/*util = script + 'util.js';*/ //프토토타입 안에 있기 때문에 이렇게 하면 에러난다. 더 상위 객체(오브젝트)에 박아뒀기 때문에 제이쿼리에서 찾으면 안됨
		setContentView();
	};
	var setContentView = ()=>{
        $('#wrapper').html(
        	 '<h1>알고리즘</h1>'
        	+'<h3><span id="seq">수 열</span></h3>'
        	+'<h3><span id="appl">응 용</span></h3>'
        	+'<div id="ctn">'
    		+'<table id="tbl" style="width:800px;height:300px;'
    		+'border-collapse: collapse;border: 1px solid black;margin:0 auto">'
    		+ '<tr style="border: 1px solid black;">'
    		+  '<td id="t__l" style="width: 50%;border: 1px solid black;"></td>'
    		+  '<td id="t__r" style="width: 50%;border: 1px solid black;"></td>'
    		+ '</tr>'
    		+'</table>'
    		+'</div>');
       $t__l = $('#t__l');
       $t__r = $('#t__r');
        
        
    	$('#seq').click(x=>{
    		$t__l.empty();
    		$.getScript(compo,()=>{
    			ui.anchor({txt:'등차수열의 합'}).appendTo($t__l);
    			ui.anchor({txt:'피보나치수열'}).appendTo($t__l);
    			ui.anchor({txt:'스위치수열 '}).appendTo($t__l);
    			ui.anchor({txt:'팩토리수열'}).appendTo($t__l);
    		});
    	});
        
        
        
       $("<ul />")
        .attr({id : 'side__menu'})
        .addClass('list-group').appendTo($t__l);
       $('<li/>')
       .attr({id : 'arith'})
       .addClass('list-group-item')
       .appendTo($('#side__menu'));
       $('<li/>')
       .attr({id : 'fibonacci'})
       .addClass('list-group-item')
       .appendTo($('#side__menu'));
       factorial : x => {}
       $('<li/>')
       .attr({id : 'switch'})
       .addClass('list-group-item')
       .appendTo($('#side__menu'));
       $('<li/>')
       .attr({id : 'factorial'})
       .addClass('list-group-item')
       .appendTo($('#side__menu'));
        $('<a/>')
        .attr({href : '#'})
        .html('등차수열의 합')
        .appendTo($('#arith'))
        .click(e=>{
    	$t__r.empty();
    	$('<div/>').attr({id:'ques'}).appendTo($t__r);
       	$('<h4/>').html('시작값 x, 마지막값 y, 공차 d 인 등차수열의 합을 구하시오.').appendTo($('#ques'));
       	let json = [{text:'시작값 : ',input:'sta'},
   				{text:'마지막값 :',input:'end'},
   				{text:'공차  :',input:'diff'}]
       	$.each(json, (i,j)=> {
       		$('<label/>').html(j.text).appendTo($('#ques'));
           	$('<input/>').attr({id : j.input, type:'text'}).appendTo($('#ques'));
           	$('<br/>').appendTo($('#ques'));
       	});
       	$('<button/>')
       	.addClass('btn btn-primary')
       	.attr({type:'button'})
       	.html('결과보기')
       	.appendTo($('#ques'))
       	.click(e=>{
       		let a = $('<h6/>').attr({id:'checker'});
       		$('#checker').remove();
       		if(($.fn.zeroChecker(
        	        [$('#sta').val(),
            	        $('#end').val(),
            	        $('#diff').val()]))){
       			a.html('빈칸을 채우세요').appendTo($('#ques'));
       		}else{
            	let sta = $('#sta').val()*1;
            	let end = $('#end').val()*1;
            	let diff = $('#diff').val()*1;
            	let sum = 0;
            	let i =0;
            	while(i<end){
            		sum+=sta;
            		sta=sta+diff;
            		i+=diff;
            		console.log(sum);
            	}
            	a.html('결과값 : '+sum).appendTo($('#ques'));
       		}
       	});
    });
        
        /*===============================================*/
        /*===============================================*/
        /*===============================================*/
        /*===============================================*/
        /*===============================================*/
        
	$('#appl').click(x=>{
		alert('appl 클릭');
		$t__l.empty();
		$.getScript(compo,()=>{
			ui.ul({len : 3, id:'menu'}).appendTo($t__l);
			ui.anchor({txt:'화폐문제'})
			.appendTo($('#menu-0'))
			.click(x=>{
					$('<h6>화폐문제</h6>').appendTo($t__r);
					ui.input({
						id : 'money',
						txt : '입금액'
					})
					.appendTo($t__r);
					ui.btn({clazz : 'primary',txt:'전 송'})
					.appendTo($t__r)
					.click(e=>{ //이벤트는 콜백함수 여기서 이벤트함수는 click
						alert('화폐금액 :: ' + $('#money').val());
						$.ajax({ // 기본적인 ajax 형태	갔다오기 전
							url : ctx+'/algo/money/',
							method : 'POST',	// 대소문자 상관없음
							contentType : 'application/json', //contentType 은 mime 타입// contentType의 파라미터에 따라 달라짐. 전략패턴
							data : JSON.stringify({money : $('#money').val()}),	// 별 다섯개 중요 java는 json을 모르깅 JSON.stringify()를 해줘야 한다
							success : d=>{	// 갔다 온 후 if else의 느낌
								alert('AJAX 성공이다!!'+d.test);
							},
							error : (m1,m2,m3)=>{
								alert('에러발생1'+m1)
								alert('에러발생2'+m2)
								alert('에러발생3'+m3)
							}
						});
					}) 
			});
		});
	});
	
    /*===============================================*/
    /*===============================================*/
    /*===============================================*/
    /*===============================================*/
    /*===============================================*/
        
       $('<a/>')
       .attr({href : '#'})
       .html('피보나치수열')
       .appendTo($('#fibonacci'))
       .click(e=>{
       	$t__r.empty();
       	$('<div/>').attr({id:'ques'}).appendTo($t__r);
       	$('<h4/>').html('피보나치 수열을 구하시오.').appendTo($('#ques'));
       	let json =[{text:'시작값',input:'sta'},
       				{text:'두번째값',input:'sec'},
       				{text:'항수',input:'n'}]
       	$.each(json, function(i, j) {
       		$('<label/>').html(j.text).appendTo($('#ques'));
           	$('<input/>').attr({id : j.input, type:'text'}).appendTo($('#ques'));
           	$('<br/>').appendTo($('#ques'));
       	})
       	$('<button/>')
       	.addClass('btn btn-primary')
       	.attr({type:'button'})
       	.html('결과보기')
       	.appendTo($('#ques'))
       	.click(e=>{
       		let a = $('<h6/>').attr({id:'checker'});
       		$('#checker').remove();
       		if(($.fn.zeroChecker(
        	        [$('#sta').val(),
            	        $('#sec').val(),
            	        $('#n').val()]))){
       			a.html('빈칸을 채우세요').appendTo($('#ques'));
       		}else{
       			let a1 = $('#sta').val()*1;
       			let a2 = $('#sec').val()*1;
       			let n = $('#n').val()*1;
       			let sum = a1+a2;
       			let a3 = 0;
       			let i = 2;
       			while(i<n){
       				a3= a1+a2;
       				sum += a3;
       				console.log('a1 :' + a1 + '|| a2 :' + a2 + '|| a3 :' + a3 + '|| sum :'+sum);
       				a1=a2;
       				a2=a3;
       				i++;
       			}
            	a.html('결과값 : '+sum).appendTo($('#ques'));

   			}
       	});
   	});
       
       $('<a/>')
       .attr({href : '#'})
       .html('스위치수열')
       .appendTo($('#switch'))
       .click(e=>{
       	$t__r.empty();

       	$('<div/>').attr({id:'ques'}).appendTo($t__r);
       	$('<h4/>').html('스위치 수열을 구하시오.').appendTo($('#ques'));
       	
       	let json = [{text:'시작값 : ',input:'sta'},
       			{text:'마지막값 :',input:'end'}
       			]
       	
       	$.each(json, (i,j)=> {
       		$('<label/>').html(j.text).appendTo($('#ques'));
           	$('<input/>').attr({id : j.input, type:'text'}).appendTo($('#ques'));
           	$('<br/>').appendTo($('#ques'));
       	});
       	
       	$('<button/>')
       	.addClass('btn btn-primary')
       	.attr({type:'button'})
       	.html('결과보기')
       	.appendTo($('#ques'))
       	.click(e=>{
       		let a = $('<h6/>').attr({id:'checker'});
       		$('#checker').remove();
       		if(($.fn.zeroChecker(
        	        [$('#sta').val(),
            	        $('#end').val()]))){
       			a.html('빈칸을 채우세요').appendTo($('#ques'));
       		}else{
            	let sta = $('#sta').val()*1;
            	console.log('sta :: '+sta);
            	let end = $('#end').val()*1;
            	console.log('end :: '+end);
            	let sum = 0;
            	while(sta<end){
            		sum+=sta;
            		sta++
               		sum-=sta;
            		sta++
            	}
            	a.html('결과값 : '+sum).appendTo($('#ques'));
       		}
       	});
       });
       
       $('<a/>')
       .attr({href : '#'})
       .html('팩토리수열')
       .appendTo($('#factorial'))
       .click(e=>{
       	$t__r.empty();
       	$('<div/>').attr({id:'ques'}).appendTo($t__r);
       	$('<h4/>').html('팩토리얼 수열(누승)을 구하시오.').appendTo($('#ques'));
       	let json = [{text:'시작값 : ',input:'sta'},
       			{text:'마지막값 :',input:'end'}]
       	$.each(json, (i,j)=> {
       		$('<label/>').html(j.text).appendTo($('#ques'));
           	$('<input/>').attr({id : j.input, type:'text'}).appendTo($('#ques'));
           	$('<br/>').appendTo($('#ques'));
       	});
       	$('<button/>')
       	.addClass('btn btn-primary')
       	.attr({type:'button'})
       	.html('결과보기')
       	.appendTo($('#ques'))
       	.click(e=>{
       		let a = $('<h6/>').attr({id:'checker'});
       		$('#checker').remove();
       		if(($.fn.zeroChecker(
        	        [$('#sta').val(),
        	        $('#end').val()]))){
       			a.html('빈칸을 채우세요').appendTo($('#ques'));
       		}else{
            	let sta = $('#sta').val()*1;
            	let end = $('#end').val()*1;
            	let sum = 1;
            	let i =1;
            	let f =1;
            	while(i<end){
            		i++;
            		f*=i;
            		sum+=f;
            		console.log(sum);
            	}
            	a.html('결과값 : '+sum).appendTo($('#ques'));
       		}
       	});
       });

	};
	return {
		onCreate : onCreate,
		setContentView : setContentView 
	};
})();

algo.router = {
	    onCreate : x =>{
	        $.getScript(x+'/resources/js/router.js',  // $.은 JQuery 객체 
	                ()=>{
	                    $.extend(new Session(x)); // new는 session의 copy 개념임
	                    $.getScript($.ctx()+'/resources/js/util.js') //프로토타입은 : $.fn.ctx
	                    .done(x=>{console.log('실행')})
	                    .fail(x=>{console.log('실패')});
	                    algo.main.onCreate();
	                }
	        );
	    }
	};