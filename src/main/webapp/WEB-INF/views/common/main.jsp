<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles"%>
<!doctype html>
<html lang="en">
<head>
	<title>Home</title>
	
	<link href="${ctx}/resources/other_resources/dist/css/skins/AdminLTE.min.css" rel="stylesheet" type="text/css" />
	<link href="${ctx}/resources/other_resources/dist/css/skins/_all-skins.min.css" rel="stylesheet" type="text/css" />
	 <link href="${ctx}/resources/other_resources/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	
	<link href="${ctx}/resources/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
	
	<link rel="stylesheet" type="text/css" href="${ctx}/resources/vendor/bootstrap/css/bootstrap.css" />
	<link rel="shortcut icon" href="${ctx}/resources/img/bears.ico" />
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">	
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
	<link href="${ctx}/resources/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="${ctx}/resources//css/clean-blog.css" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
	<%-- <script src="${ctx}/resources/js/app.js"></script> --%>
	
</head>
<body>
<div id="wrapper">
	<div id="nav">
		<tiles:insertAttribute name="nav"/>
	</div>
	<div id="header">
		<tiles:insertAttribute name="header"/>
	</div> <!-- header end -->
	<div id="content">
		<tiles:insertAttribute name="content"/>
	</div> <!-- content end -->
	<div id ="footer">
		<tiles:insertAttribute name="footer"/>
	</div>
</div>

  <!-- Bootstrap core JavaScript -->
    <script src="${ctx}/resources/vendor/jquery/jquery.min.js"></script>
    <script src="${ctx}/resources/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Custom scripts for this template -->
    <script src="${ctx}/resources/js/clean-blog.min.js"></script>

<script>
	
	/* app.init('${ctx}'); */
	/* $('#login_btn').on('click', function(){alert('로그인 버튼 클릭 2');}); */
</script>
</body>
</html>