Page({
  data: {
    category: [
      { name: '女装', id: 'nvzhuang' },
      { name: '男装', id: 'nanzhuang' },
      { name: '男女内衣', id: 'neiyi' },
      { name: '女鞋', id: 'nvxie' },
      { name: '男鞋', id: 'nanxie' },
      { name: '箱包皮具', id: 'pibao' },
      { name: '手表配饰', id: 'watch' },
      { name: '美妆个护', id: 'meizhuang' },
      { name: '母婴', id: 'muying' },
      { name: '运动户外', id: 'run' },
      { name: '手机数码', id: 'tel' },
      { name: '家用电器', id: 'dianqi' },
      { name: '家居家纺', id: 'jiafang' }
    ],
    detail:[
      {"nvzhuang":[
        { "image": "http://www.wannengpa.com/images/lianyiquan.jpg", "catename": "连衣裙" },
        { "image": "http://www.wannengpa.com/images/dayi.jpg", "catename": "大衣" },
        { "image": "http://www.wannengpa.com/images/yurong1.jpg", "catename": "羽绒" },
        { "image": "http://www.wannengpa.com/images/waitao.jpg", "catename": "外套" },
        { "image": "http://www.wannengpa.com/images/maoyi.jpg", "catename": "毛衣" },
        { "image": "http://www.wannengpa.com/images/weiyi.jpg", "catename": "卫衣" },
        { "image": "http://www.wannengpa.com/images/picao.jpg", "catename": "皮草" },
        { "image": "http://www.wannengpa.com/images/niuzai.jpg", "catename": "牛仔裤" },
        { "image": "http://www.wannengpa.com/images/zhenzhi.jpg", "catename": "针织衫" },
      ]},
      {
        "nanzhuang":[
          { "image": "http://www.wannengpa.com/images/nwaitao.jpg", "catename": "外套" },
          { "image": "http://www.wannengpa.com/images/nyuyong.jpg", "catename": "羽绒服" },
          { "image": "http://www.wannengpa.com/images/nchenshan.jpg", "catename": "衬衣" },
          { "image": "http://www.wannengpa.com/images/nmaoyi.jpg", "catename": "毛衣" },
          { "image": "http://www.wannengpa.com/images/nweiyi.jpg", "catename": "卫衣" },
          { "image": "http://www.wannengpa.com/images/nxiuxian.jpg", "catename": "休闲裤" },
          { "image": "http://www.wannengpa.com/images/nniuzai.jpg", "catename": "牛仔裤" },
          { "image": "http://www.wannengpa.com/images/nxifu.jpg", "catename": "西服" },
          { "image": "http://www.wannengpa.com/images/npicao.jpg", "catename": "皮草" },
        ]
      },
      {
        "neiyi": [
          { "image": "http://www.wannengpa.com/images/nvnei.jpg", "catename": "内衣" },
          { "image": "http://www.wannengpa.com/images/nvnei.jpg", "catename": "内衣" },
          { "image": "http://www.wannengpa.com/images/nvnei.jpg", "catename": "内衣" },
          { "image": "http://www.wannengpa.com/images/nvnei1.jpg", "catename": "内衣" },
          { "image": "http://www.wannengpa.com/images/nvnei1.jpg", "catename": "内衣" },
          { "image": "http://www.wannengpa.com/images/nvnei1.jpg", "catename": "内衣" },
          { "image": "http://www.wannengpa.com/images/nvnei2.jpg", "catename": "内衣" },
          { "image": "http://www.wannengpa.com/images/nvnei2.jpg", "catename": "内衣" },
          { "image": "http://www.wannengpa.com/images/nvnei2.jpg", "catename": "内衣" },
        ]
      },
      {
        "nvxie": [
          { "image": "http://www.wannengpa.com/images/nanxie1.jpg", "catename": "女鞋" },
          { "image": "http://www.wannengpa.com/images/nanxie1.jpg", "catename": "女鞋" },
          { "image": "http://www.wannengpa.com/images/nanxie1.jpg", "catename": "女鞋" },
          { "image": "http://www.wannengpa.com/images/nanxie1.jpg", "catename": "女鞋" },
          { "image": "http://www.wannengpa.com/images/nanxie2.jpg", "catename": "女鞋" },
          { "image": "http://www.wannengpa.com/images/nanxie2.jpg", "catename": "女鞋" },
          { "image": "http://www.wannengpa.com/images/nanxie2.jpg", "catename": "女鞋" },
          { "image": "http://www.wannengpa.com/images/nanxie2.jpg", "catename": "女鞋" },
          { "image": "http://www.wannengpa.com/images/nanxie2.jpg", "catename": "女鞋" },
        ]
      },

      {
        "nanxie": [
          { "image": "http://www.wannengpa.com/images/nanxie1.jpg", "catename": "男鞋" },
          { "image": "http://www.wannengpa.com/images/nanxie1.jpg", "catename": "男鞋" },
          { "image": "http://www.wannengpa.com/images/nanxie1.jpg", "catename": "男鞋" },
          { "image": "http://www.wannengpa.com/images/nanxie1.jpg", "catename": "男鞋" },
          { "image": "http://www.wannengpa.com/images/nanxie2.jpg", "catename": "男鞋" },
          { "image": "http://www.wannengpa.com/images/nanxie2.jpg", "catename": "男鞋" },
          { "image": "http://www.wannengpa.com/images/nanxie2.jpg", "catename": "男鞋" },
          { "image": "http://www.wannengpa.com/images/nanxie2.jpg", "catename": "男鞋" },
          { "image": "http://www.wannengpa.com/images/nanxie2.jpg", "catename": "男鞋" },
        ]
      },

      {
        "pibao": [
          { "image": "http://www.wannengpa.com/images/bao.jpg", "catename": "箱包皮具" },
          { "image": "http://www.wannengpa.com/images/bao.jpg", "catename": "箱包皮具" },
          { "image": "http://www.wannengpa.com/images/bao.jpg", "catename": "箱包皮具" },
          { "image": "http://www.wannengpa.com/images/bao.jpg", "catename": "箱包皮具" },
          { "image": "http://www.wannengpa.com/images/bao.jpg", "catename": "箱包皮具" },
          { "image": "http://www.wannengpa.com/images/bao.jpg", "catename": "箱包皮具" },
          { "image": "http://www.wannengpa.com/images/bao.jpg", "catename": "箱包皮具" },
          { "image": "http://www.wannengpa.com/images/bao.jpg", "catename": "箱包皮具" },
          { "image": "http://www.wannengpa.com/images/bao.jpg", "catename": "箱包皮具" },
        ]
      },

      {
        "watch": [
          { "image": "http://www.wannengpa.com/images/peishi.jpg", "catename": "配饰" },
          { "image": "http://www.wannengpa.com/images/peishi.jpg", "catename": "配饰" },
          { "image": "http://www.wannengpa.com/images/peishi.jpg", "catename": "配饰" },
          { "image": "http://www.wannengpa.com/images/peishi1.jpg", "catename": "配饰" },
          { "image": "http://www.wannengpa.com/images/peishi1.jpg", "catename": "配饰" },
          { "image": "http://www.wannengpa.com/images/peishi1.jpg", "catename": "配饰" },
          { "image": "http://www.wannengpa.com/images/peishi2.jpg", "catename": "配饰" },
          { "image": "http://www.wannengpa.com/images/peishi2.jpg", "catename": "配饰" },
          { "image": "http://www.wannengpa.com/images/peishi2.jpg", "catename": "配饰" },
        ]
      },
      {
        "meizhuang": [
          { "image": "http://www.wannengpa.com/images/meizhuang.jpg", "catename": "美妆" },
          { "image": "http://www.wannengpa.com/images/meizhuang.jpg", "catename": "美妆" },
          { "image": "http://www.wannengpa.com/images/meizhuang3.jpg", "catename": "美妆" },
          { "image": "http://www.wannengpa.com/images/meizhuang1.jpg", "catename": "美妆" },
          { "image": "http://www.wannengpa.com/images/meizhuang1.jpg", "catename": "美妆" },
          { "image": "http://www.wannengpa.com/images/meizhuang1.jpg", "catename": "美妆" },
          { "image": "http://www.wannengpa.com/images/meizhuang2.jpg", "catename": "美妆" },
          { "image": "http://www.wannengpa.com/images/meizhuang2.jpg", "catename": "美妆" },
          { "image": "http://www.wannengpa.com/images/meizhuang3.jpg", "catename": "美妆" },
        ]
      },
      {
        "muying": [
          { "image": "http://www.wannengpa.com/images/muying.png", "catename": "母婴" },
          { "image": "http://www.wannengpa.com/images/muying.png", "catename": "母婴" },
          { "image": "http://www.wannengpa.com/images/muying.png", "catename": "母婴" },
          { "image": "http://www.wannengpa.com/images/muying1.png", "catename": "母婴" },
          { "image": "http://www.wannengpa.com/images/muying1.png", "catename": "母婴" },
          { "image": "http://www.wannengpa.com/images/muying1.png", "catename": "母婴" },
          { "image": "http://www.wannengpa.com/images/muying2.png", "catename": "母婴" },
          { "image": "http://www.wannengpa.com/images/muying2.png", "catename": "母婴" },
          { "image": "http://www.wannengpa.com/images/muying2.png", "catename": "母婴" },
        ]
      },
      {
        "run": [
          { "image": "http://www.wannengpa.com/images/nxiuxian.jpg", "catename": "运动" },
          { "image": "http://www.wannengpa.com/images/nxiuxian.jpg", "catename": "运动" },
          { "image": "http://www.wannengpa.com/images/nxiuxian.jpg", "catename": "运动" },
          { "image": "http://www.wannengpa.com/images/nxiuxian.jpg", "catename": "运动" },
          { "image": "http://www.wannengpa.com/images/nxiuxian.jpg", "catename": "运动" },
          { "image": "http://www.wannengpa.com/images/nxiuxian.jpg", "catename": "运动" },
          { "image": "http://www.wannengpa.com/images/nxiuxian.jpg", "catename": "运动" },
          { "image": "http://www.wannengpa.com/images/nxiuxian.jpg", "catename": "运动" },
          { "image": "http://www.wannengpa.com/images/nxiuxian.jpg", "catename": "运动" },
        ]
      },
      {
        "tel": [
          { "image": "http://www.wannengpa.com/images/shuma1.jpg", "catename": "手机数码" },
          { "image": "http://www.wannengpa.com/images/shuma1.jpg", "catename": "手机数码" },
          { "image": "http://www.wannengpa.com/images/shuma2.jpg", "catename": "手机数码" },
          { "image": "http://www.wannengpa.com/images/shuma2.jpg", "catename": "手机数码" },
          { "image": "http://www.wannengpa.com/images/shuma3.jpg", "catename": "手机数码" },
          { "image": "http://www.wannengpa.com/images/shuma3.jpg", "catename": "手机数码" },
          { "image": "http://www.wannengpa.com/images/shuma3.jpg", "catename": "手机数码" },
          { "image": "http://www.wannengpa.com/images/shuma.jpg", "catename": "手机数码" },
          { "image": "http://www.wannengpa.com/images/shuma.jpg", "catename": "手机数码" },
        ]
      },
      {
        "dianqi": [
          { "image": "http://www.wannengpa.com/images/jiadian.jpg", "catename": "电器" },
          { "image": "http://www.wannengpa.com/images/jiadian.jpg", "catename": "电器" },
          { "image": "http://www.wannengpa.com/images/jiadian.jpg", "catename": "电器" },
          { "image": "http://www.wannengpa.com/images/jiadian.jpg", "catename": "电器" },
          { "image": "http://www.wannengpa.com/images/jiadian.jpg", "catename": "电器" },
          { "image": "http://www.wannengpa.com/images/jiadian.jpg", "catename": "电器" },
          { "image": "http://www.wannengpa.com/images/jiadian.jpg", "catename": "电器" },
          { "image": "http://www.wannengpa.com/images/jiadian.jpg", "catename": "电器" },
          { "image": "http://www.wannengpa.com/images/jiadian.jpg", "catename": "电器" },
        ]
      },
      {
        "jiafang": [
          { "image": "http://www.wannengpa.com/images/jiafang1.jpg", "catename": "家纺" },
          { "image": "http://www.wannengpa.com/images/jiafang1.jpg", "catename": "家纺" },
          { "image": "http://www.wannengpa.com/images/jiafang4.jpg", "catename": "家纺" },
          { "image": "http://www.wannengpa.com/images/jiafang4.jpg", "catename": "家纺" },
          { "image": "http://www.wannengpa.com/images/jiafang3.jpg", "catename": "家纺" },
          { "image": "http://www.wannengpa.com/images/jiafang3.jpg", "catename": "家纺" },
          { "image": "http://www.wannengpa.com/images/jiafang3.jpg", "catename": "家纺" },
          { "image": "http://www.wannengpa.com/images/jiafang.jpg", "catename": "家纺" },
          { "image": "http://www.wannengpa.com/images/jiafang.jpg", "catename": "家纺" },
        ]
      },
    ],
    curIndex: 0,
    isScroll: false,
    toView: 'guowei',
    lists: [
      { "image": "http://www.wannengpa.com/images/lianyiquan.jpg", "catename": "连衣裙" },
      { "image": "http://www.wannengpa.com/images/dayi.jpg", "catename": "大衣" },
      { "image": "http://www.wannengpa.com/images/yurong1.jpg", "catename": "羽绒" },
      { "image": "http://www.wannengpa.com/images/waitao.jpg", "catename": "外套" },
      { "image": "http://www.wannengpa.com/images/maoyi.jpg", "catename": "毛衣" },
      { "image": "http://www.wannengpa.com/images/weiyi.jpg", "catename": "卫衣" },
      { "image": "http://www.wannengpa.com/images/picao.jpg", "catename": "皮草" },
      { "image": "http://www.wannengpa.com/images/niuzai.jpg", "catename": "牛仔裤" },
      { "image": "http://www.wannengpa.com/images/zhenzhi.jpg", "catename": "针织衫" },
    ]
  },
  onReady() {

  },
  switchTab(e) {
    let ids = e.target.dataset.id;
    let index = e.target.dataset.index;
    console.log(ids);
    console.log(this.data.detail[index][ids]);
    const self = this;
    
    this.setData({
      isScroll: true,
      lists: this.data.detail[index][ids]
    })
    setTimeout(function () {
      self.setData({
        toView: e.target.dataset.id,
        curIndex: e.target.dataset.index
      })
    }, 0)
    setTimeout(function () {
      self.setData({
        isScroll: false
      })
    }, 1)
  }

})