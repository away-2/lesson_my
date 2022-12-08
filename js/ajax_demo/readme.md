#  同学列表
    - 前后端分离
         table
         后端？


         GET HTTP Method
         /students
         返回json  数据

         - nmp init -y  项目变成一个后端项目
               npm i json-server
               package.json  "dev": "json-server --watch student.json"
               nmp run dev
         
         - http 请求分为  GET  POST   FORM 动作
         GET  获取列表
         POST  添加新数据
             fetch(url, {
                //配置项
                method:'POST',
                body:JSON.stringify(student),
                headers:{
                    'Content-Type': 'application/json'
                }

             })

 <link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.2.3/css/bootstrap.min.css" rel="stylesheet">
 不用css，引用外部样式网站