<template>
  <ul class="orderNav">
    <li class="currentLi">
      <slot name="one">全部</slot>
    </li>
    <li>
      <slot name="two">待付款</slot>
    </li>
    <li>
      <slot name="three">待发货</slot>
    </li>
    <li>
      <slot name="four">待收货</slot>
    </li>
    <li>
      <slot name="five">待评价</slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: "orderNav"
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