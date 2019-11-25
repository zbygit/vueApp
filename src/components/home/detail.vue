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
      <p >{{currentGoods.goodsName}}</p>
      <p >￥{{currentGoods.goodsPriceNew}}</p>
      <del class="right">￥{{currentGoods.goodsPriceOld}}</del>
    </div>
    <ul class="info">
      <li class="active">详情</li>
      <li>评价</li>
      <li>售后</li>
    </ul>
    <div id="content">{{content}}</div>
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
        console.log(this.currentGoods);
      });
    },
    getDom() {
      let that = this;
      let li = $(".info li");
      for (let i = 0; i < li.length; i++) {
        $(li[i]).click(function() {
          console.log(that.currentGoods);
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

.con{
  // background: red;
  float: left;
  width: 100%;
  height: 12rem;
  .right{
    font-size: 14px;
    color: gray;
  }
}
.info {
  width: 100%;
  float: left;
  list-style: none;
  li {
    float: left;
    width: 33.3333%;
    height: 3rem;
  }
  li.active {
    color: #ddccaa;
  }
}
</style> 