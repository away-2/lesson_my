const WXAPI = require('apifm-wxapi');
Page({
    data:{
        search:'',
        activeCategory:0,
        categories:[],//左边的分类列表
        currentGoods:[] //当前商品列表
    },
    onLoad(){
        //分享
        // wx.showShareMenu({
        //     withShareTicket:ticket
        // })
        // 面向对象  分离
        this.categories();
    },
    // 请求分类数据
    categories(){
        wx.showLoading({
          title: '加载中...',
        })
        WXAPI
        .goodsCategory()
        .then(res =>{
            // console.log(res)
            wx.hideLoading();
            if(res.code == 0){
                const categories = res.data;
                this.setData({ 
                   categories
                })
            }
        })
    },
    onCategoryClick(event){
       const idx = event.target.dataset.idx
       this.setData({
           activeCategory:idx
       })
    },
    searchscan(){
        wx.scanCode({
            scanType:['barCode','qrCode'],
            success: res=>{
                this.setData({
                    search: res.result

                })
                wx.navigateTo({
                    url:`/pages/goods/list?name=${res.result}`
               })
            }
        })
    },
    bindconfirm(){
        console.log(e,e.detail);
        // this.setData()
        let search = e.detail;
        this.setData({
            search
        })
        wx.navigateBTo({
             url:`/pages/goods/list?name=${search}`
        })
    }
})