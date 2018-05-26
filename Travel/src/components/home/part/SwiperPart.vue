<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item in swiperList" :key="item.id"><img :src="item.imgUrl" alt=""></swiper-slide>
      <!--小圆点-->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  props:{
    swiperList:Array
  },
  data(){
    return{
      swiperOption:{
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      }
    }
  },
  computed:{
    showSwiper(){
      return this.swiperList.length;
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper /deep/ .swiper-pagination-bullet-active{
  background: #fff!important;
}
.wrapper{
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  img{
    width: 100%;
    height: 112px;
  }
}
</style>
