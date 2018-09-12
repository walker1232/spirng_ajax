<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand" href="index.html">Start Bootstrap</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="index.html">${user.name}님의 홈</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="retrieve_btn">mypage</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="board_write">게시글쓰기</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="board_list">게시글목록보기</a>
            </li>
            <li class="nav-item">
            	<a class="nav-link" id="logout_btn" >Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <script>
    	/* user.session({
    		userid : '${user.userid}',
    		name : '${user.name}',
    		gender : '${user.gender}',
    		age : '${user.age}',
    		roll : '${user.roll}',
    		teamid : '${user.teamid}'
    	}); */
    	/* app.user.set('userid') */
    	$('#board_write').click(function(){
	    		location.href = '${ctx}/board/register';
	    	});
    	$('#board_write').click(function(){
    		alert('board_list click!!')
    	});
    	$('#board_write').click(function(){
    		alert('board_list click!!')
    	});
    	$('#logout_btn').click(function(){
    		alert('로그아웃 버튼 클릭');
    		location.href = '${ctx}/member/logout';
    	});
    	$('#retrieve_btn').click(function(){
    		alert('마이페이스 버튼 클릭');
    		location.href = '${ctx}/member/retrieve';
    		/*location.href = app.x()+'/move/public/member/retrieve';*/
    		/* location.href = '${ctx}/member/retrieve/${user.userid}/retrieve'; */
    	});
    	
    </script>