// pages/productlist/productlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay: true,
    interval: 3000,
    duration: 1000,
    banners: ['http://www.wannengpa.com/images/banner1.jpg', 'http://www.wannengpa.com/images/banner3.jpg', 'http://www.wannengpa.com/images/banner4.jpg'],
    search: ["http://www.wannengpa.com/images/search.png", "http://www.wannengpa.com/images/cate.png"],
    navlist: ["今日推荐", "时尚", "国际", "美妆", "母婴", "居家", "生活"],
    productlist:[
      { image: "http://www.wannengpa.com/images/guk.jpg", adv: "2.4折起 七格格旗下品牌保暖节巨献专场", day: 2, activity:"跨品牌满1件88折，2件8折"},
      { image: "http://www.wannengpa.com/images/jiaren.jpg", adv: "2.4折起 七格格旗下品牌保暖节巨献专场", day: 2, activity: "跨品牌满1件88折，2件8折" },
      { image: "http://www.wannengpa.com/images/kezi.jpg", adv: "2.4折起 七格格旗下品牌保暖节巨献专场", day: 2, activity: "跨品牌满1件88折，2件8折" },
      { image: "http://www.wannengpa.com/images/la.jpg", adv: "2.4折起 七格格旗下品牌保暖节巨献专场", day: 2, activity: "跨品牌满1件88折，2件8折" },
      { image: "http://www.wannengpa.com/images/watch.jpg", adv: "2.4折起 七格格旗下品牌保暖节巨献专场", day: 2, activity: "跨品牌满1件88折，2件8折" },
  { image: "http://www.wannengpa.com/images/p2.jpg", adv: "2.4折起 七格格旗下品牌保暖节巨献专场", day: 2, activity: "跨品牌满1件88折，2件8折" },
      { image: "http://www.wannengpa.com/images/moka.jpg", adv: "2.4折起 七格格旗下品牌保暖节巨献专场", day: 2, activity: "跨品牌满1件88折，2件8折" },
      { image: "http://www.wannengpa.com/images/tonlion.jpg", adv: "2.4折起 七格格旗下品牌保暖节巨献专场", day: 2, activity: "跨品牌满1件88折，2件8折" },
      { image: "http://www.wannengpa.com/images/moho.jpg", adv: "2.4折起 七格格旗下品牌保暖节巨献专场", day: 2, activity: "跨品牌满1件88折，2件8折" }
    ],
    selectCurrent: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  navchange: function (e) {
    this.setData({
      selectCurrent: e.currentTarget.id
    })
    console.log(e);
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