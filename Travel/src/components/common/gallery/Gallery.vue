<template>
  <div class="gallery" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in imgs" :key="index">
          <img :src="item" class="gallery-img"/>
        </swiper-slide>
        <!--小圆点-->
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    imgs:{
      type:Array,
      default(){
        return [];
      }
    }
  },
  data(){
    return{
      swiperOption:{
        pagination: '.swiper-pagination',
        paginationType:'fraction',
        //DOM结构发生变化时自动刷新，解决显示时问题
        observeParents:true,
        observer:true
      }
    }
  },
  methods:{
    handleGalleryClick(){
      this.$emit('close');
    }
  }
}
</script>

<style lang="scss" scoped>
.gallery /deep/ .swiper-container{
  overflow: inherit;
}
.gallery{
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background: #000;
  .wrapper{
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    .gallery-img{
      width: 100%;
    }
    .swiper-pagination{
      bottom: -1rem;
      color: #fff;
    }
  }
}
</style>
