<template>
  <div class="home">
    <headNavBar title="主页" @search-clicked="handleSearch($event)"></headNavBar>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="location">{{ location }}</div>
    <weatherShown :data="weather"></weatherShown>
    <slicedCalender :location="location"></slicedCalender>
    <weatherDetail :data="weather"></weatherDetail>
    
    {{ weather }}
    {{ userId }}
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
import store from '@/store/index.js'
import axios from 'axios'
import headNavBar from '@/components/headNavBar.vue'
import weatherShown from '@/components/weatherShown.vue'
import getWeatherInfo from '@/public/weatherInfo.js'
import slicedCalender from '@/components/slicedCalender.vue'
import getLocalCity from '@/public/localCity'
import weatherDetail from '@/components/weatherDetail.vue'
import getUserInfo from '@/public/userInfo'
import getWeatherPreInfo from '@/public/weatherPre';

export default {
  name: 'Home',
  data(){
    return{
    }
  },
  computed: {
    ...mapState('weather',['weather']),
    ...mapState('location',['location']),
    ...mapGetters('user',['userId'])
  },
  components: {
    headNavBar,weatherShown,slicedCalender,weatherDetail
  },
  store,
  methods:{
    ...mapActions('weather',['getWeather']),
    ...mapMutations('location',['SET_LOCATION']),
    handleSearch(data){
      
        this.SET_LOCATION(data)
        getWeatherInfo(this.location)
        getWeatherPreInfo(this.location)
    }
  },
  created(){
    getLocalCity()
    getWeatherInfo(this.location)
  }
}
</script>

<style scoped>
.home{
  color: white;
  /* background-color: red; */
}
.location{
  text-align: center;
  padding-top: 1%;
  font-size: 19px;
}
</style>
