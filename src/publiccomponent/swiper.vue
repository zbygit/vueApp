<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img :src="slide.src"/>
     </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    props:['swiperSlides'],//this.swiperSlides
    data() {
      return {
        swiperOption: {
          pagination:'.swiper-pagination',
          loop:true,
          autoplay:1500
        }
      }
    }
  }
</script>
<style lang="less" scoped>
img{
  width: 100%;
  height: 160px;

}
</style>