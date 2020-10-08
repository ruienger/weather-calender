<template>
  <div id="app">
    
      <sideBar headIconClass="icon-icon_threeline_fill"></sideBar>
    
      <router-view class="router_view"/>
  </div>
</template>

<script>
import sideBar from '@/components/sideBar.vue'
export default {
  data(){
    return {}
  },
  computed:{},
  created:{},
  methods:{},
  components:{sideBar},
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
    background-color:rgb(67, 116, 189);
    background-size: 100% 100%;
}
.router_view{
    padding-left:50px
}
</style>
