<template>
  <div class="hello">
    <topNav>
      <div slot="center">{{pageMsg}}</div>
    </topNav>
    <div class="search">
      <input type="text" placeholder="输入您要搜索的宝贝" class="ipt" />
      <span class="msg"></span>
    </div>

    <carrousel :swiperSlides="bannerlist"></carrousel>
    <div id="pig">
      <ul>
        <li>菲茨</li>
        <li>香奈儿</li>
        <li>服装</li>
        <li>其他</li>
      </ul>
    </div>
    <div class="bottom">
      <span>——— 精选推荐 ———</span>
    </div>
      <ul class="collList">
      <li v-for="(item,index) of hotlist">
        <img  @click="detail(item.goodsId)" :src="item.goodsIconHome" alt />
        <p class="name">{{item.goodsName}}</p>
        <p class="price">
          <span class="currentPrice">{{item.goodsPriceNew}}</span>
          <span class="oldPrice">{{item.goodsPriceOld}}</span>
        </p>
      </li>
    </ul>
    <div slot="bottom">
      <bottom></bottom>
    </div>
  </div>
</template>
<script>
import topNav from "../../publiccomponent/topNav";
import bottom from "../../publiccomponent/bottomNav";
import carrousel from "../../publiccomponent/swiper";
import { getBanner, getHome } from "../../baseapi";

export default {
  name: "home",
  data() {
    return {
      pageMsg: "奈商城",
      bannerlist: [],
      hotlist: []
    };
  },
  components: {
    carrousel,
    topNav,
    bottom
  },
  created() {
    this.getb();
    this.setNav();
    this.hotlists();
  },
  methods: {
    setNav() {
      var index = this.$route.query.index;
      $(`#bottom>div`)
        .eq(index)
        .css("color", "#6FA3C4")
        .siblings()
        .css("color", "#cccccc");
    },
    // 获取轮播图
    getb() {
      return getBanner().then(res => {
        this.bannerlist = res.banner;
      });
    },
    // 获取商品数据
    hotlists() {
      return getHome().then(res => {
        this.hotlist = res.home;
      });
    },
    detail(index) {
      // 使用this.$router.push()进行路由跳转
      // 使用jquery传递参数 ，参数已键值对形式传递（query传参页面刷新参数不会消失）
      this.$router.push({ path: "/detail", query: { goodsId: index } });
    }
  }
};
</script>
<style lang="less" scoped>
.search {
  height: 3rem;
  margin: 0 1rem;
  width: calc(100% - 2rem);

  .ipt {
    float: left;
    height: 3rem;
    line-height: 3rem;
    border: none;
    outline: none;
    width: calc(100% - 4rem);
    background: url("../../assets/img/search.png") 1rem center no-repeat;
    background-size: 1.5rem;
    text-indent: 3rem;
    border-radius: 5px;
  }
  .msg {
    float: right;
    border-left: 1px solid #cccccc;
    width: 3rem;
    margin-left: -1px;
    height: 100%;
    background: url("../../assets/img/home_msg.png") center no-repeat;
    background-size: 2rem;
  }
}

#pig {
  width: 100%;
  height: 5rem;
  ul {
    float: left;
    width: 100%;
    height: 5rem;
    line-height: 5rem;
    list-style: none;

    li {
      float: left;
      width: 25%;
      height: 5rem;
      text-align: center;
      line-height: 8rem;
    }
    li:nth-of-type(1) {
      background: url("../../assets/img/home_Item1.png") center 0 no-repeat;
      background-size: 30px;
    }
    li:nth-of-type(2) {
      background: url("../../assets/img/home_Item2.png") center 0 no-repeat;
      background-size: 30px;
    }
    li:nth-of-type(3) {
      background: url("../../assets/img/home_Item3.png") center 0 no-repeat;
      background-size: 30px;
    }
    li:nth-of-type(4) {
      background: url("../../assets/img/home_Item4.png") center 0 no-repeat;
      background-size: 30px;
    }
  }
}
.bottom {
  width: 100%;
  height: 50px;

  span {
    line-height: 50px;
    color: grey;
  }
}

.collList{
    width: calc(100% - 2rem);
    margin-left: 1rem;
    margin-bottom: 7rem;
    float: left;
    list-style: none;
    li{
        float: left;
        width: 50%;
        border: 1px solid #cccccc;
        margin: -1px;
        text-align: left;
        img{
            width: 15rem;
            height: 15rem;
            margin-top: 1rem;
            vertical-align: middle;
            margin-left: calc((100% - 15rem)/2);
        }
        .name{
            width: calc(100% -calc(100% - 15rem));
            font-weight: 600;
            font-size:1.6rem ;
            height: 2rem;
            line-height: 2rem;
            margin-left: calc((100% - 15rem)/2);
            overflow: hidden;
            text-overflow: ellipsis;
            word-wrap: normal;
        }
        .price{
            width: 100%;       
            line-height: 2rem;
            margin-left: calc((100% - 15rem)/2);
            .currentPrice{
                font-size:1.8rem ;
                font-weight: 600;
            }
            .oldPrice{
                font-size:1.4rem ;
                font-weight: 400;margin-left: 1rem;
               text-decoration: line-through;
               color: #cccccc;
            }
        }
    }
}
#con ul {
  display: inline-block;
  width: 100%;
  li {
    display: inline-block;
    width: 50%;
    height: 8rem;
    img {
      width: 10rem;
      height: 10rem;
    }
    span {
      font-size: 10px;
      display: inline-block;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      word-wrap: normal;
      height: 2rem;
    }
  }
}
</style>

