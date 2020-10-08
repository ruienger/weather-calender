<template>
  <div>
      <router-view></router-view>
  </div>
</template>

<script>
import cookie from '@/public/cookie'
import getUserInfo from '@/public/userInfo'
import login from '@/components/login'
import showInfo from '@/components/showInfo'

export default {
    data(){
        return{

        }
    },
    created(){
        if(cookie.getToken()){
            getUserInfo(cookie.getToken())
            // router.push('/showInfo')
        }else{
            
            this.$router.push('/login')
        }
    },
    components:{
        login,showInfo
    },
    routes:
    [
      { path:'/login', name:'login', component: () => import('../components/login.vue') },
      { path:'/showInfo', component: () => import('../components/showInfo.vue') },

    ]
}
</script>

<style>

</style>