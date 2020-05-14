Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerImg:{
      type:String
    },
    innerName: {
      type: String,
      value: 'default value',
    },
    price:{
      type:Number
    },
    flower:{
      type:Number
    }
  }
})