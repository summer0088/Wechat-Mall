//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    autoplay: true,
    interval: 3000,
    duration: 1000,
    banners: ['http://www.wannengpa.com/images/banner1.jpg', 'http://www.wannengpa.com/images/banner3.jpg', 'http://www.wannengpa.com/images/banner4.jpg'],
    search:["http://www.wannengpa.com/images/search.png","http://www.wannengpa.com/images/cate.png"],
    navlist:["今日推荐","时尚","国际","美妆","母婴","居家","生活"],
    datalist:[
      {bigImg: "http://www.wannengpa.com/images/water.jpeg",smallImg:"http://www.wannengpa.com/images/riwa.jpg",price:149,yprice:169},
      { bigImg: "http://www.wannengpa.com/images/water1.jpeg", smallImg: "http://www.wannengpa.com/images/riwa.jpg", price: 169, yprice: 189 },
      { bigImg: "http://www.wannengpa.com/images/yashua.jpg", smallImg: "http://www.wannengpa.com/images/riwa.jpg", price: 199, yprice: 269 },
      { bigImg: "http://www.wannengpa.com/images/yashua1.jpg", smallImg: "http://www.wannengpa.com/images/riwa.jpg", price: 99, yprice: 129 },
      { bigImg: "http://www.wannengpa.com/images/chuifengji.jpg", smallImg: "http://www.wannengpa.com/images/riwa.jpg", price: 149, yprice: 169 },
      { bigImg: "http://www.wannengpa.com/images/tixu.jpg", smallImg: "http://www.wannengpa.com/images/riwa.jpg", price: 149, yprice: 169 },
      { bigImg: "http://www.wannengpa.com/images/tixu2.jpg", smallImg: "http://www.wannengpa.com/images/riwa.jpg", price: 149, yprice: 169 },
    ],
    productlist: [
      { id:1,image: "http://www.wannengpa.com/images/guk.jpg", adv: "2.4折起 七格格旗下品牌保暖节巨献专场", day: 2, activity: "跨品牌满1件88折，2件8折" },
      { id: 2,image: "http://www.wannengpa.com/images/jiaren.jpg", adv: "2.4折起 七格格旗下品牌保暖节巨献专场", day: 2, activity: "跨品牌满1件88折，2件8折" },
      { id: 3,image: "http://www.wannengpa.com/images/kezi.jpg", adv: "2.4折起 七格格旗下品牌保暖节巨献专场", day: 2, activity: "跨品牌满1件88折，2件8折" },
      { id: 4,image: "http://www.wannengpa.com/images/la.jpg", adv: "2.4折起 七格格旗下品牌保暖节巨献专场", day: 2, activity: "跨品牌满1件88折，2件8折" },
      { id:5,image: "http://www.wannengpa.com/images/watch.jpg", adv: "2.4折起 七格格旗下品牌保暖节巨献专场", day: 2, activity: "跨品牌满1件88折，2件8折" },
      { id: 6,image: "http://www.wannengpa.com/images/p2.jpg", adv: "2.4折起 七格格旗下品牌保暖节巨献专场", day: 2, activity: "跨品牌满1件88折，2件8折" },
      { id: 7,image: "http://www.wannengpa.com/images/moka.jpg", adv: "2.4折起 七格格旗下品牌保暖节巨献专场", day: 2, activity: "跨品牌满1件88折，2件8折" },
      { id: 8,image: "http://www.wannengpa.com/images/tonlion.jpg", adv: "2.4折起 七格格旗下品牌保暖节巨献专场", day: 2, activity: "跨品牌满1件88折，2件8折" },
      { id: 9,image: "http://www.wannengpa.com/images/moho.jpg", adv: "2.4折起 七格格旗下品牌保暖节巨献专场", day: 2, activity: "跨品牌满1件88折，2件8折" }
    ],
    swiperCurrent: 0,
    selectCurrent: 0,
    userInfo: {}
  },
  //事件处理函数
  swiperchange:function(e){
      this.setData({
          swiperCurrent:e.detail.current
      })
  },

  navchange:function(e){
      this.setData({
        selectCurrent: e.currentTarget.id
      })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  goToMyPages:function(){
    wx.redirectTo({
      url:'../mypages/mypages'
    })
  }
})
