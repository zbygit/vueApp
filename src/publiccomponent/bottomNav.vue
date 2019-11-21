<template>
  <div id="bottom">
    <router-link tag="div" to="/home">
      <i class="iconfont icon-zhuye"></i> 首页
    </router-link>
    <router-link tag="div" to="/shopingcar">
      <i class="iconfont icon-gouwuche"></i> 购物车
    </router-link>
    <router-link tag="div" to="/mine">
      <i class="iconfont icon-wode"></i> 我的
    </router-link>
  </div>
</template>

<script>
export default {
  name: "bottom"
};
</script>

<style lang="less" scoped>
#bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: #cccccc;
  display: flex;
  left: 0;
  div {
    flex: 1;
    height: 60px;
    display: flex;
    flex-direction: column;
    i {
      font-size: 26px;
      display: block;
    }
  }
}
</style>
