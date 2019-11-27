<template>
  <div id="top">
    <div class="left" @click="goBack">
      <slot name="left"></slot>
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
  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style lang="less" scoped>
#top {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 4rem;
  font-size: 1.8rem;
  background: #5485a2;
  display: flex;

  div {
    line-height: 4rem;
    color: #ffffff;
    height: 4rem;
  }
  div:nth-of-type(1) {
    width: 20%;
    div {
      width: 100%;
      img {
        vertical-align: middle;
      }
    }
  }
  div:nth-of-type(2) {
    width: 60%;
    font-weight: 900;
    text-align: center;
    div {
      width: 100%;
    }
  }
  div:nth-of-type(3) {
    width: 20%;

    div {
      width: 100%;
      img{
          vertical-align: middle;
      }
    }
  }
}
</style>
