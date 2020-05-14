// pages/food/food.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cake:[{
      name:'黄桃奶酪',
      img:'../../assets/gallery1.jpg',
      price:32,
      flower:104
      },{
      name:'香酥饼',
      img:'../../assets/gallery2.jpg',
      price:15,
      flower:65
      },{
        name:'水果拼酸奶',
        img:'../../assets/gallery3.jpg',
        price:40,
        flower:124
      },{
        name:'时蔬卷',
        img:'../../assets/gallery4.jpg',
        price:12,
        flower:78
      },
      {
        name:'巧克力小饼干',
        img:'../../assets/gallery5.jpg',
        price:28,
        flower:90
      },
      {
        name:'麦香牛角包',
        img:'../../assets/gallery6.jpg',
        price:23,
        flower:102
      },
      {
        name:'巧克力草莓蛋糕',
        img:'../../assets/gallery7.jpg',
        price:78,
        flower:503
      },
      {
        name:'一筐皮蛋',
        img:'../../assets/gallery8.jpg',
        price:35,
        flower:110
      }
    ],
      addText: ''
  },
  onMyEvent: function(e){
    console.log(e.detail)// 自定义组件触发事件时提供的detail对象
    wx.showModal({
      content:'确定购买'+ e.detail.name + '吗？',
      confirmText:'确定',
      cancelText:'取消'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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