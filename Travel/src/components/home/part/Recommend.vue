<template>
  <div class="recommend">
    <div class="recommend-title">热销推荐</div>
    <ul>
      <router-link tag="li" :to="'/detail/'+item.id" class="item" v-for="item in recommendList" :key="item.id">
        <div class="img-wrapper">
          <img :src="item.imgUrl" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    recommendList:Array
  }
}
</script>

<style lang="scss" scoped>
.recommend-title{
  margin-top: .2rem;
  text-indent: .2rem;
  line-height: .8rem;
  background: #eee;
}
.item{
  overflow: hidden;
  display: flex;
  height: 1.9rem;
  .item-img{
    width: 1.7rem;
    height: 1.7rem;
    padding: .1rem;
  }
  .item-info{
    flex: 1;
    padding: .1rem;
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
    .item-btn{
      line-height: .44rem;
      margin-top: .2rem;
      background: #ff9300;
      padding: 0 .2rem;
      border-radius: .06rem;
      color: #fff;
    }
  }
}
</style>
