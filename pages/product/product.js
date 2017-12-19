//app.js
var app = getApp();
Page({
  data:{
    list:[],
    productlist:[
      [
        { id:1,"image": "../../images/lan1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 2,"image": "../../images/lan2.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 3,"image": "../../images/lan3.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 4,"image": "../../images/lan4.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 5,"image": "../../images/lan5.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 6,"image": "../../images/lan6.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 7,"image": "../../images/lan1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 8,"image": "../../images/lan2.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 9,"image": "../../images/lan3.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 10,"image": "../../images/lan4.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 11,"image": "../../images/lan5.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 12,"image": "../../images/lan5.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" }
      ],
      [
        { id: 13,"image": "../../images/lan1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 14,"image": "../../images/lan2.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 15,"image": "../../images/lan3.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 16,"image": "../../images/lan4.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 17,"image": "../../images/lan5.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 18,"image": "../../images/lan6.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 19,"image": "../../images/lan1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 20,"image": "../../images/lan2.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 21,"image": "../../images/lan3.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 22,"image": "../../images/lan4.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 23,"image": "../../images/lan5.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" }
      ],
      [
        { id: 24,"image": "../../images/fen1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 25,"image": "../../images/fen2.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 26,"image": "../../images/fen3.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 27,"image": "../../images/fen4.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 28,"image": "../../images/fen5.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 29,"image": "../../images/fen1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 30,"image": "../../images/fen1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 31,"image": "../../images/fen2.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 32,"image": "../../images/fen3.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 33,"image": "../../images/fen4.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 34,"image": "../../images/fen5.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 35,"image": "../../images/fen1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" }
      ],
      [
        { id: 36,"image": "../../images/fen1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 37,"image": "../../images/fen2.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 38,"image": "../../images/fen3.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 39,"image": "../../images/fen4.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 40,"image": "../../images/fen5.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 41,"image": "../../images/fen1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 42,"image": "../../images/fen1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 43,"image": "../../images/fen2.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 44,"image": "../../images/fen3.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 45,"image": "../../images/fen4.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 46,"image": "../../images/fen5.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 47,"image": "../../images/fen1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" }
      ],
      [
        { id: 48,"image": "../../images/lan1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 49,"image": "../../images/lan2.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 50,"image": "../../images/lan3.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 51,"image": "../../images/lan4.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 52,"image": "../../images/lan5.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 53,"image": "../../images/lan1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 54,"image": "../../images/lan1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 55,"image": "../../images/lan2.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 56,"image": "../../images/lan3.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 57,"image": "../../images/lan4.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 58,"image": "../../images/lan5.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 59,"image": "../../images/lan1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" }
      ],
      [
        { id: 60,"image": "../../images/fen1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 61,"image": "../../images/fen2.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 62,"image": "../../images/fen3.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 63,"image": "../../images/fen4.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 64,"image": "../../images/fen5.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 65,"image": "../../images/fen1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 66,"image": "../../images/fen1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 67,"image": "../../images/fen2.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 68,"image": "../../images/fen3.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 69,"image": "../../images/fen4.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 70,"image": "../../images/fen5.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 71,"image": "../../images/fen1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" }
      ],
      [
        { id: 72,"image": "../../images/lan1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 73,"image": "../../images/lan2.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 74,"image": "../../images/lan3.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 75,"image": "../../images/lan4.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 76,"image": "../../images/lan5.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 77,"image": "../../images/lan1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 78,"image": "../../images/lan1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 79,"image": "../../images/lan2.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 80,"image": "../../images/lan3.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 81,"image": "../../images/lan4.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 82,"image": "../../images/lan5.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 83,"image": "../../images/lan1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" }
      ],
      [
        { id: 84,"image": "../../images/fen1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 85,"image": "../../images/fen2.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 86,"image": "../../images/fen3.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 87,"image": "../../images/fen4.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 88,"image": "../../images/fen5.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 89,"image": "../../images/fen1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 90,"image": "../../images/fen1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 91,"image": "../../images/fen2.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 92,"image": "../../images/fen3.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 93,"image": "../../images/fen4.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 94,"image": "../../images/fen5.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 95,"image": "../../images/fen1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" }
      ],
      [
        { id: 96,"image": "../../images/lan1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 97,"image": "../../images/lan2.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 98,"image": "../../images/lan3.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 99,"image": "../../images/lan4.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 100,"image": "../../images/lan5.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 101,"image": "../../images/lan1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 102,"image": "../../images/lan1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 103,"image": "../../images/lan2.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 104,"image": "../../images/lan3.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 105,"image": "../../images/lan4.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 106,"image": "../../images/lan5.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 107,"image": "../../images/lan1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" }
      ],
      [
        { id: 108,"image": "../../images/fen1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 109,"image": "../../images/fen2.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 110,"image": "../../images/fen3.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 111,"image": "../../images/fen4.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 112,"image": "../../images/fen5.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 113,"image": "../../images/fen1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 114,"image": "../../images/fen1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 115,"image": "../../images/fen2.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 116,"image": "../../images/fen3.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 117,"image": "../../images/fen4.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 118,"image": "../../images/fen5.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" },
        { id: 119,"image": "../../images/fen1.jpeg", "yprice": 2690, "xprice": 1209, "discount": "4.5折", "desc": "杨幂同款中长款英伦风衣" }
      ]
    ]
  },
  onLoad(options) {
    var id = options.id;
    this.setData({
      list: this.data.productlist[id]
    })
  },
})