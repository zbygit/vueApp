<template>
  <div class="hello">
    <topNav>
    <div slot="center">{{pageMsg}}</div>
  </topNav>
  </div>
</template>

<script>
import topNav from '../../publiccomponent/topNav'
export default {
  name: 'home',
  data () {
    return {
      pageMsg: '首页'
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
