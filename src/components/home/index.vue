<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   <input type="text" placeholder="输入您要1搜索的宝贝">
    <carrousel :swiperSlides="bannerlist"></carrousel>
    <!--<top>
  
    home
   </top> -->
  </div>
  
</template>
<script>
import carrousel from '../../publiccomponent/swiper'
// import Top from '../base/Top'
import {getBanner,getBanners} from '../../baseapi'
export default {
  name: 'home',
  data () {
    return {
      bannerlist:[]
    }
  },
  components:{
    carrousel,
    // Top
  },
  created(){
     this.getb();
  },
  methods:{
    getb(){
        return getBanner().then((res)=>{
          this.bannerlist=res.data.banner;
          console.log(this.bannerlist);
          
      })
    },

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

