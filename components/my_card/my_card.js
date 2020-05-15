Component({
  options:{
    multipleSlotst:true
  },
  properties: {
    list: {
      type:Array,
      value:[]
    }
  },
  methods: {
    onTap:function(e){
      var myEventDetail= e.currentTarget.dataset.item; //detail对象，提供给事件监听函数
      var myEventOption={}//触发事件的选项
      this.triggerEvent('myevent',myEventDetail,myEventOption)
    }
  }
})