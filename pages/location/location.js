//location.js
//获取应用实例
var app = getApp()
Page( {
  data: {
    point:{
      latitude: null,
      longitude: null
    },
    markers: []
  },
  onLoad: function() {
    console.log( '地图定位接口getLocation还不能正常获取用户位置！' )
    var that = this;
    wx.getLocation( {
      type: 'wgs84',
      success: function( res ) {
        //我这里测试获取的数据一直是一样的（TIT创意园），官方接口没真正开放，还是没发布的原因
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy;
        var p={
             latitude: latitude,
             longitude: longitude
        }
        var mark = [ {
          latitude: latitude,
          longitude: longitude,
          title: '我现在的位置',
          zIndex:1
        }];
        that.setData({markers:mark});
        that.setData({point:p});
        console.log(mark)
      }
    })
  }
})