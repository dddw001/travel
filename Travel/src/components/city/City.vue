<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <alphabet-list :cities="cities" @change="handleLetterChange"></alphabet-list>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './part/Header'
import CitySearch from './part/Search'
import CityList from './part/List'
import AlphabetList from './part/Alphabet'
export default {
  components:{CityHeader,CitySearch,CityList,AlphabetList},
  data(){
    return{
      cities:{},
      hotCities:[],
      letter:''
    }
  },
  methods:{
    getCityInfo(){
      axios.get('/api/city.json')
      .then(res=>{
        res=res.data;
        if(res.ret&&res.data){
          this.cities=res.data.cities;
          this.hotCities=res.data.hotCities;
        }
      })
    },
    handleLetterChange(letter){
      this.letter=letter;
    }
  },
  mounted(){
    this.$nextTick(()=>{
      this.getCityInfo();
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
