// index.js
// 获取应用实例
Page({
  data: {
    
      swipers:[
        {
              "id": 1,
              "pic": "https://pic2.zhimg.com/v2-4fbee414f88e1889a39e6e451baaefe2_r.jpg?source=1940ef5c"
            },
            {
                  "id":2,
                  "pic":"https://tse3-mm.cn.bing.net/th/id/OIP-C.IcLFCHTmgeJq055hfCFQJwHaE8?w=282&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            },
            {
                  "id":3,
                  "pic":"https://ts1.cn.mm.bing.net/th/id/R-C.3aa89a8b1e6bcea3bdce69bb51c5b1de?rik=gowEgdG2WqPiQg&riu=http%3a%2f%2fresources.jsmo.xin%2ftemplates%2fupload%2f20295%2f202008%2f1596273131622.png&ehk=frq8hY%2bRNOoRewsfhZ6WiiqDFMly4%2bWXrO1TlvbUYlw%3d&risl=&pid=ImgRaw&r=0"
            }
            
      ],
     title:[],
     goods:[]
  },
  // 事件处理函数
  bindViewTap() {
   
  },
  onLoad() {
       
      wx.showLoading({
        title: '加载中...',
      })
      wx.request({ // api 
        
        url: 'https://www.fastmock.site/mock/cfac4a603269d09c742cef7305ca4409/luckincoffee/goods',
        success: (res) => {
          console.log(res)
          wx.hideLoading();  
          if (res.errMsg === "request:ok") {
            let data = res.data;
            // 解构
            let {nav, goods} = data  
            this.setData({
                nav:nav,
                goods:goods
            })
          }
        },
        fail: () => {
          console.log('error')
        }
      })
    },
})
