<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>login.jsp</title>
<style>
body,input{font-size:24;}
</style>
</head>
<body>
<h1>这是login.jsp页面</h1>
<hr color="blue" size=5>
<h1>请登录</h1>
<hr>
<%   String username="";
     String password="";
    Cookie[] cookie1=request.getCookies();
    if(cookie1==null){
    return;
    }
    else{
    for (int i=0;i<cookie1.length;i++){
           if("username".equals(cookie1[i].getName())){
                 username=cookie1[i].getValue();
           }
           if("password".equals(cookie1[i].getName())){
                 password=cookie1[i].getValue();
           }
           
           
        }
        if("admin".equals(username)&&"123".equals(password)){
        session.setAttribute("username",username);
        session.setAttribute("password",password);
        response.sendRedirect("welcome.jsp");
        }
   }
     %> 
<form action="cookie1.jsp" method="post">
用户名：<input type="text" name="username"><br>
密&ensp;&ensp;码：<input type="password" name="password"><br>
<input type="checkbox" name="rember">记住用户<br><br>
<input type="submit" value="提交">
<input type="reset" value="重置">
</form>
                                                             
</body>
</html>