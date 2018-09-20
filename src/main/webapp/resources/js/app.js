"use strict";
var app = app || {};

app = (()=>{
	var init =x=>{
		//onCreate();
		console.log('step 1 ::');
		app.router.init(x);
	};
	var onCreate =()=>{
		setContentView();
		// ajax는 여기에 들어와야 한다
	};
	var setContentView =()=>{
		
	};
	return {init : init};
})();

app.main = (()=>{
	var w, header, footer, content, nav, ctx, script, style, img;
	var init =()=>{
		ctx = $.ctx();
		script = $.script();
		style = $.style();
		img = $.img();
		w = $('#wrapper');
		header = script+'/header.js';
		content = script+'/content.js';
		nav = script+'/nav.js';
		footer = script+'/footer.js';
		onCreate();
	};
	var onCreate =()=>{
		setContentView();	//화면구성 (이벤트 걸기 전)
	};
	var setContentView =()=>{
		//console.log('step2');
		/*
		$.getScript(header,()=>{
			w.html(headerUI());
		});*/
        // 자스 Promise 비동기 로직 다루기
       $.when(
            $.getScript($.script()+'/header.js'),
            $.getScript($.script()+'/nav.js'),
            $.getScript($.script()+'/content.js'),
            $.getScript($.script()+'/footer.js'),
    		$.getScript(header),
    		$.getScript(nav),
    		$.getScript(content),
    		$.getScript(footer),
            $.Deferred(y=>{
            	$(y.resolve);
            })
        ).done(z=>{
        	w.html(
        			navUI()
        			+headerUI()
        			+contentUI()
        			+footerUI()
        	);
        	$('#login_btn').click(e=>{
        		e.preventDefault();	// default 무력화
        		app.permission.login();
        	});
        	//console.log('step4');
        	$('#board').click(e=>{
        		e.preventDefault();	// form, a 태그 무력화
        		app.board.init();
        	});
        	$('#add_btn').click(e=>{
        		e.preventDefault();
        		app.permission.add();
        		//app.add.join();
        	});
        })
        .fail(x=>{
        	console.log('로드 실패');
        });
	};
	return {init : init};
})();
app.permission = (()=>{
	var login =()=>{
		alert('login');
		$.getScript($.script()+'/compo.js',()=>{
			$.getScript($.script()+"/login.js", ()=>{
				$('#content').html(loginUI());
				ui.anchor({id:'login_submit',txt:'로그인'})
				.css({'width':'300px'})
				.addClass('btn-primary')
				.appendTo($("#content"))
				.click(e=>{
					//alert('로그인 전송 버튼 클릭');
					$.ajax({
						url : $.ctx()+'/member/login',
						method : 'POST',
						contentType : 'application/json',
						data : JSON.stringify({userid : $('#userid').val(), password : $('#password').val()}),
						success : d=>{
							alert('ID 판단::'+d.ID);
							alert('PW 판단::'+d.PW);
							alert('MBR 판단::'+d.MBR);
							if(d.ID==="WRONG"){
								alert('ID 없음');
								$('#content').html(loginUI());
							}else if(d.PW==="WRONG"){
								alert('PW 일치하지 않음');
								$('#content').html(loginUI());
							}else{
								app.router.home();
								alert('로그인 성공');
							}
						},
						error : (m1,m2,m3)=>{
							alert('에러발생'+m1);
							alert('에러발생'+m2);
							alert('에러발생'+m3);
						}
					});
				});
				
			});
		});	//옵저버 패턴 //콜백을 사용하지 않으면 람다가 아니다
		
	};
	var add =()=>{
		alert('add');
		$.getScript($.script()+'/compo.js',()=>{
			$.getScript($.script()+"/add.js", ()=>{
				$('#content').html(addUI());
				/*$("[name='subject']")
				.change(function(){	//이벤트 줄 때 사용
					alert($(this).val());
				});*/
				ui.anchor({id:'add_submit',txt:'가입'})
				.css({'width':'300px'})
				.addClass('btn-primary')
				.appendTo($("#content"))
				.click(e=>{
					e.preventDefault();
					var arr = [];
					var sub = $("[name='subject']");
					let i;
					for(i of sub){
						if(i.checked){
							alert('선택된 과목::'+i.value);
							arr.push(i.value);
						}
					}
					$.ajax({
						url : $.ctx()+'/member/add',
						method : 'POST',
						contentType : 'application/json',
						data : JSON.stringify({userid : $('#userid').val(),
											   name : $('#name').val(),
											   password : $('#password').val(),
											   ssn : $('#ssn').val(),
											   teamid : $('[name=teamid]:checked').val(),
											   //teamid : $('#teamid').val(),
											   roll : $('#roll').val(),
											   subject : JSON.stringify(arr)
											   }),
						success : d=>{
							alert('회원가입 버튼 전송 클릭');
							app.permission.login();
							/*$.getScript($.script()+"/login.js", ()=>{
								$('#content').html(loginUI());
							});*/
						},
						error : (m1,m2,m3)=>{
							alert('에러발생'+m1);
							alert('에러발생'+m2);
							alert('에얼발생'+m3);
						}
					});
				});
			});
		});
		
	};
	return {login : login, add : add};
})();
app.board = (()=>{
	var init =()=>{
		onCreate();
	};
	var onCreate =()=>{
		setContentView();
	};
	var setContentView =()=>{
		alert('Board');
		//$('#header').remove();
		$('#content').empty();
	};
	return {init : init};
})();


app.router = {
	    init : x =>{
	        $.getScript(x+'/resources/js/router.js',  // $.은 JQuery 객체 
	                ()=>{
	                    $.extend(new Session(x)); // new는 session의 copy 개념임
	                    $.getScript($.ctx()+'/resources/js/util.js') //프로토타입은 : $.fn.ctx
	                    .done(x=>{console.log('실행')})
	                    .fail(x=>{console.log('실패')});
	                    app.main.init();
	                }
	        );
	    },
	    home : ()=>{
	    	$.when(
	                $.getScript($.script()+'/header.js'),
	                $.getScript($.script()+'/nav.js'),
	                $.getScript($.script()+'/content.js'),
	                $.getScript($.script()+'/footer.js'),
	                $.Deferred(y=>{
	                	$(y.resolve);
	                })
	            ).done(z=>{
	            	$('#wrapper').html(
	            			navUI()
	            			+headerUI()
	            			+contentUI()
	            			+footerUI()
	            	);
	            	$('#login_btn').html('로그아웃').click(e=>{
	            		e.preventDefault();
	            		app.main.init();
	            	});
	            	
	            	//console.log('step4');
	            	$('#board').click(e=>{
	            		e.preventDefault();	// form, a 태그 무력화
	            		app.board.init();
	            	});
	            	$('#add_btn').html('마이페이지').click(e=>{
	            		
	            	});
	            })
	            .fail(x=>{
	            	console.log('로드 실패');
	            });
	    }
	};
