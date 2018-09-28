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
        	$('#board_list').click(e=>{
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
							if(d.ID==="WRONG"){
								alert('ID 없음');
								$('#content').html(loginUI());
							}else if(d.PW==="WRONG"){
								alert('PW 일치하지 않음');
								$('#content').html(loginUI());
							}else{
								app.router.home(d.MBR.userid);
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
		setContentView();
	};
	var setContentView =()=>{
		//alert('Board');
		$('#content').empty();
		app.service.boards(1);
		
	};
	return {init : init};
})();
app.service = {
	boards : x=>{
		$.getJSON($.ctx()+'/boards/'+x,d=>{
			//console.log(d.list);
			$.getScript($.script()+'/compo.js',()=>{
				let x = {
						type : 'default',
						id : 'table',
						head : '게시판',
						body : '오픈 게시판... 누구든지 사용가능',
						list : ['No', '제목', '내용', '글쓴이', '작성일', '조회수'],
						clazz : 'table table-bordered'
				};
				(ui.table(x))
				.appendTo($('#content'));
				$.each(d.list,(i,j)=>{
					$('<tr/>').append(
					$('<td/>').attr('width','5%').html(j.bno),
					$('<td/>').attr('width','10%').html(j.title),
					$('<td/>').attr('width','50%').html(j.content),
					$('<td/>').attr('width','10%').html(j.writer),
					$('<td/>').attr('width','10%').html(j.regdate),
					$('<td/>').attr('width','5%').html(j.viewcnt)
					).appendTo($('tbody'));
				});
				(ui.page()).appendTo($('#content'));
				let ul = $('.pagination');
				let existPrev = d.page.existPrev;
		        let existNext = d.page.existNext;
		        let prev = '';
		        let next = '';
		        prev =(!existPrev) ? 'disabled' : '';
		        next =(!existNext) ? 'disabled' : '';
		        let preli = $('<li id="prev" class="page-item '+prev+'"><span class="page-link">◀</span>');
		        let nextli = $('<li id="next" class="page-item '+next+'"><span class="page-link">▶</span>');
		        preli.appendTo(ul);
		        /*nextli.click(e=>{
		        	$.getJSON($.ctx()+'/boards/'+Number(d.page.endPage+1));
		        	
		        });*/
		        for(let i = d.page.beginPage; i <= d.page.endPage; i++){
		        	$('<li class="page-item"/>')
		        	.addClass((i==d.page.pageNumber)? 'active':'')
		        	.append($('<span/>')
		        	.addClass('page-link')
		        	.html(i)).appendTo(ul)
		        	.click(e=>{
		        		$('#content').empty();
		        		app.service.boards(i);	// 재귀호출
		        	});
		        	
		        	/*if(i == d.page.pageNumber()){
	        		$('<span/>')
					.addClass('page-link')
					.html(i)
					.click(e=>{
						alert('나는 '+i+'를 눌렀다');
					})
					.appendTo($('<li  class="page-item"/>')
							.addClass('active'))
					.appendTo(ul);
	        	}else{
	        		$('<span/>')
					.addClass('page-link')
					.html(i)
					.click(e=>{
						alert('나는 '+i+'를 눌렀다');
					})
					.appendTo($('<li  class="page-item"/>')
							.addClass(''))
					.appendTo(ul);
	        	}*/
		        	
		            //$('<li class="page-item"><a class="page-link" href="#">'+i+'</a></li>').appendTo(ul).click();
		        }
		        nextli.appendTo(ul);
		        $('.page-link').attr('style',"cursor:pointer");
			});
				
		});
	},
	my_board : x=>{
		$('#content').empty();
		alert("유효성 체크 ::::::"+ x.id + "    "+ x.pageNo);
		$.getJSON($.ctx()+'/boards/'+x.id+'/'+x.pageNo,d=>{
			//console.log(d.list);
			$.getScript($.script()+'/compo.js',()=>{
				let t = {
						type : 'default',
						id : 'table',
						head : '게시판',
						body : '오픈 게시판... 누구든지 사용가능',
						list : ['No', '제목', '내용', '글쓴이', '작성일', '조회수'],
						clazz : 'table table-bordered'
				};
				(ui.table(t))
				.appendTo($('#content'));
				$.each(d.list,(i,j)=>{
					$('<tr/>').append(
					$('<td/>').attr('width','5%').html(j.bno),
					$('<td/>').attr('width','10%').html(j.title),
					$('<td/>').attr('width','50%').html(j.content),
					$('<td/>').attr('width','10%').html(j.writer),
					$('<td/>').attr('width','10%').html(j.regdate),
					$('<td/>').attr('width','5%').html(j.viewcnt)
					).appendTo($('tbody'));
				});
				(ui.page()).appendTo($('#content'));
				let ul = $('.pagination');
				let existPrev = d.page.existPrev;
		        let existNext = d.page.existNext;
		        let prev = '';
		        let next = '';
		        prev =(!existPrev) ? 'disabled' : '';
		        next =(!existNext) ? 'disabled' : '';
		        let preli = $('<li id="prev" class="page-item '+prev+'"><span class="page-link">◀</span>');
		        let nextli = $('<li id="next" class="page-item '+next+'"><span class="page-link">▶</span>');
		        preli.appendTo(ul);
		        for(let i = d.page.beginPage; i <= d.page.endPage; i++){
		        	$('<li class="page-item"/>')
		        	.addClass((i==d.page.pageNumber)? 'active':'')
		        	.append($('<span/>')
		        	.addClass('page-link')
		        	.html(i)).appendTo(ul)
		        	.click(e=>{
		        		app.service.my_board({id : x.id, pageNo : i});
		        		// 재귀호출
		        	});
		        	
		        }
		        nextli.appendTo(ul);
		        $('.page-link').attr('style',"cursor:pointer");
			});
				
		});
	}
};
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
	    home : x=>{
	    	//let userid = x;
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
	            	$('#board_list').click(e=>{
	            		e.preventDefault();	// form, a 태그 무력화
	            		app.service.my_board({id : x, pageNo : 1});
	            		//app.board.init();
	            	});
	            	$('#add_btn').html('마이페이지').click(e=>{
	            		
	            	});
	            })
	            .fail(x=>{
	            	console.log('로드 실패');
	            });
	    }
	};


