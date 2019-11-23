<template>
  <div class="hello">
    <topNav>
      <div slot="center">{{pageMsg}}</div>
    </topNav>
  </div>
</template>

<script>
import topNav from "../../publiccomponent/topNav";

export default {
  name: "shopingcar",
  data() {
    return {
      pageMsg: "购物车"
    };
  },
  components: {
    topNav
  },

  mounted() {
    this.setNav();
  },
  methods: {
    setNav() {
      var index = this.$route.query.index;
      $(`#bottom>div`)
        .eq(index)
        .css("color", "#6FA3C4")
        .siblings()
        .css("color", "#cccccc");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
</style>
