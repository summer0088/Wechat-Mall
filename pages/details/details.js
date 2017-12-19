var app = getApp();
Page({
    data:{
      indicatorDots:true,
      autoplay:true,
      interval:3000,
      duration:500,
      imgUrls: [
        '../../images/lan1.jpeg',
        '../../images/lan2.jpeg',
        '../../images/lan3.jpeg',
        '../../images/lan4.jpeg',
        '../../images/lan5.jpeg'
      ],
      iconimg:[
        {id:0,image:'../../images/fen1.jpeg'},
        {id:1,image:'../../images/lan1.jpeg'}
      ],
      listUrls:[
        [
          '../../images/fen1.jpeg',
          '../../images/fen2.jpeg',
          '../../images/fen3.jpeg',
          '../../images/fen4.jpeg',
          '../../images/fen5.jpeg'
        ],
        [
          '../../images/lan1.jpeg',
          '../../images/lan2.jpeg',
          '../../images/lan3.jpeg',
          '../../images/lan4.jpeg',
          '../../images/lan5.jpeg'
        ]
      ],
      size:[34,36,38],
      selectCurrent:0,
      cartnum:0,
      idd:app.getId

    },
    imagechange:function(e){
      var id = e.currentTarget.id;
      this.setData({
        imgUrls: this.data.listUrls[id]
      })
      console.log(this.data.imgUrls);
    },
    sizechange:function(e){
      var id = e.currentTarget.id;
      this.setData({
        selectCurrent: id
      })

      console.log(this.data.selectCurrent);
    },
    numchange:function(e){
      this.setData({
        cartnum: this.data.cartnum+1
      })
    }
})