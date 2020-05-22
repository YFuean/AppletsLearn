
Page({
  /** 
   * 页面的初始数据 
   */
  data: {
    isActive:null,   
    listMain:
    [
      {
        id: "1", region: "A",
        brands: [
          { brandId: "a1", name: "阿明" },
          { brandId: "a2", name: "奥特曼" },
          { brandId: "a3", name: "安庆" },
          { brandId: "a4", name: "阿曼" },
          { brandId: "a5", name: "阿明" },
          { brandId: "a6", name: "奥特曼" },
          { brandId: "a7", name: "安庆" },
          { brandId: "a8", name: "阿曼" }
        ]
      },
      {
        id: "2", region: "B",
        brands: [
          { brandId: "b1", name: "爸爸" },
          { brandId: "b2", name: "北京" },
          { brandId: "b3", name: "白坚昆" },
          { brandId: "b4", name: "百里守约" },
          { brandId: "b5", name: "百里玄策" },
          { brandId: "b6", name: "北京" }
        ]
      },
      {
        id: "3", region: "C",
        brands: [
          { brandId: "c1", name: "陈诚" },
          { brandId: "c2", name: "曹操" },
          { brandId: "c3", name: "蔡文姬" },
          { brandId: "c4", name: "嫦娥" }
        ]
      },
      {
        id: "4", region: "D",
        brands: [
          { brandId: "d1", name: "董白" },
          { brandId: "d2", name: "段誉" },
          { brandId: "d3", name: "东方耀" },
          { brandId: "d4", name: "狄仁杰" },
          { brandId: "d5", name: "邓艾" },
        ]
      }      
    ],
    listTitles: [],
    fixedTitle:null,    
    toView: 'inToView0',
    oHeight:[],
    scroolHeight:0
  },
  //点击右侧字母导航定位触发
  scrollToViewFn: function (e) {
    var that=this;
    var _id = e.target.dataset.id;
    for (var i = 0; i < that.data.listMain.length; ++i) {
      if (that.data.listMain[i].id === _id) {
        that.setData({
          isActive:_id,
          toView: 'inToView' + _id
        })
        break
      }
    }
  },
  toBottom:function(e){
    console.log(e)
  },
  // 页面滑动时触发
  onPageScroll:function(e){
    this.setData({
      scroolHeight: e.detail.scrollTop
    });
    for (let i in this.data.oHeight){
      if (e.detail.scrollTop < this.data.oHeight[i].height){
        this.setData({
          isActive: this.data.oHeight[i].key,
          fixedTitle:this.data.oHeight[i].name
        });
        return false;
      }
    }
  },
// 处理数据格式，及获取分组高度
  getBrands:function(){
    var that=this;
    wx.request({
      url: '获取数据地址',
      success(res) {
        if(res.data.status==0){
          var someTtitle = null;
          var someArr=[];
          for(var i=0;i<res.data.data.length;i++){
            var newBrands = { brandId: res.data.data[i].brandId, name: res.data.data[i].brandName };
            if (res.data.data[i].initial != someTtitle){
              someTtitle = res.data.data[i].initial
              var newObj = {
                id: i,
                region: someTtitle,
                brands: []
              };
              someArr.push(newObj)
            }
            newObj.brands.push(newBrands);
            
          };
          //赋值给列表值
          that.setData({
            listMain:someArr
          });
          //赋值给当前高亮的isActive
          that.setData({
            isActive: that.data.listMain[0].id,
            fixedTitle: that.data.listMain[0].region
          });
 
          //计算分组高度,wx.createSelectotQuery()获取节点信息
          var number=0;
          for (let i = 0; i < that.data.listMain.length; ++i) {
            wx.createSelectorQuery().select('#inToView' + that.data.listMain[i].id).boundingClientRect(function (rect) {
              number = rect.height + number;
              var newArry = [{ 'height': number, 'key': rect.dataset.id, "name": that.data.listMain[i].region}]
              that.setData({
                oHeight: that.data.oHeight.concat(newArry)
              })
 
            }).exec();
          };
        }
      }
    })
  },
  onLoad: function (options) {
    var that=this;
    that.getBrands();
  }
})