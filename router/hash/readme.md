# SPA  优质的现代用户体验
1. 不要通过a 标签跳转页面  白一下
    click  event.preventDefault() 默认行为
    index.html#page1  index.html#page2  index.html#page3
    url hash  部分   不会刷新页面
    不同的url 来匹配不同的资源
    url 会变， 
2. url 的hash部分改变， 请求新的内容
     并且页面不会重新刷新
     location.protocol -> 'http:'   http协议
     location.host   ->  '127.0.0.1:5501'  域名
     location.pathname  ->  '/lesson_my/js/router/hash/index.html' 路径
     location.hash   -> '#/page1'  

3. url 分成以下几部分
    js  url 属于  BOM对象   location对象 
    'http://127.0.0.1:5501/lesson_my/js/router/hash/index.html?a=2#/page1'
     location.protocol   'http:'   ->https
     location.host    127.0.0.1:5501  domain 
          location.hostname     127.0.0.1:
          location.port       5501
     location.pathname  ->  '/lesson_my/js/router/hash/index.html'
     location.search    ->  '?a=2'     查询参数
     location.hash   -> '#/page1'    改变时   不会去刷新

    