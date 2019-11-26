<template>
  <div class="order">
    {{this.$route.query.bottomShow}}
    <topNav>
      <div slot="left">
        <img src="../../assets/img/back.png" alt srcset />
      </div>
      <div slot="center">订单详情</div>
    </topNav>
 
  </div>
</template>

<script>
import topNav from "../../publiccomponent/topNav"

import { getOrderList } from "../../baseapi"
export default {
  name: "order",
  components: { topNav },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style lang="less" src="../../assets/css/order.less"></style> 
