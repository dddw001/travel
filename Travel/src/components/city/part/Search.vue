<template>
  <div>
    <div class="search">
      <input type="text" v-model="keyWord" placeholder="输入城市名或拼音" class="search-input"/>
    </div>
    <div class="search-content" ref="searchContent" v-show="keyWord">
      <ul>
        <li v-for="item in list" class="search-item" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item center-item" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState,mapMutations} from 'vuex'
export default {
  props:{
    cities:Object
  },
  data(){
    return{
      keyWord:'',
      list:[],
      timer:null
    }
  },
  mounted(){
    this.$nextTick(()=>{
      this.scroll=new BScroll(this.$refs.searchContent);
    })
  },
  computed:{
    hasNoData(){
      return !this.list.length;
    }
  },
  watch:{
    keyWord(){
      if(this.timer){
        clearTimeout(this.timer);
      }
      if(!this.keyWord){
        this.list=[];
        return;
      }
      this.timer=setTimeout(()=>{
        const result=[];
        for (let i in this.cities){
          this.cities[i].forEach((value)=>{
            if(value.spell.indexOf(this.keyWord)>-1||value.name.indexOf(this.keyWord)>-1){
              result.push(value);
            }
          })
        }
        this.list=result;
      },100)
    }
  },
  methods:{
    handleCityClick(city){
      this.changeCity(city);
      this.$router.push('/');
    },
    ...mapMutations(['changeCity'])
  }
}
</script>

<style lang="scss" scoped>
.search{
  height: .72rem;
  padding: 0 .1rem;
  background: #00bcd4;
  .search-input{
    box-sizing: border-box;
    margin-top: .1rem;
    width: 100%;
    height: .52rem;
    padding: 0 .1rem;
    line-height: .62rem;
    text-align: center;
    border-radius: .06rem;
    color: #666;
  }
}
.search-content{
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
  .search-item{
    line-height: .62rem;
    padding-left: .2rem;
    color: #666;
    border-bottom: 1px solid #ccc;
    background: #fff;
  }
  .center-item{
    text-align: center;
  }
}
</style>
