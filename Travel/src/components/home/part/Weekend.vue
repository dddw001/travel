<template>
  <div class="weekend">
    <div class="title">周末去哪</div>
    <ul>
      <li class="item" v-for="item in weekendList">
        <div class="img-wrapper">
          <img :src="item.imgUrl" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    weekendList:Array
  }
}
</script>

<style lang="scss" scoped>
.title{
  margin-top: .2rem;
  text-indent: .2rem;
  line-height: .8rem;
  background: #eee;
}
.item{
  margin-bottom: .1rem;
  .img-wrapper{
    overflow: hidden;
    height: 0;
    padding-bottom: 37.09%;
    .item-img{
      width: 100%;
    }
  }
  .item-info{
    .item-title{
      line-height: .54rem;
      font-size: .32rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .item-desc{
      line-height: .4rem;
      color: #bbb;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
