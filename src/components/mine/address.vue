<template>
  <div class="order">
    {{this.$route.query.bottomShow}}
    <topNav>
      <div slot="left">
        <img src="../../assets/img/back.png" alt srcset />
      </div>
      <div slot="center">我的地址</div>
      <div slot="right">
        <img @click="addAddress" src="../../assets/img/add.png" alt srcset />
      </div>
    </topNav>
    <div class="infoContent">
      <div class="noHas" v-if="hasAddress">暂无地址相关信息</div>
      <div class="topContent" :class="'defaultItem'+item.default" v-for="(item,index) of AddressCookie" :key="index">
        <div class="line">
          <div class="left">{{item.user}}</div>
          <div class="right">{{item.tel}}</div>
        </div>
        <div class="line">
          <div class="address">{{ item.area+item.addressinfo}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topNav from "../../publiccomponent/topNav";
import Jcookie from "js-cookie";

export default {
  name: "order",
  components: { topNav },
  data() {
    return {
      AddressCookie: [],
      hasAddress: false
    };
  },
  created() {
    this.getAddressCookie();
  },
  methods: {
    getAddressCookie() {
      let AddressCookie = Jcookie.get("address");
      AddressCookie =
        AddressCookie == undefined ? [] : JSON.parse(AddressCookie);
      this.AddressCookie = AddressCookie;
      this.hasAddress = AddressCookie.length == 0 ? true : false;
    },
    addAddress(){
        this.$router.push("/addAddress");
    }
  }
};
</script>
<style lang="less" src="../../assets/css/order.less"></style> 
