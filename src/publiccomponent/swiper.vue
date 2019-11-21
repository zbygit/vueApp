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
          pagination:'.swiper-pagination'
        }
      }
    }
  }
</script>
<style lang="less" scoped>
img{
  width: 100%;
}
</style>