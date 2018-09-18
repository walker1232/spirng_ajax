"use strict";
var app = app || {};

/*app = {
		init : x => {
			console.log('step 1 ::');
			app.session.ctx(x);
			app.onCreate();
	    },
	    
	    setUser : x=>{
			sessionStorage.setItem('memID',x.memID);
			alert('app.memID() : '+ app.memID()); 
		},
	    onCreate : ()=>{
	    	console.log('step 3 ::');
	    	app.setContentView();
	    	$('#login_btn').click(()=>{
	    		alert(app.session.path('ctx')+'/move');
	    		console.log(app.x()+'/move');
	    		alert(app.x()+'/move');
	    		location.href = app.x()+'/move/public/member/login';
	    	});
	    	
	    	$('#login_submit').click(()=>{
	    		alert('로그인 버튼 클릭');
	    		
	    		$('#login_form').attr({action:app.x()+"/member/login", 
	    			method:"POST"}).submit();
	    		app.session.ctx(x);
	    		var from = $('user_login_form');
	    		from.action = app.x() + "/member/login";
	    		form.method = "post";
	    		form.submit();
	    		
	    		location.href = app.x()+'/member/login/A10/1';
	    	});
	    	
	    	$('#logout_btn').click(()=>{
	    		alert('로그아웃 버튼 클릭');
	    		location.href = app.x()+'/member/logout';
	    	});
	    	$('#add_btn').click(()=>{
	    		alert(app.x()+'/move');
	    		location.href = app.x()+'/move/public/member/add';
	    	});
	    	$('#add_submit').click(()=>{
	    		alert('add_submit !!');
	    	
	    		$('#add_form').attr({action:app.x()+"/member/add", 
	    			method:"POST"}).submit();
	    		
	    		var form = document.getElementById('join_form');
				form.action = app.x() + "/member/add";
				form.method = "post";
				form.submit();
	    		
	    		location.href = app.x()+'/move/auth/member/auth';
	    	});
	    	$('#modify_btn').click(()=>{
	    		alert('업데이트 버튼 클릭');
	    		location.href = app.x()+'/member/retrieve/'+user.get('memID')+'/modify';
	    		location.href = app.x()+'/move/public/member/modify';
	    	});
	    	$('#modify_submit').click(()=>{
	    		$('#modify_form').attr({action:app.x()+"/member/modify", 
	    			method:"POST"}).submit();
	    	});
	    	$('#remove_btn').click(()=>{
	    		alert('삭제 버튼 클릭');
	    		location.href = app.x()+'/member/retrieve/'+user.get('memID')+'/remove';
	    		location.href = app.x()+'/move/public/member/remove';
	    	});
	    	$('#remove_submit').click(()=>{
	    		$('#remove_form').attr({action:app.x()+"/member/remove"+user.get('memID')+'/remove',
	    		$('#remove_form').attr({action:app.x()+"/member/remove", 
	    			method:"POST"}).submit();
	    	});
	    	$('#retrieve_btn').click(()=>{
	    		alert('마이페이스 버튼 클릭');
	    		location.href = app.x()+'/move/public/member/retrieve';
	    		location.href = app.x()+'/member/retrieve/'+user.get('memID')+'/retrieve';
	    	});
	    	
	    },
	    setContentView : ()=>{
	    	console.log('step 4 ::'+app.session.path('js'));	
	    }
};
*/
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
		/*alert('1 >>>> ' + script);
		alert('2 >>>> ' + $.script());*/
		header = script+'/header.js';
		content = script+'/content.js';
		nav = script+'/nav.js';
		footer = script+'/footer.js';
		onCreate();
	};
	var onCreate =()=>{
		setContentView();
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
            $.Deferred(y=>{
            	$(y.resolve);
            })
        ).done(z=>{
        	w.html(
        			navUI()
        			+headerUI()
        			+contentUI(ctx)
        			+footerUI()
        	);
        	$('#login_btn').click(e=>{
        		e.preventDefault();	// default 무력화
        		app.permission.login();
        	});
        	//console.log('step4');
        	$('#board').click(e=>{
        		app.board.init();
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
		//$('#header').remove();
		$('#content').empty();
		$.getScript($.script()+"/login.js", ()=>{
			$('#content').html(loginUI());
		})
	};
	return {login : login};
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
	    }
	};