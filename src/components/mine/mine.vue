<template>
  <div class="hello">
    <topNav>
      <div slot="center">{{pageMsg}}</div>
     <div slot="left">返回</div>
    </topNav>

  </div>
</template>

<script>
import topNav from '../../publiccomponent/topNav'
export default {
  name: 'mine',
  data () {
    return {
      pageMsg: '我的'
    }
  },
  components:{
    topNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
