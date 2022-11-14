// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    title:'法拉利',
    car:'https://youjia-image.cdn.bcebos.com/modelImage/caf86f7391b5437d9943eecef0e70033/160889499997644d74fd.jpg@!watermark_1'
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    setTimeout(()=>{
         this.setData({
             title:'奔驰E300',
             car:'https://img0.baidu.com/it/u=1666963155,1722933945&fm=253&fmt=auto&app=138&f=PNG?w=499&h=373'
         })
    },3000)
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
