"use strict";


var app = app || {};

app = {
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
	    	app.setContenView();
	    	$('#login_btn').click(()=>{
	    		/*alert(app.session.path('ctx')+'/move');*/
	    		console.log(app.x()+'/move');
	    		/*alert(app.x()+'/move');*/
	    		location.href = app.x()+'/move/public/member/login';
	    	});
	    	
	    	$('#login_submit').click(()=>{
	    		alert('로그인 버튼 클릭');
	    		
	    		$('#login_form').attr({action:app.x()+"/member/login", 
	    			method:"POST"}).submit();
	    		app.session.ctx(x);
	    		/*var from = $('user_login_form');
	    		from.action = app.x() + "/member/login";
	    		form.method = "post";
	    		form.submit();*/
	    		
	    		/*location.href = app.x()+'/member/login/A10/1';*/
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
	    		
	    		/*var form = document.getElementById('join_form');
				form.action = app.x() + "/member/add";
				form.method = "post";
				form.submit();*/
	    		
	    		/*location.href = app.x()+'/move/auth/member/auth';*/
	    	});
	    	$('#modify_btn').click(()=>{
	    		alert('업데이트 버튼 클릭');
	    		location.href = app.x()+'/member/retrieve/'+user.get('memID')+'/modify';
	    		/*location.href = app.x()+'/move/public/member/modify';*/
	    	});
	    	$('#modify_submit').click(()=>{
	    		$('#modify_form').attr({action:app.x()+"/member/modify", 
	    			method:"POST"}).submit();
	    	});
	    	$('#remove_btn').click(()=>{
	    		alert('삭제 버튼 클릭');
	    		location.href = app.x()+'/member/retrieve/'+user.get('memID')+'/remove';
	    		/*location.href = app.x()+'/move/public/member/remove';*/
	    	});
	    	$('#remove_submit').click(()=>{
	    		/*$('#remove_form').attr({action:app.x()+"/member/remove"+user.get('memID')+'/remove',*/
	    		$('#remove_form').attr({action:app.x()+"/member/remove", 
	    			method:"POST"}).submit();
	    	});
	    	$('#retrieve_btn').click(()=>{
	    		alert('마이페이스 버튼 클릭');
	    		/*location.href = app.x()+'/move/public/member/retrieve';*/
	    		location.href = app.x()+'/member/retrieve/'+user.get('memID')+'/retrieve';
	    	});
	    	
	    },
	    setContenView : ()=>{
	    	console.log('step 4 ::'+app.session.path('js'));
	    }
};
app.session = { // 세션은 여기에 저장
		ctx : x =>{
			console.log('step 2 ::'+x);
			sessionStorage.setItem('ctx', x);
			sessionStorage.setItem('js', x+'/resources/js');
			sessionStorage.setItem('css', x+'/resources/css');
			sessionStorage.setItem('img', x+'/resources/img');
			
		},
		path : x =>{
			return sessionStorage.getItem(x);
		}
};
app.x = ()=>{
	return app.session.path('ctx');
};
app.j = ()=>{
	return app.session.path('js');
};
app.c = ()=>{
	return app.session.path('css');
};
app.i = ()=>{
	return app.session.path('img');
};

app.userid = ()=>{
	return sessionStorage.getItem('memID');
}

var user = user || {};
user.session = x =>{
	$.each(x, (k, v)=>{
		/*alert('key:'+k+', value:'+v);*/
		sessionStorage.setItem(k, v);
	});
	/*alert(sessionStorage.getItem('memID'));*/
}

user.get = x=>{
	return sessionStorage.getItem(x);
}





/*app.memID=()=>{
	return app.sessionStorage.getItem('memID');
}
app.name=()=>{
	return app.sessionStorage.getItem('name');
}
app.teamID=()=>{
	return app.sessionStorage.getItem('teamID')
}
app.ssn=()=>{
	return app.sessionStorage.getItem('ssn');
}
app.gender=()=>{
	return app.sessionStorage.getItem('gender');
}
app.age=()=>{
	return app.sessionStorage.getItem('age');
}
app.roll=()=>{
	return app.sessionStorage.getItem('roll');
}
app.subject=()=>{
	return app.sessionStorage.getItem('subject');
}*/

/*var user = {
		set : x=>{
			sessionStorage.setItem('memID',x.memID);
			sessionStorage.setItem('teamID',x.teamID);
			sessionStorage.setItem('name',x.name);
			sessionStorage.setItem('roll',x.roll);
			sessionStorage.setItem('password',x.password);
			sessionStorage.setItem('ssn',x.ssn);
			sessionStorage.setItem('gender',x.gender);
			sessionStorage.setItem('age',x.age);
			sessionStorage.setItem('subject',x.subject);
		},
		get : x=>{
			return sessionStorage.getItem(x);
		}
};*/
