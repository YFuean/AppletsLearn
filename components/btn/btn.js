Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerImg:{
      type:String
    },
    innerText: {
      type: String,
      value: 'default value',
    }
  },
  methods: {
    onTap: function(){
      var myEventDetail = {
        name:"黄桃奶酪"
      } // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('myevent', myEventDetail, myEventOption)
    }
  }
})