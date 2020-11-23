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
    ...mapState('notes',['notes']),
    backgroundcolor(){
      return getColor(this.weather.weather.now.text)
    }
  },
  watch:{
    notes: {
      deep: true,
      handler: function(val){
        window.clearTimeout()
        let timestamp = new Date().getTime()
        val.list.filter(e => {
          return e.commentTime > timestamp
        }).forEach(element => {
          // 五分钟前提醒
          console.log(element.content)
          setTimeout(this.showNotice,element.commentTime - timestamp- 60*5*1000,element.content )
        });
      }
    }
  },
  methods:{
    showNotice(msg) {
      //发送通知
      let newNotify = function () {
          var notification = new Notification(msg, {
              dir: "auto",
              lang: "hi",
              requireInteraction: true,
              body: '备忘提醒'
          });
          notification.onclick = function (event) {
              //回到发送此通知的页面
              window.focus();
              //回来后要做什么
              console.log("I'm back");
          }
      }
      //权限判断
      if (Notification.permission == "granted") {
          newNotify();
      } else {
          //请求权限
          Notification.requestPermission(function (perm) {
              if (perm == "granted") {
                  newNotify();
              }
          })
      }
    }
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
    /* width: 100%; */
    height: 100%;

}
#app{
    background-image: linear-gradient(#00000011,#0000000f);
    background-size: 100% 100%;
    transition: all 5s;
}
@media screen and (min-width: 500px){
  .router_view{
    padding-left:50px;
}
  
}
.router_view{
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    box-sizing: border-box;
    padding-bottom: 50px;
    font-size: .8em;
}

</style>
