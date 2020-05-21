// pages/play/play.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playlist:[
      {
        id:1,
        name:'一纸情书(Live精华版)',
        zhuanji:'无线歌谣季 第10期',
        singer:'毛不易、岳云鹏',
        src:'https://www.kugou.com/song/#hash=9EC26B6B4DE6E8A67401BB14BD55D08B&album_id=8645351',
        cover:'../../assets/mymusic/timg.jpg',
        avatar:'../../assets/mymusic/mu_avatar.png'
      },
    ],
    state:'paused',
    playIndex:0,
    play:{},
    audioCtx:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onReady:function(){
    this.audioCtx = wx.createInnerAudioContext()
    this.setMusic(0)
  },
  setMusic:function(index){},
  play:function(){
    this.audioCtx.play()
    this.setData({state:'running'})
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