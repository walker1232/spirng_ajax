<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
	<div id="content" align="center">
		<form id="remove_form">
			<font color="black">비밀번호 재입력: </font><input type="text" name="password">
			<input id="remove_submit" type="button" value="delete">
		</form>
		
	</div> <!-- content end -->
	
<script>
$('#remove_submit').click(function(){
	/*$('#remove_form').attr({action:app.x()+"/member/remove"+user.get('memID')+'/remove',*/
	$('#remove_form').attr({action:"${ctx}/member/remove", 
		method:"POST"}).submit();
});
</script>