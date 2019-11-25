<template>
  <div>
    <top>
      <div slot="center">{{msg}}</div>
      <div slot="left">
        <img src="../../assets/img/back.png" />
      </div>
    </top>
    <carrousel class="swiperbox" :swiperSlides="currentGoods.goodsBanner"></carrousel>
    <div class="con">
      <p class="names">{{currentGoods.goodsName}}</p>
      <p class="price">
        <span class="new">￥{{currentGoods.goodsPriceNew}}</span>
        <del class="old">￥{{currentGoods.goodsPriceOld}}</del>
      </p>

      <div class="speci">
        <span class="speciTitle">规格</span>
        <span class="currentSpec">
          标准
          <b>&gt;</b>
        </span>
      </div>
    </div>
    <div class="empty"></div>
    <ul class="info">
      <li class="active">详情</li>
      <li>评价</li>
      <li>售后</li>
    </ul>
    <div id="content">{{content}}</div>
    <div id="bottom">
      <span>客服</span>
      <span>收藏</span>
      <span>加入购物车</span>
      <span>立即购买</span>
    </div>
  </div>
</template>
<script>
import top from "../../publiccomponent/topNav";
import carrousel from "../../publiccomponent/swiper";
import { getHome } from "../../baseapi";
export default {
  name: "detail",
  data() {
    return {
      msg: "商品详情",
      currentGoods: [],
      content: ""
    };
  },
  components: {
    top,
    carrousel
  },
  created() {
    this.xiang();
  },
  mounted() {
    this.getDom();
  },
  methods: {
    xiang() {
      return getHome().then(res => {
        this.currentGoods = res.home[this.$route.query.goodsId];
        this.content = this.currentGoods.detail;
        console.log(this.currentGoods);
      });
    },

    getDom() {
      let that = this;
      let li = $(".info li");
      for (let i = 0; i < li.length; i++) {
        $(li[i]).click(function() {
          $(this)
            .addClass("active")
            .siblings()
            .removeClass("active");
          switch (i) {
            case 0:
              that.content = that.currentGoods.detail;
              break;
            case 1:
              that.content = that.currentGoods.eval;
              break;
            case 2:
              that.content = that.currentGoods.sale;
              break;
            default:
              break;
          }
        });
      }
    }
  }
};
</script>
<style lang="less" scoped>
.swiperbox img {
  height: 130px;
  width: 100%;
}
//商品顶部信息
.con {
  // background: red;
  float: left;
  width: calc(100% - 1rem);
  margin: 0 0.5rem;

  .names {
    float: left;
    font-size: 1.6rem;
    color: gray;
    width: 100%;
    text-align: left;
    line-height: 2rem;
  }
  .price {
    float: left;
    font-size: 2rem;
    color: gray;
    width: 100%;
    text-align: left;
    line-height: 3rem;
    border-bottom: 1px solid #cccccc;
    .new {
      margin-right: 1.3rem;
    }
  }
  .speci {
    float: left;
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    .speciTitle {
      float: left;
    }
    .currentSpec {
      float: right;
    }
  }
}
.empty {
  float: left;
  height: 1rem;
  width: 100%;
  background: #cccccc;
}
// 商品详情/评价/售后
.info {
  float: left;
  width: 100%;
  list-style: none;
  li {
    float: left;
    width: 33.3333%;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
  }
  li.active {
    color: #ddccaa;
  }
}
#bottom {
  border: 1px solid gray;
  width: 100%;
  height: 5rem;
  position: fixed;
  bottom: 0;
  span{
    border:1px solid ghostwhite;
    background-color: gainsboro;
    display: inline-block;
    width: 8rem;
    flex:1;
    
   
     

  }
}
</style> 