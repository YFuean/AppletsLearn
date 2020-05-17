// pages/kfc/kfc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../assets/kfc/kfc1.png',
      '../../assets/kfc/kfc2.png',
      '../../assets/kfc/kfc3.png',
      '../../assets/kfc/kfc4.png',
      '../../assets/kfc/kfc5.png',
    ],
    bar1_list:[
      {
        icon_class: "iconfont icon-huiyuanma icon-font-color",
        text: "会员码"
      },
      {
        icon_class: "iconfont icon-wodeqiabao icon-font-color",
        text: "我的卡包"
      },
      {
        icon_class: "iconfont icon-wodedingdan icon-font-color",
        text: "我的订单"
      }
    ],
    bar2_list:[
      {
        icon_class: "iconfont icon-v icon-font-color",
        text: "V金商城"
      },
      {
        icon_class: "iconfont icon-kafei icon-font-color",
        text: "K咖啡"
      },
      {
        icon_class: "iconfont icon-kfc icon-font-color",
        text: "口袋炸鸡"
      },
      {
        icon_class: "iconfont icon-huiyuan icon-font-color",
        text: "会员"
      },
      {
        icon_class: "iconfont icon-songcan icon-font-color",
        text: "宅急送"
      }
    ],
    
    swiperIdx: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  bindchange(e) {
    this.setData({
      swiperIdx: e.detail.current
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})