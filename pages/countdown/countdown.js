Page({
  data:{
  // 剩余时间
      // 总时间
      remainTime:2,
      // 小时
      remainTimeHours:'0',
      // 分钟
      remainTimeMinutes:'0',
      // 秒
      remainTimeSeconds:'0'
  },
  
  // 剩余时间(毫秒)处理转换时间
    transformRemainTime:function(time = 0) {
      var sumSeconds = parseInt(time);
      var hours = parseInt(sumSeconds / 60 / 60); // 时
      hours = util.zeroFill(`${hours}`,2);
      var minutes = parseInt(sumSeconds / 60 % 60); // 分
      minutes = util.zeroFill(`${minutes}`, 2);
      var seconds = parseInt(sumSeconds % 60);
      seconds = util.zeroFill(`${seconds}`, 2);
      this.setData({
        remainTimeHours:hours,
        remainTimeMinutes:minutes,
        remainTimeSeconds:seconds
      })
    },
  
    // 开始倒计时
    startCountdown: function () {
      var that = this
      var interval = setInterval(function () {
        var time = that.data.remainTime - 1;
        if (time > 0) {
          that.setData({
            remainTime: time
          });
          that.transformRemainTime(that.data.remainTime);
        } else {
          clearInterval(interval);
          if (that.data.send === 1) {
            that.fetchInteractionDetail(that.data.interactionId, that.data.send, that.data.wxOpenId);
          } else {
            that.fetchInteractionDetail(that.data.interactionId, that.data.send, app.globalData.openId);
          }
        }
        }
        , 1000)}
})
  