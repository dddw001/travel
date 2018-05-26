<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <i class="icon iconfont icon-fanhui"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
$bgColor: #00bcd4;
.header{
  position: relative;
  overflow: hidden;
  height: .86rem;
  line-height: .86rem;
  text-align: center;
  color: #fff;
  background: $bgColor;
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
