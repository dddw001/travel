<template>
  <ul class="list">
    <li class="list-item" :ref="item" v-for="item in letters" :key="item" @click="handleLetterClick(item)" @touchstart.prevent="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">{{item}}</li>
  </ul>
</template>

<script>
export default {
  props:{
    cities: Object
  },
  data(){
    return{
      touchStatus:false,
      startY:0,
      timer:null
    }
  },
  updated(){
    this.startY=this.$refs.A[0].offsetTop;
  },
  computed:{
    letters(){
      const letters=[];
      for(let i in this.cities){
        letters.push(i);
      }
      return letters;
    }
  },
  methods:{
    handleLetterClick(key){
      this.$emit('change',key);
    },
    handleTouchStart(){
      this.touchStatus=true;
    },
    handleTouchMove(e){
      if(this.touchStatus){
        if(this.timer){
          clearTimeout(this.timer);
        }
        this.timer=setTimeout(()=>{
          const touchY=e.touches[0].clientY;
          const index=Math.floor((touchY-this.startY)/20)-4;
          if(index>=0&&index<this.letters.length){
            this.$emit('change',this.letters[index]);
          }
        },16);
      }
    },
    handleTouchEnd(){
      this.touchStatus=false;
    }
  }
}
</script>

<style lang="scss" scoped>
.list{
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: .4rem;
  .list-item{
    line-height: .4rem;
    text-align: center;
    color: #00bcd4;
  }
}
</style>
