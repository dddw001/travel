<template>
  <div class="home">
    <home-header></home-header>
    <swiper-part :swiperList="swiperList"></swiper-part>
    <icons :iconList="iconList"></icons>
    <recommend :recommendList="recommendList"></recommend>
    <weekend :weekendList="weekendList"></weekend>
  </div>
</template>

<script>
import HomeHeader from './part/Header'
import SwiperPart from './part/SwiperPart'
import Icons from './part/Icons'
import Recommend from './part/Recommend'
import Weekend from './part/Weekend'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  components: {HomeHeader,SwiperPart,Icons,Recommend,Weekend},
  data(){
    return{
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[],
      lastCity:''
    }
  },
  mounted(){
    //当页面被加载时
    this.lastCity=this.city;
    this.getHomeInfo();
  },
  activated(){
    //当页面被重新显示时
    if(this.lastCity!==this.city){
      //如果城市改变了，重新发送ajax请求
      this.lastCity=this.city;
      this.getHomeInfo();
    }
  },
  computed:{
    ...mapState(['city'])
  },
  methods:{
    getHomeInfo(){
      axios.get('/api/index.json?city='+this.city)
      .then(res=>{
        res=res.data;
        if(res.ret&&res.data){
          this.swiperList=res.data.swiperList;
          this.iconList=res.data.iconList;
          this.recommendList=res.data.recommendList;
          this.weekendList=res.data.weekendList;
        }
      })
    }
  }
}
</script>

<style lang="scss">

</style>
