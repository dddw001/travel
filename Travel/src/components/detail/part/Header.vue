<template>
  <div class="header">
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <i class="icon iconfont icon-fanhui"></i>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link tag="div" to="/" class="header-fixed-abs">
        <i class="icon iconfont icon-fanhui"></i>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      showAbs:true,
      opacityStyle:{
        opacity: 0
      }
    }
  },
  activated(){
    window.addEventListener('scroll',this.handleScroll);
  },
  deactivated(){
    //页面即将被隐藏或被替换为其他页面
    window.removeEventListener('scroll',this.handleScroll); 
  },
  methods:{
    handleScroll(){
      //console.log(document.documentElement.scrollTop);
      var top=document.documentElement.scrollTop;
      if(top>45){
        let opacity=top/140;
        opacity=opacity>1?1:opacity;
        this.opacityStyle={
          opacity
        }
        this.showAbs=false;
      }
      else{
        this.showAbs=true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header-abs{
  position: absolute;
  left: .2rem;
  top: .2rem;
  width: .7rem;
  height: .7rem;
  border-radius: 50%;
  background: rgba(0,0,0,0.8);
  text-align: center;
  line-height: .7rem;
  .icon-fanhui{
    color: #fff;
    font-size: .4rem;
  }
}
.header-fixed{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  overflow: hidden;
  height: .86rem;
  line-height: .86rem;
  text-align: center;
  color: #fff;
  background: #00bcd4;
  .icon-fanhui{
    position: absolute;
    top: 0;
    left: 0;
    width: .64rem;
    text-align: center;
    font-size: .4rem;
    color: #fff;
  }
}
</style>
