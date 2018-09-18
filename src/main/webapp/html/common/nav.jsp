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
              <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="search_btn">Search</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="board_list">게시판</a>
            </li>
            <li class="nav-item">
            	<a class="nav-link" id="login_btn" >Login</a>
            </li>
            <li class="nav-item">
            	<a class="nav-link" id="add_btn" >Join</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
<script>
$('#board_write').click(function(){
	alert('board_list click!!')
});
$('#login_btn').click(function(){
	location.href ='${ctx}/move/public/member/login';
});
$('#add_btn').click(function(){
	location.href ='${ctx}/move/public/member/add';
});
</script>