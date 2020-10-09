<template>
  <div>
      <login v-if="flag" @handleClick='syncCookie'></login>
      <showInfo :userInfo='userInfo'></showInfo>
  </div>
</template>

<script>
import cookie from '@/public/cookie'
import getUserInfo from '@/public/userInfo'
import login from '@/components/login'
import showInfo from '@/components/showInfo'
import { mapState } from 'vuex'
// import router from '@/router/index'

export default {
    data(){
        return{
            flag: true
        }
    },
    computed:{
        ...mapState('user',['userInfo'])
    },
    components:{
        login, showInfo
    },
    methods:{
        syncCookie(){
            if(cookie.getToken()){
                this.flag = false
                getUserInfo()
                console.log('token exits',this.flag)
                
            }else{
                console.log('token dont exits')
                this.flag = true
            }
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

<style>

</style>