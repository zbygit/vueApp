<template>
  <div>
    <top>
      <div slot="center">{{msg}}</div>
      <div slot="left"> <img src="../../assets/img/back.png" alt srcset /></div>
      <div slot="right">{{this.$route.query.id}}</div>
    </top>
    <carrousel class="swiperbox" :swiperSlides="xiangqing"></carrousel>
  </div>
</template>
<script>
import top from "../../publiccomponent/topNav";
import carrousel from "../../publiccomponent/swiper";
import { getdetail } from "../../baseapi";
export default {
  name: "detail",
  data() {
    return {
      msg: "商品详情",
      xiangqing: []
    };
  },
  components: {
    top,
    carrousel
  },
  created() {
    this.xiang();
  },
  methods: {
    xiang() {
      return getdetail().then(res => {
        console.log(res.xiang);
        
        this.xiangqing = res.xiang;
      });
    }
  }
};
</script>
<style lang="less" scoped>
.swiperbox img{
  height: 100px;
  width: 100%;
}
  
</style>