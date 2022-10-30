<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'index.jsp' starting page</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
  </head>
  
  <body>
    <center><h1>请填写注册信息</h1></center> 
  <hr size="5" color="red">
  <script type="text/javascript">
  function checkuser(str){
	  var username=/^[\u4E00-\u9FA5]{1,10}$/;
	  return username.test(str);
  }
  function checkpassword(str){
	  var password=repassword;
	  return password.test(str);
  }
  function emailcheck(str){
	  var email=/^\w+@[a-zA-Z0-9]{3,10}$/;
	  return email.test(str);
  }
  function check(){
	  //验证用户名
	  var username=document.getElementById("username").value;
	  var password=document.getElementById("password").value;
	  var email=document.getElementById("email").value;
	  if(!checkuser(username)){
		  alert("用户名长度不超过10个字符，必须以字母开头！");
		  document.getElementById("username").focus();
		  return false;
	  }
	  if(!checkpassword(password)){
		  alert("密码不一致，请重新输入！");
		  document.getElementById("password").focus();
		  return false;
		  
	  }
	  if(!checkemail(email)){
		  alert("格式错误，请以@开头！");
		  document.getElementById("email").focus();
		  return false;
		  
	  }
  }
  </script>
  <form  action="" onsubmit="check()">
  <fieldset style="width:600px;height:300px;margin:0 auto;float:none">
  <legend>注册信息</legend>
  用&ensp;户&ensp;名：<input type="text" id="username"><br>
  密&ensp;&ensp;&ensp;&ensp;码：<input type="text" id="password"><br>
  确认密码：<input type="text" id="repassword"><br>
  邮&ensp;&ensp;&ensp;&ensp;箱：<input type="text" id="email"><br><br><br>
 &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
  <input type="submit"  value="提交"/><br>
  </fieldset>
  </form>
  </body>
</html>
