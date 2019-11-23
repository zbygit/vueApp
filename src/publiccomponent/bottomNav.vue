<template>
  <div id="bottom">
    <router-link :to="{path:'/home',query:{index:0}}" tag="div">
      <i></i> 首页
    </router-link>
    <router-link :to="{path:'/shopingcar',query:{index:1}}" tag="div">
      <i></i> 购物车
    </router-link>
    <router-link :to="{path:'/mine',query:{index:2}}" tag="div">
      <i></i> 我的
    </router-link>
  </div>
</template>

<script>
export default {
  name: "bottom",
  mounted() {
    this.setNav();
  },
  methods: {
    setNav() {
      var index = this.$route.query.index;
      $("#bottom>div")
        .eq(index)
        .addClass("currentPage")
        .siblings()
        .removeClass("currentPage");
    }
  }
};
</script>

<style lang="less" >
#bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: #ffffff;
  border-top: 1px solid #cccccc;
  display: flex;
  left: 0;
  div {
    flex: 1;
    height: 60px;
    display: flex;
    flex-direction: column;
    font-weight: 600;
    color: #cccccc;
    i {
      display: block;
      height: 26px;
      width: 100%;
      margin-top: 0.3rem;
    }
  }
  div.currentPage {
    color: #6fa3c4;
  }
  div:nth-of-type(1) > i {
    background: url("../assets/img/0_1.png") center 0 no-repeat;
    background-size: 26px auto;
  }
  div:nth-of-type(2) > i {
    background: url("../assets/img/1_1.png") center 0 no-repeat;
    background-size: 26px auto;
  }
  div:nth-of-type(3) > i {
    background: url("../assets/img/2_1.png") center 0 no-repeat;
    background-size: 26px auto;
  }
}
</style>
