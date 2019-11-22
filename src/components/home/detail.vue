<template>
  <div>
    <top>
       <div slot="center">{{msg}}</div>
       <div slot="left">返回</div>
       <div slot="right">{{this.$route.query.index}}</div>
    </top>
  </div>
</template>
<script>
import top from "../../publiccomponent/topNav"
export default {
  name: "detail",
  data(){
    return {
      msg:"商品详情"
    }
  },
  components: {
    top
  }
}
</script>
<style scoped>
</style>