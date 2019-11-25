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
    <orderList v-for="(item,index) of orderListArray" :key="index">
      <div slot="time">{{item.time}}</div>
      <div slot="orderStatus1" v-if="current==0">已完成</div>
      <div slot="orderStatus2" v-else-if="current==1">待付款</div>
      <div slot="orderStatus2" v-else-if="current==2">待收款</div>
      <div slot="orderStatus2" v-else-if="current==3">待收货</div>
      <div slot="orderStatus1" v-else>待评价</div>

      <img slot="goodsImg" :src="item.goodsImg" />
      <div slot="goodsText">{{item.goodsName}}</div>
      <div slot="goodsColor">{{item.goodsColor}}</div>
      <span slot="goodsPrice">{{item.goodsPrice}}</span>
      <span slot="num">{{item.goodsNum}}</span>
      <span slot="nums">{{item.goodsNum}}</span>
      <span slot="tatal">{{item.goodsNum * item.goodsPrice }}</span>
      <span slot="money">{{item.money}}</span>
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
import topNav from "../../publiccomponent/topNav";
import orderNav from "../../publiccomponent/orderNav";
import orderList from "../../components/mine/orderList";
import { getOrderList } from "../../baseapi";
import k from "js-cookie";
export default {
  name: "order",
  components: { topNav, orderNav, orderList },
  data() {
    return { current: 0, orderListArray: [] };
  },
  created() {
    this.getOrderList();
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

        switch (index) {
          case 0:
            getOrderList().then(res => {
              this.orderListArray = res.order;
            });
            break;
      case 1:
            getOrderList().then(res => {
              this.orderListArray = res.order.filter(function (item) {
                return item.status != 1;
              });
            });
            break;
          default:
            break;
        }
      }
    },
    getOrderList() {
      getOrderList().then(res => {
        this.orderListArray = res.order;
      });
    }
  }
};
</script>
<style lang="less" src="../../assets/css/order.less"></style> 
