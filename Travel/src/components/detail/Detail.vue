<template>
  <div class="detail">
    <banner :sightName="sightName" :bannerImage="bannerImage" :gallaryImgs="gallaryImgs"></banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Banner from './part/Banner'
import DetailHeader from './part/Header'
import DetailList from './part/DetailList'
export default {
  name:'Detail',
  components:{Banner,DetailHeader,DetailList},
  data(){
    return{
      sightName:'',
      bannerImage:'',
      gallaryImgs:[],
      list:[]
    }
  },
  mounted(){
    this.getDetailInfo();
  },
  methods:{
    getDetailInfo(){
      // axios.get('/api/detail.json?id='+this.$route.params.id)
      // .then(res=>{
      //   console.log(res);
      // })
      axios.get('/api/detail.json',{
        params:{id:this.$route.params.id}
      }).then(res=>{
        res=res.data;
        if(res.ret&&res.data){
          this.sightName=res.data.sightName;
          this.bannerImage=res.data.bannerImg;
          this.gallaryImgs=res.data.gallaryImgs;
          this.list=res.data.categoryList;
        }
      })
    }
  }
}
</script>

<style lang="scss">
.content{
  height: 50rem;
}
</style>
