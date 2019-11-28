<template>
  <div class="order">
    {{this.$route.query.bottomShow}}
    <topNav>
      <div slot="left">
        <img src="../../assets/img/back.png" alt srcset />
      </div>
      <div slot="center">我的收藏</div>
    </topNav>
    <div class="doing">
      <input type="checkbox" name id="chooseAll" />
      <span id="edit">编辑</span>
    </div>
    <ul class="collList">
      <li v-for="(item,index) of collList" :key="index">
        <img :src="item.goodsIconHome" alt />
        <p class="name">{{item.goodsName}}</p>
        <p class="price">
          <span class="currentPrice">{{item.goodsPriceNew}}</span>
          <span class="oldPrice">{{item.goodsPriceOld}}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import topNav from "../../publiccomponent/topNav";
import Cookies from "js-cookie";
import { getHome } from "../../baseapi";
export default {
  name: "order",
  components: { topNav },
  data() {
    return {
      collList: []
    };
  },
  created() {
    this.getCount();
  },
  methods: {
    getCount() {
      let countCookie = Cookies.get("count");
      let countCookieArray =
        countCookie == undefined ? [] : JSON.parse(countCookie);
      console.log(countCookieArray);
      return getHome().then(res => {
        let collLists = res.home;
        for (let i = 0; i < countCookieArray.length; i++) {
          for (let j = 0; j < collLists.length; j++) {
            if (collLists[j].goodsId == countCookieArray[i]) {
              this.collList.push(collLists[j]);
            }
          }
        }
      });
    }
  }
};
</script>
<style lang="less" src="../../assets/css/coll.less"></style> 
