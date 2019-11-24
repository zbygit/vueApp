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
    <ul>
      <li v-for="(item,index) of hotlist" :key="index">
        <img @click="detail(item.bookId)" :src="item.bookImg" alt />
        <span>{{item.bookName}}</span>
        <span>{{item.bookPrice}}</span>
        <span>{{item.bookInfo}}</span>
      </li>
    </ul>
    <div slot="bottom"><bottom></bottom></div>
  </div>
</template>
<script>
import topNav from "../../publiccomponent/topNav";
import bottom from "../../publiccomponent/bottomNav"
import carrousel from "../../publiccomponent/swiper";
import { getBanner, gethotlist } from "../../baseapi";

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
    getb() {
      return getBanner().then(res => {
        this.bannerlist = res.banner;
      });
    },
    hotlists() {
      return gethotlist().then(res => {
        this.hotlist = res.hotlist;
      });
    },
    detail(index) {
      this.$router.push({ path: "/detail", query: { id: index } });
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

