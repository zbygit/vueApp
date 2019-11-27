<template>
  <div class="order">
    {{this.$route.query.bottomShow}}
    <topNav>
      <div slot="left">
        <img src="../../assets/img/back.png" alt srcset />
      </div>
      <div slot="center">订单详情</div>
    </topNav>
    <div class="infoContent">
      <!-- 订单信息 -->
      <div class="topContent">
        <div class="line">
          <div class="left">
            订单号:
            <span>{{currentOrder.orderCode}}</span>
          </div>
          <div class="right">{{status}}</div>
        </div>
      </div>
      <!-- 物流信息 -->
      <div class="topContent">
        <div class="line">
          <div class="left" v-if="currentOrder.logistics">
            {{currentOrder.logistics.names}}:
            <span>{{currentOrder.logistics.code}}</span>
          </div>
          <div class="right">查物流</div>
        </div>
        <div class="line">
          <div class="left" v-if="currentOrder.user">{{currentOrder.user.userName}}</div>
          <div class="right" v-if="currentOrder.user">{{currentOrder.user.tel}}</div>
        </div>
        <div class="line" v-if="currentOrder.user">
          <div class="address">{{currentOrder.user.address}}</div>
        </div>
      </div>
      <div class="goodsInfo">
        <img :src="currentOrder.goodsImg" alt srcset />
        <div class="goodText">
          <p class="text">{{currentOrder.goodsName}}</p>
          <p class="color">{{currentOrder.goodsColor}}</p>
        </div>
        <div class="goodsTatal">
          <p class="text">￥&nbsp;{{currentOrder.goodsPrice}}</p>
          <p class="color">×&nbsp;{{currentOrder.goodsNum}}</p>
        </div>
      </div>
      <!-- 结算 -->
      <div class="calc">
        <p class="calcInfo">
          共
          <span>{{currentOrder.goodsNum}}</span>件商品，合计:&nbsp;
          <span>{{currentOrder.goodsNum * currentOrder.goodsPrice + currentOrder.money}}</span>(含运费￥
          <span>{{currentOrder.money}}</span>)
        </p>
        <div class="btns">
          <div>
            <span class="falsed">查看物流</span>
            <span class="conBtn">申请退货</span>
            <span class="conBtn">评价</span>
          </div>
        </div>
      </div>
      <div class="times" v-if="currentOrder.order">
        <p>下单时间:&nbsp;{{currentOrder.order.downTime}}</p>
        <p>支付时间:&nbsp;{{currentOrder.order.payTime}}</p>
        <p>发货时间:&nbsp;{{currentOrder.order.sendTime}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import topNav from "../../publiccomponent/topNav";

import { getOrderList } from "../../baseapi";
export default {
  name: "order",
  components: { topNav },
  data() {
    return {
      currentOrder: [],
      status
    };
  },
  created() {
    this.getOrderLists();
    this.setText();
  },
  methods: {
    getOrderLists() {
      getOrderList().then(res => {
        this.currentOrder = res.order[this.$route.query.goodsId];
      });
    },
    setText() {
      let status = this.$route.query.status;
      this.status = status == 0 || status == 4 ? "交易成功" : "交易进行中";
    }
  }
};
</script>
<style lang="less" src="../../assets/css/order.less"></style> 
