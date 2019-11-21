<template>
  <div class="hello">
  
   <input type="text" placeholder="输入您要1搜索的宝贝">
    <carrousel :swiperSlides="bannerlist"></carrousel>
  </div>
  
</template>
<script>
import carrousel from '../../publiccomponent/swiper'
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
          this.bannerlist=res.banner;
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

