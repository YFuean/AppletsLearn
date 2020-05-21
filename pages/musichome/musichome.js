// pages/musichome/musichome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:Number,
    imgUrls: [
      '../../assets/mymusic/m1.png',
      '../../assets/mymusic/m2.png',
      '../../assets/mymusic/m3.png',
      '../../assets/mymusic/m4.png',
      '../../assets/mymusic/m5.png',
    ],
    bar1_list:[
      {
        icon_class: "iconfont icon-fm icon-font-color",
        text: "私人FM"
      },
      {
        icon_class: "iconfont icon-tuijian icon-font-color",
        text: "每日歌曲推荐"
      },
      {
        icon_class: "iconfont icon-depuyouhuaxiangqingbangdanpaiming icon-font-color",
        text: "云音乐新歌榜"
      }
    ],
    swiperIdx: 0,

    playlist:[
      {
        id:1,
        name:'一纸情书(Live精华版)',
        zhuanji:'无线歌谣季 第10期',
        singer:'毛不易、岳云鹏',
        src:'https://yfuean-student-manager.oss-cn-shanghai.aliyuncs.com/study-file/%E6%AF%9B%E4%B8%8D%E6%98%93%E3%80%81%E5%B2%B3%E4%BA%91%E9%B9%8F%20-%20%E4%B8%80%E7%BA%B8%E6%83%85%E4%B9%A6%20%28Live%E7%B2%BE%E5%8D%8E%E7%89%88%29.mp3',
        cover:'../../assets/mymusic/timg.jpg',
        avatar:'../../assets/mymusic/ava1.png'
      },
      {
        id:2,
        name:'Spongebobo Squarepants',
        zhuanji:'The Yello Album',
        singer:'Various Artists',
        src:'https://yfuean-student-manager.oss-cn-shanghai.aliyuncs.com/study-file/%E6%B5%B7%E7%BB%B5%E5%AE%9D%E5%AE%9D.mp3',
        cover:'../../assets/mymusic/timg.jpg',
        avatar:'../../assets/mymusic/ava2.png'
      },
      {
        id:3,
        name:'梅香如故',
        zhuanji:'如懿传 电视剧原声带',
        singer:'周深、毛不易',
        src:'https://yfuean-student-manager.oss-cn-shanghai.aliyuncs.com/study-file/%E5%91%A8%E6%B7%B1%E3%80%81%E6%AF%9B%E4%B8%8D%E6%98%93%20-%20%E6%A2%85%E9%A6%99%E5%A6%82%E6%95%85.mp3',
        cover:'../../assets/mymusic/timg.jpg',
        avatar:'../../assets/mymusic/ava3.png'
      },
      {
        id:4,
        name:'左手指月(纯享版)',
        zhuanji:'梦想的声音第三季',
        singer:'黄霄云',
        src:'https://yfuean-student-manager.oss-cn-shanghai.aliyuncs.com/study-file/%E9%BB%84%E9%9C%84%E9%9B%B2%20-%20%E5%B7%A6%E6%89%8B%E6%8C%87%E6%9C%88%20%28%E7%BA%AF%E4%BA%AB%E7%89%88%29.mp3',
        cover:'../../assets/mymusic/timg.jpg',
        avatar:'../../assets/mymusic/ava4.png'
      },
      {
        id:5,
        name:'Fleurie - Breathe',
        zhuanji:'Breathe',
        singer:'Fleurie',
        src:'https://yfuean-student-manager.oss-cn-shanghai.aliyuncs.com/study-file/Fleurie%20-%20Breathe.mp3',
        cover:'../../assets/mymusic/timg.jpg',
        avatar:'../../assets/mymusic/ava5.png'
      },
      {
        id:6,
        name:'Dream it possible',
        zhuanji:'Dream It Possible',
        singer:'Delacey',
        src:'https://yfuean-student-manager.oss-cn-shanghai.aliyuncs.com/study-file/dream-it-possible.mp3',
        cover:'../../assets/mymusic/timg.jpg',
        avatar:'../../assets/mymusic/ava6.png'
      }
    ],
    state:'paused',
    playIndex:Number,
    play:{
      percent: 0,
      duration:String
    },
    audioCtx:null,
  },
  bindchange(e) {
    this.setData({
      swiperIdx: e.detail.current
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  changeItem:function(e){
    console.log(e.target.dataset.item)
    this.setData({
      item:e.target.dataset.item
    })
  },
  play:function(e){
    this.setData({audioCtx:null})
    let song = e.target.dataset.item
    this.audioCtx.play()
    this.setData({state:'running'})
    this.audioCtx.src = song
  },
  pause:function(){
    this.audioCtx.pause()
    this.setData({state:'paused'})
    this.setData({audioCtx:null})
  },
  setMusic:function(index){
    
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.audioCtx = wx.createInnerAudioContext()
    this.setMusic(0)
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