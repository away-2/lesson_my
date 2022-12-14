<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<h1>这是dotable1.jsp页面--负责处理table1页面对应的业务</h1>
<hr color="red" size=5>
<%
//1.验证
//1.1假定用户名admin，密码123
request.setCharacterEncoding("utf-8");
String username=request.getParameter("username");
String password=request.getParameter("password");
if(username.equals("admin管理员") & password.equals("123")){
//2.流程控制
session.setAttribute("user",username);
  request.getRequestDispatcher("table2.jsp").forward(request,response);
}else{
    response.sendRedirect("login.jsp");
}

 %>
</body>
</html>