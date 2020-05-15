// pages/food/food.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cake:[{
      id: 1,
      name:'黄桃奶酪',
      img:'../../assets/gallery1.jpg',
      price:32,
      flower:104,
      des:"黄桃奶酪酸奶慕斯,慕斯,是属于夏季的,细腻而清凉,慢慢的吃下一口,凉丝丝的滑入,心情瞬间也就柔软了下来。"
      },{
      id: 2,
      name:'香酥饼',
      img:'../../assets/gallery2.jpg',
      price:15,
      flower:65,
      des:"香酥饼为面食佳品，面香浓郁，馅料多样，口味独特，南方北方家庭均可制作，主要食材为面粉、大葱、花椒面，此饼外酥脆，内软嫩，层薄且多，饼馅鲜，嫩滑多汁，香浓味美。"
      },{
        id: 3,
        name:'水果拼酸奶',
        img:'../../assets/gallery3.jpg',
        price:40,
        flower:124,
        des:"水果洗净去皮切块,倒入酸奶杯搅拌,放入冰箱冷藏一会再食用,冰冰凉凉酸甜可口!"
      },{
        id: 4,
        name:'时蔬卷',
        img:'../../assets/gallery4.jpg',
        price:12,
        flower:78,
        des:"荤素合理搭配，热量又低的时蔬卷就这么做好了，直接吃或者蘸着酱料吃都是可以的。不过我建议大家最好还是蘸着酱料吃，口感超级棒。夏天的话，可以在酱料里面加点醋，酸酸的，更开胃爽口哦。"
      },
      {
        id: 5,
        name:'巧克力小饼干',
        img:'../../assets/gallery5.jpg',
        price:28,
        flower:90,
        des:" 巧克力曲奇饼干的做法,最经典的软饼干,如蛋糕般松软香甜,用来做早餐超级好,小朋友们都爱它。"
      },
      {
        id: 6,
        name:'麦香牛角包',
        img:'../../assets/gallery6.jpg',
        price:23,
        flower:102,
        des:"人气最高的就是焦糖牛角包啦~焦香的外皮包裹上一层焦糖,又香又脆,甜而不腻。"
      },
      {
        id: 7,
        name:'巧克力草莓蛋糕',
        img:'../../assets/gallery7.jpg',
        price:78,
        flower:503,
        des:"这个季节的草莓很香很甜,这款巧克力草莓蛋糕,味蕾全开!。"
      },
      {
        id: 8,
        name:'一筐皮蛋',
        img:'../../assets/gallery8.jpg',
        price:35,
        flower:110,
        des:"这款蛋糕虽然简单的不能再简单了，虽然也没有蛋的加入，可是成品却是出乎意料地湿润柔软，巧克力味道浓郁。"
      }
    ],
      addText: ''
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

  },
  onMyEvent:function(e){
    e.detail //自定义组件触发时间时提供的detail对象
    console.log("你购买了：" +  e.detail)
    wx.navigateTo({
      url: '../../pages/detail/detail?item='+ JSON.stringify(e.detail),
    })
  }
})