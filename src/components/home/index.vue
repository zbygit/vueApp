<template>
  <div class="hello">
    <topNav>
    <div slot="center">{{pageMsg}}</div>
  </topNav>
  
   <input type="text" placeholder="输入您要1搜索的宝贝">
    <carrousel :swiperSlides="bannerlist"></carrousel>
  </div>
  
</template>
<script>
import topNav from '../../publiccomponent/topNav'
import carrousel from '../../publiccomponent/swiper'
import {getBanner,getBanners} from '../../baseapi'
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
input{
  width: 100%;
  height: 30px;
}
</style>

