<template>
  <div>
    <top>
      <div slot="center">{{msg}}</div>
      <div slot="left">返回</div>
      <div slot="right">{{this.$route.query.index}}</div>
    </top>
    <carrousel :swiperSlides="xiangqing"></carrousel>
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
        this.xiangqing = res.xiang;
      });
    }
  }
};
</script>
<style lang="less" scoped>
img{
  height: 100px;
  width: 100%;
}
  
</style>