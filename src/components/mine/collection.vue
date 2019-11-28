<template>
  <div class="order">
    {{this.$route.query.bottomShow}}
    <topNav>
      <div slot="left">
        <img src="../../assets/img/back.png" alt srcset />
      </div>
      <div slot="center">我的收藏</div>
    </topNav>
    <orderNav class="orderNav" @setShowOrder="setShow"></orderNav>
    <div class="empty"></div>
    <div class="orderListArea">
      <orderList v-for="(item,index) in orderListArray" :key="index">
        <div slot="time">{{item.time}}</div>
        <div slot="orderStatus1" v-if="item.status==0">{{item.statusText}}</div>
        <div slot="orderStatus2" v-else>{{item.statusText}}</div>
        <img slot="goodsImg" @click="showOrderInfo(item.goodsId,item.status)" :src="item.goodsImg" />
        <div slot="goodsText">{{item.goodsName}}</div>
        <div slot="goodsColor">{{item.goodsColor}}</div>
        <span slot="goodsPrice">{{item.goodsPrice}}</span>
        <span slot="num">{{item.goodsNum}}</span>
        <span slot="nums">{{item.goodsNum}}</span>
        <span slot="tatal">{{item.goodsNum * item.goodsPrice }}</span>
        <span slot="money">{{item.money}}</span>
        <div slot="btns" v-if="item.status==0">
          <span class="falsed" slot="one">查看物流</span>
          <span class="conBtn" slot="two">评价</span>
        </div>
        <div slot="btns" v-if="item.status==1">
          <span class="falsed" slot="one">取消订单</span>
          <span class="conBtn" slot="two">立即付款</span>
        </div>
        <div slot="btns" v-if="item.status==2">
          <span class="falsed" slot="one">申请退款</span>
        </div>
        <div slot="btns" v-if="item.status==3">
          <span class="falsed" slot="one">查看物流</span>
          <span class="conBtn" slot="two">确认收货</span>
        </div>
        <div slot="btns" v-if="item.status==4">
          <span class="conBtn" slot="two">开票申请</span>
          <span class="conBtn" slot="three">评价</span>
        </div>
      </orderList>
    </div>
  </div>
</template>

<script>
import topNav from "../../publiccomponent/topNav"
import orderNav from "../../publiccomponent/orderNav"
import orderList from "../../components/mine/orderList"
import { getOrderList } from "../../baseapi"
export default {
  name: "order",
  components: { topNav, orderNav, orderList },
  data() {
    return { orderListArray: [] };
  },
  created() {
    this.getOrderLists();
  },
  methods: {
    // 设置其他项显示
    otherOrder(current) {
      getOrderList().then(res => {
        this.orderListArray = res.order.filter(function(item) {
          return item.status == current;
        });
      });
    },
    // 初始化显示及更改样式
    setShow(val) {
      let that = this;
      let orderNav = $(".orderNav>li");
      $(orderNav[+val])
        .addClass("currentLi")
        .siblings()
        .removeClass("currentLi");
      if (+val == 0) {
        getOrderList().then(res => {
          this.orderListArray = res.order;
        });
      } else {
        that.otherOrder(+val);
      }
    },
    getOrderLists() {
      getOrderList().then(res => {
         this.orderListArray = res.order;
      });
    },
    showOrderInfo(goodsId,status){
      this.$router.push({path:"/orderInfo",query:{goodsId,status}})
    }
  }
};
</script>
<style lang="less" src="../../assets/css/order.less"></style> 
