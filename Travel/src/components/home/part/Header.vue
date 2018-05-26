<template>
  <div class="header">
    <div class="header-left">
      <i class="icon iconfont icon-fanhui"></i>
    </div>
    <div class="header-input">
      <i class="icon iconfont icon-sousuo"></i>
      <span>输入城市/景点/游玩主题</span>
    </div>
    <router-link to='/city'>
      <div class="header-right">
        <span>{{city}}</span>
        <i class="icon iconfont icon-xia"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['city'])
  }
}
</script>

<style lang="scss" scoped>
$bgColor: #00bcd4;
/*
html的font-size为50px
1rem=50px
设计图高度是86px 应该除以2 再转换成rem 相对于设计图上的值除以100
*/
.header{
  display: flex;
  line-height: .86rem;
  background: $bgColor;
  color: #fff;
  .header-left{
    float: left;
    width: .64rem;
    text-align: center;
  }
  .header-input{
    flex: 1;
    height: .64rem;
    margin-top: .12rem;
    margin-left: .12rem;
    background: #fff;
    color: #ccc;
    line-height: .64rem;
    border-radius: .1rem;
    .icon{
      padding-left: .2rem;
    }
  }
  .header-right{
    float: right;
    min-width: 1.04rem;
    padding: 0 .1rem;
    text-align: center;
    color: #fff;
    .icon{
      font-size: .24rem;
    }
  }
}
</style>
