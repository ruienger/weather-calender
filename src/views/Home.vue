<template>
  <div class="home">
    <headNavBar title="主页"></headNavBar>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <weatherShown :withCalander="false" :data="weather"></weatherShown>
    <slicedCalender :location="location"></slicedCalender>
    {{ location }}
    {{ weather }}
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions, mapMutations } from 'vuex'
import state from '@/store/index.js'
import axios from 'axios'
import headNavBar from '@/components/headNavBar.vue'
import weatherShown from '@/components/weatherShown.vue'
import getWeatherInfo from '@/public/weatherInfo.js'
import slicedCalender from '@/components/slicedCalender.vue'

export default {
  name: 'Home',
  data(){
    return{
    }
  },
  computed: {
    ...mapState('weather',['weather','weatherPre']),
    ...mapState('location',['location'])
  },
  components: {
    headNavBar,weatherShown,slicedCalender
  },
  state,
  methods:{
    ...mapActions('weather',['getWeather']),
    ...mapMutations('location',['SET_LOCATION'])
  },
  created(){
    this.SET_LOCATION('苏州')
    getWeatherInfo(this.location)
  }
}
</script>

<style scoped>
.home{
  color: white;
}
</style>
