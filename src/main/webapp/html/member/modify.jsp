<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

	<style>
	table, th, td {
    border: 1px solid black;
	}
	</style>

	<div id="content" align="center">
	<form id="modify_form" >
	<table style="width:50%">
	<tr>
		<!-- <td rowspan="3" colspan="2" >공란</td> -->
		<td>아이디</td>
		<td>${user.userid}</td>
	</tr>
	<tr>
		<td>이름</td>
		<td>${user.name}</td>
	</tr>
	<tr>
		<td>비번</td>
		<td ><input type="text" name="password" placeholder="****"></td>
	</tr>
	<tr>
		<td>나이</td>
		<td>${user.age}</td>
	</tr>
	<tr>
		<td>성별</td>
		<td>${user.gender}</td>
	</tr>
	<tr>
		<td>${user.teamid}</td>
		<%-- <td>${user.teamid}</td> DTO 변경 후 --%>
		<td>
			<input type="radio" id="teamid_1" name="teamid" value="none" checked="checked"/>없음
			<input type="radio" id="teamid_2" name="teamid" value="nolja"/>걍놀자
			<input type="radio" id="teamid_3" name="teamid" value="jieunHouse"/>지은이네
			<input type="radio" id="teamid_4" name="teamid" value="turtleKing"/>터틀킹
			<input type="radio" id="teamid_5" name="teamid" value="codingZzang"/>코딩짱
			<!-- <input type="radio" id="teamid_1" name="teamid" value="none" checked="checked"/>없음
			<input type="radio" id="teamid_2" name="teamid" value="nolja"/>걍놀자
			<input type="radio" id="teamid_3" name="teamid" value="jieunHouse"/>지은이네
			<input type="radio" id="teamid_4" name="teamid" value="turtleKing"/>터틀킹
			<input type="radio" id="teamid_5" name="teamid" value="codingZzang"/>코딩짱  DTO 변경 후 -->
		</td>
	</tr>
	<tr>
		<td>${user.roll}</td>
		<td>
			<select name="roll" id="roll">
				<option value="leader" selected="selected">팀장</option>
				<option value="front">프론트개발</option>
				<option value="back">백단개발</option>
				<option value="android">안드로이드개발</option>
				<option value="minfe">민폐</option>
			</select>
		</td>
	</tr>
</table>
	<input type="button" id="modify_submit" value="수정확인"/>
</form>
	</div> <!-- content end -->
	
<%-- 	<form method="POST" enctype="multipart/form-data" action="${ctx}/member.do?action=fileupload&page=retrieve">
	    파일업로드: <input type="file" name="upfile"><br/>
	  <input type="submit" value="파일업로드">
	</form>
 --%>

<script>
$('#modify_submit').click(function(){
	$('#modify_form').attr({action:"${ctx}/member/modify", 
		method:"POST"}).submit();
});
</script>