<template>
  <div>
      <headNavBar title="用户"></headNavBar>
      <login v-if="flag" @handleClick='syncCookie'></login>
  
      <showInfo :userInfo='userInfo' :userDetailInfo="userDetailInfo" v-if="!flag" @handleClick='Logout' style="margin-top: 50px;"></showInfo>
  </div>
</template>

<script>
import cookie from '@/public/cookie'
import getUserInfo from '@/public/userInfo'
import login from '@/components/login'
import showInfo from '@/components/showInfo'
import headNavBar from '@/components/headNavBar'
import { mapMutations, mapState } from 'vuex'
import router from '@/router/index'
import logout from '@/public/userLogout'
import returnDefalut from '@/public/returnDefalut'

export default {
    data(){
        return{
            flag: true
        }
    },
    computed:{
        ...mapState('user',['userInfo','userDetailInfo'])
    },
    components:{
        login, showInfo, headNavBar
    },
    router,
    methods:{
        syncCookie(){
            if(cookie.getToken()){
                this.flag = false
                getUserInfo()
            }else{
                logout()
                returnDefalut()
                this.flag = true
            }
            // router.push({ name: '主页' })
        },
        Logout(){
            logout()
            returnDefalut()
            this.syncCookie()
        }
    },
    created(){
        this.syncCookie()
    }
    // [
    //   { path:'/login', name:'login', component: () => import('../components/login.vue') },
    //   { path:'/showInfo', component: () => import('../components/showInfo.vue') },

    // ]
}
</script>

<style scoped>
div{
    width: 100%;
    height: 100%;
}

</style>