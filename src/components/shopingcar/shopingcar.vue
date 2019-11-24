<template>
  <div class="hello">
    <topNav>
      <div slot="center">{{pageMsg}}</div>
    </topNav>
  <div slot="bottom"><bottom></bottom></div>
  </div>
</template>

<script>
import topNav from "../../publiccomponent/topNav"
import bottom from "../../publiccomponent/bottomNav"
export default {
  name: "shopingcar",
  data() {
    return {
      pageMsg: "购物车"
    };
  },
  components: {
    topNav,bottom
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
