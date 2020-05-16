// pages/myapi/myapi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newslist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //在js文件里写
    var that = this ;//不要漏了这句，很重要
    wx.request({
          url: 'http://api.tianapi.com/dongman/index?key=bc90444f3f244b0eb39cd743f62d7c02&num=20',
          success: function (res) {
              console.log(res.data);
               that.setData({
                newslist: res.data.newslist
                 //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories
           })
        }
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