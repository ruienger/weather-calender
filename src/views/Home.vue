<template>
  <div class="home">
    <headNavBar title="主页"></headNavBar>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <weatherShown :withCalander="false" :data="weather"></weatherShown>
    <slicedCalender :calenderInfo="weatherPre"></slicedCalender>
    {{ location }}
    {{ weather }}
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex'
import state from '@/store/index.js'
import axios from 'axios'
import headNavBar from '@/components/headNavBar.vue'
import weatherShown from '@/components/weatherShown.vue'
import getWeatherInfo from '@/public/weatherInfo.js'
import slicedCalender from '@/components/slicedCalender.vue'
import getWeatherPreInfo from '@/public/weatherPre'

export default {
  name: 'Home',
  data(){
    return{
      location: '苏州',
    }
  },
  computed: {
    ...mapState('weather',['weather','weatherPre'])
  },
  components: {
    headNavBar,weatherShown,slicedCalender
  },
  state,
  methods:{
    ...mapActions('weather',['getWeather'])
  },
  mounted(){
    getWeatherInfo(this.location)
    getWeatherPreInfo(this.location)
  }
}
</script>

<style scoped>
.home{
  color: white;
}
</style>
