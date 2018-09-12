<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div id="content-box">
	<div id="searchBox">
		<input type="button" id="searchBtn" value="검색">
		<input id="searchWord" name="searchWord" type="text" placeholder="검색어 입력"/>
		<select name="searchOption" id="searchOption">
			<option value="none">검색조건</option>
			<option value="userid">아이디</option>
			<!-- <option value="userid">아이디</option> DTO 변경 후-->
			<option value="name">이 름</option>
			<option value="teamid">팀 명</option>
			<!-- <option value="teamid">팀 명</option> DTO 변경 후-->
		</select>
	</div>
	<table id="contentBoxTab">	<!-- 여기서 id는 attribute, ""는 value -->
		<tr id="contentBoxMeta">
			<th>아이디</th>
			<th>이 름</th>
			<th>나 이</th>
			<th>성 별</th>
			<th>역 할</th>
			<th>팀 명</th>
		</tr>
		<c:forEach items="${list}" var="member">
		<tr>
			<td>${member.userid}</td>
			<td><a class="username" id="${member.userid}">${member.name}</a></td>
			<%-- <td><a class="username" id="${member.userid}">${member.name}</a></td> DTO 변경 후--%>
			<td>${member.age}</td>
			<td>${member.gender}</td>
			<td>${member.roll}</td>
			<td>${member.teamid}</td>
			<%-- <td>${member.teamid}</td> DTO 변경 후--%>
		</tr>
		</c:forEach>
		<tr>
			<td colspan="6">
				전체회원수 : ${page.rowCount} 명
				<ul class="pageBox" >
					<c:if test="${page.existPrev}">
						<li id="${page.prevBlock}" class="pageNumber">◀PREV</li>
					</c:if>
					<c:forEach begin="${page.beginPage}" 
						end="${page.endPage}" 
						step="1" varStatus="i">
						<li>
							<a id="${i.index}" class="pageNumber">
								${i.index}
							</a>
						</li>
					</c:forEach>
					<c:if test="${page.existNext}">
						<li id="${page.nextBlock}" class="pageNumber">NEXT▶</li>
					</c:if>
				</ul>
			</td>
		</tr>
	</table>
	<!-- <h1>This is adminpage</h1> -->
</div>
<script>
	admin.main('${ctx}');
</script>