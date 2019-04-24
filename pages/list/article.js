//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '你好...',
    imgUrls: [
      {
        link: '/pages/index/index',
        url: '/images/1.jpg'
      }, {
        link: '/pages/logs/logs',
        url: '/images/2.jpg'
      }, {
        link: '/pages/index/index',
        url: '/images/3.jpg'
      }
    ],
    programme: [
      {
        url: '#',
        brief: '陕汽的未来何去何从？从陕汽重卡2019商务年会看未来发展新走向',
        img: '/images/list01.png',
        name: '56物流网 物流生态新物种',
        date: '12-22',
        icon: '/images/icon01.jpg'
      }, {
        url: '#',
        brief: '陕汽的未来何去何从？从陕汽重卡2019商务年会看未来发展新走向',
        img: '/images/list02.jpg',
        name: '56物流网 物流生态新物种',
        date: '10-15'
      }, {
        url: '#',
        brief: '陕汽的未来何去何从？从陕汽重卡2019商务年会看未来发展新走向',
        img: '/images/list03.png',
        name: '56物流网 物流生态新物种',
        date: '9-25'
      }
    ],
    texts: [
      { text: '首页', url: '#' },
      { text: '资讯', url: '#' },
      { text: '选车', url: '#' },
      { text: '租车', url: '#' },
      { text: '二手车', url: '#' },
      { text: '发货', url: '#' },
      { text: '司机加盟', url: '#' },
      { text: '56研究院', url: '#' },
      { text: '黄金产业链', url: '#' },
      { text: '视频', url: '#' }
    ],
  },
  //事件处理函数
  clickMe() {
    console.log(1)
    this.setData({ motto: 'Hello World' })
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log(this.data.programme)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,

        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
