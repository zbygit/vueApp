<template>
  <div class="hello">
    <topNav>
      <div slot="center">{{pageMsg}}</div>
    </topNav>
    <input type="text" placeholder="输入您要搜索的宝贝" />
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
    <div id="con">
      <ul>
        <li v-for="(item,index) of hotlist" :key="index">
          <img @click="detail(index)" :src="item.bookImg" alt />
          <span>{{item.bookName}}</span>
          <span>￥{{item.bookPrice}}</span>
          <span>{{item.bookInfo}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import topNav from "../../publiccomponent/topNav";
import carrousel from "../../publiccomponent/swiper";
import { getBanner, gethotlist } from "../../baseapi";

export default {
  name: "home",
  data() {
    return {
      pageMsg: "首页",
      bannerlist: [],
      hotlist: []
    };
  },
  components: {
    carrousel,
    topNav
  },
  created() {
    this.banner();
    this.hotlists();
  },
  methods: {
    banner() {
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
      this.$router.push({ path: "/detail", query: { index: index } });
    }
  }
};
</script>
<style lang="less" scoped>
input {
  border: 1px solid gray;
  width: 100%;
  height: 45px;
  background: url("../../assets/img/search.svg") 0 no-repeat;
  background-size: 6%;
  text-indent: 2em;
}
#pig {
  width: 100%;
  height: 5rem;
  ul li {
    background: url("../../assets/img/video.svg") center 0 no-repeat;
    float: left;
    width: 25%;
    height: 4rem;
    line-height: 5rem;
    list-style: none;
    background-size: 30px;
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

