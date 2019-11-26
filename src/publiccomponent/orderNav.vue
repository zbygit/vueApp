<template>
  <ul class="orderNav"@click="orderList($event)">
    <li class="currentLi"index="0" >
      <slot name="one">全部</slot>
    </li>
    <li index="1">
      <slot name="two" >待付款</slot>
    </li>
    <li index="2">
      <slot name="three">待发货</slot>
    </li>
    <li index="3">
      <slot name="four">待收货</slot>
    </li>
    <li index="4">
      <slot name="five">待评价</slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: "orderNav",
  methods: {
    orderList(e){
      // console.log(e.target.index);
      // console.log();
      // var index =$(".orderNav").target
       this.$emit('setShowOrder',$(e.target).attr("index"));
    }
  },
};
</script>

<style lang="less" scoped>
.orderNav {
  width: 100%;
  height: 3rem;
  li {
    float: left;
    width: 20%;
    height: 100%;
    line-height: 3rem;
    list-style: none;
    border-right: 1px solid #cccccc;
    border-left: 1px solid #cccccc;
    margin: -1px;
  }
  li:last-of-type {
    border-right: none;
  }
  li.currentLi {
    color: #9bd2f3 !important;
  }
}
</style>