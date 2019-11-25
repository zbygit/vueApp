<template>
  <div class="order">
    {{this.$route.query.bottomShow}}
    <topNav>
      <div slot="left">
        <img src="../../assets/img/back.png" alt srcset />
      </div>
      <div slot="center">全部订单</div>
    </topNav>
    <orderNav></orderNav>
    <div class="empty"></div>

    <orderList>
      <div slot="time">2011-21-11</div>
      <div slot="orderStatus1" v-if="current==0">已完成</div>
      <div slot="orderStatus2" v-else-if="current==1">待付款</div>
      <div slot="orderStatus2" v-else-if="current==2">待收款</div>
      <div slot="orderStatus2" v-else-if="current==3">待收货</div>
      <div slot="orderStatus1" v-else>待评价</div>
      <img slot="goodsImg" src="../../assets/img/goods.jpg" />
      <div slot="goodsText">121312312312312312312312313</div>
      <div slot="goodsColor">312313</div>
      <span slot="goodsPrice">343</span>
      <span slot="num">23</span>
      <span slot="nums">13</span>
      <span slot="tatal">24</span>
      <span slot="money">343</span>
      <div slot="btns" v-if="current==0">
        <span class="falsed" slot="one">查看物流</span>
        <span class="conBtn" slot="two">评价</span>
      </div>
      <div slot="btns" v-if="current==1">
        <span class="falsed" slot="one">取消订单</span>
        <span class="conBtn" slot="two">立即付款</span>
      </div>
      <div slot="btns" v-if="current==2">
        <span class="falsed" slot="one">申请退款</span>
      </div>
      <div slot="btns" v-if="current==3">
        <span class="falsed" slot="one">查看物流</span>
        <span class="conBtn" slot="two">确认收货</span>
      </div>
      <div slot="btns" v-if="current==4">
        <span class="conBtn" slot="two">开票申请</span>
        <span class="conBtn" slot="three">评价</span>
      </div>
    </orderList>
  </div>
</template>

<script>
import topNav from "../../publiccomponent/topNav"
import orderNav from "../../publiccomponent/orderNav"
import orderList from "../../components/mine/orderList"
import { getBanner, getHome } from "../../baseapi"
export default {
  name: "order",
  components: { topNav, orderNav, orderList },
  data() {
    return { current: 0 };
  },
  mounted() {
    this.getDom();
  },
  methods: {
    getDom() {
      let orderNav = $(".orderNav>li");
      let that = this;
      for (let index = 0; index < orderNav.length; index++) {
        $(orderNav[index]).click(function() {
          that.current = index;
          $(this)
            .addClass("currentLi")
            .siblings()
            .removeClass("currentLi");




        });
      }
    }
  }
};
</script>
<style lang="less" src="../../assets/css/order.less"></style> 
