<template>
  <div id="app" :style="'background-color: ' + backgroundcolor + ';'">
    
      <sideBar headIconClass="icon-icon_threeline_fill"></sideBar>
    
      <router-view class="router_view"/>
      
  </div>
</template>

<script>
import sideBar from '@/components/sideBar.vue'
import getColor from '@/public/backgroundColor'
import { mapActions, mapState, Store, mapGetters, mapMutations } from 'vuex'
import cookie from '@/public/cookie'
import getUserInfo from '@/public/userInfo'
import store from '@/store/index'

export default {
  data(){
    return {

    }
  },
  components:{sideBar},
  
  computed:{
    ...mapState('weather',['weather']),
    backgroundcolor(){
      return getColor(this.weather.weather.now.text)
    }
  },
  methods:{
    
  },
  created(){
    getUserInfo()
  },
  store
}
</script>
<style>
*{
    margin: 0;
    padding: 0;
}
html,body,#app{
    width: 100%;
    height: 100%;
}
#app{
    background-image: linear-gradient(#6ba5af91,#30444dc5);
    background-size: 100% 100%;
    transition: all 5s;
}
.router_view{
    height: 100%;
    padding-left:50px;
    overflow: scroll;
}
</style>
