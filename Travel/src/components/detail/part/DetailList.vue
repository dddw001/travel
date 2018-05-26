<template>
  <div class="list">
    <div class="item" v-for="(item,index) in list" :key="index">
      <div class="item-title">
        <i class="icon iconfont "></i>
        <span>{{item.title}}</span>
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props:{
    list:Array
  }
}
</script>

<style lang="scss" scoped>
.item-title{
  line-height: .8rem;
  font-size: .32rem;
  padding: 0 .2rem;
  border-bottom: 1px solid #ccc;
  .icon{
    display: inline-block;
    width: .36rem;
    height: .36rem;
    // background: url() 0 -.45rem no-repeat;
    margin-right: .1rem;
    background-size: .4rem 3rem;
  }
}
.item-children{
  padding: 0 .2rem;
}
</style>
