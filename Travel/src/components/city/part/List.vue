<template>
  <div class="list" ref="CityList">
   <div>
    <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="btn-list">
        <div class="btn-wrapper" @click="handleCityClick(currentCity)">
          <div class="btn">{{currentCity}}</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
      <div class="btn-list">
        <div class="btn-wrapper" v-for="item in hotCities" :key="item.id" @click="handleCityClick(item.name)">
          <div class="btn">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
      <div class="title border-topbottom">{{key}}</div>
      <div class="item-list">
        <div class="item" v-for="innerItem in item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
      </div>
    </div>
   </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState,mapMutations} from 'vuex'
export default {
  props:{
    hotCities:Array,
    cities:Object,
    letter:String
  },
  mounted(){
    this.$nextTick(()=>{
      if(!this.scroll){
        this.scroll=new BScroll(this.$refs.CityList)
      }
      else{
        this.scroll.refresh();
      }
    })
  },
  watch:{
    letter(){
      if(this.letter){
        const element=this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  },
  computed:{
    ...mapState({
      currentCity:'city'
    })
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
.border-topbottom{
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.list{
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
}
.title{
  line-height: .54rem;
  background: #eee;
  padding-left: .2rem;
  color: #666;
  font-size: .26rem;
}
.btn-list{
  padding: .1rem;
  padding: .1rem .6rem .1rem .1rem;
  overflow: hidden;
  .btn-wrapper{
    float: left;
    width: 33.33%;
    .btn{
      margin: .1rem;
      padding: .1rem 0;
      text-align: center;
      border: .02rem solid #ccc;
      border-radius: .06rem;
    }
  }
}
.item-list{
  .item{
    line-height: .54rem;
    color: #666;
    padding-left: .2rem;
    border-bottom: 1px solid #eee;
  }
}
</style>
