<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
	<%-- <jsp:include page="head.jsp"/> --%>
<div id="menu-box">
			<ul id="menu">
				<li><a href="">HOME</a></li>
				<li><a href="">ABOUT</a></li>				
				<li><a id="moveAdmin">ADMIN</a></li>
				<!-- <li><a onclick="common.move('admin', 'move', 'main')">ADMIN</a></li> -->
				<%-- <li><a href="${ctx }/admin.do?action=move&page=main">ADMIN</a></li> --%>
			</ul>
</div>
<script>
	/* document.getElementById('moveAdmin').addEventListener('click', function(){
		router.move(['${ctx}', 'admin', 'move', 'main']);
	}); */
	
	
</script>