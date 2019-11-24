<template>
  <div id="top">
    <div class="left" @click="goBack" >
      <slot name="left" ></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "top",
  methods:
  {
    goBack(){
      this.$router.back();
    }
  }
}
</script>

<style lang="less" scoped>
#top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background: #ff6600;
  display: flex;
  div {
    line-height: 40px;
    color: #ffffff;
  
  }
  div:nth-of-type(1) {
    width: 20%;
    height: 40px;
      div{
        width: 100%;
    }
  }
  div:nth-of-type(2) {
    width: 60%;
    background: #ff6600;
    height: 40px;
    font-weight: 900;
    text-align: center;
      div{
        width: 100%;
    }
  }
  div:nth-of-type(3) {
    width: 20%;
    height: 40px;
      div{
        width: 100%;
    }
  }
}
</style>
