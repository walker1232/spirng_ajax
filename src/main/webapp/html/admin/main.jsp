<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!doctype html>
<html lang="en">
<%-- <jsp:include page="../common/head.jsp"/> --%>
<body>
<div id="wrapper">
	<div id="header">
		<jsp:include page="../common/title_box.jsp"/>
		<h1>관리자 페이지</h1>
	</div> <!-- header end -->
	<div id="content">
		<jsp:include page="../member/search.jsp"/>
	</div> <!-- content end -->
	<div id ="footer">
		<%-- <jsp:include page="../common/footer_box.jsp"/> --%>
	</div>
	
</div>
<script>
	admin.main('${ctx}');
</script>

</body>
</html>