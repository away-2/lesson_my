# 大厂HTML5 作品赏析


-html5 标签
  audio 网易云音乐
  video 爱奇艺 B站

-background-size
   1.移动端rem  w h 是多变的 而PC端没有这个问题
   2.移动端 retina 3倍retina
   40x40 80x80 120x120
   200x200
   3.background-size：背景图片大小
    cover（使背景图片等比例缩放填满容器 超出则剪裁
    contain


-库文件引入位置
  1.css 放到head里
      css 应该尽早的参与网页的渲染


  2.js 放在body最下面，js会阻塞页面渲染


- swiper 滑动组件库的使用
     1.引入swiper组件库
         js  css
     2. 固定的html结构 
        .swiper-container(滑动区域大小)>.swiper-wrapper>.swiper-slide
     3. new Swiper（selector,{
        direction:''
     })


translate3d(-50%,0,0) 3d 启动3d加速器 GPU渲染
translate(-50%,0) 2d
效果一样


-使用linear-gradient 生成背景图片
     1.颜色渐变的图片，#f8ddd1,#faece5 73%,#fad2c0
         colorStop
     2.性能优化， 图片 下载比较大
         css 写的，不需要额外的下载
         img src 下载+显示
     3.下载越多，http 并发数越多，卡
          马路 
