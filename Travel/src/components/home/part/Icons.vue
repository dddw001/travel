<template>
  <div class="icons" :options="swiperOption">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl">
          </div>
          <p class="text">{{item.desc}}</p>
      </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  props:{
    iconList:Array
  },
  data(){
    return{
      swiperOption:{
        autoplay: false
      }
    }
  },
  computed:{
    pages(){
      const pages=[];
      this.iconList.forEach((item,index)=>{
        const page=Math.floor(index/8);
        if(!pages[page]){
          pages[page]=[];
        }
        pages[page].push(item);
      })
      return pages;
    }
  }
}
</script>

<style lang="scss"  scoped>
.icons /deep/ .swiper-container{
  height: 0;
  padding-bottom: 50%;
}
.icons{
  margin-top: .2rem;
  .icon{
    overflow: hidden;
    position: relative;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    text-align: center;
    .icon-img{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: .44rem;
      img{
        height: 100%;
      }
    }
    .text{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: .44rem;
      line-height: .44rem;
      color: #000;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
