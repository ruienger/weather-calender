<template>
  <div>
      <input type="text" :value="userInfo.username">
      <input type="text" :value="userInfo.password">
      <button @click.prevent="login" >登录</button>
  </div>
</template>

<script>
import login from '@/public/userLogin'

export default {
    name:'login',
    data(){
        return{
            userFrom:{
                username:"admin",
                password:"123321",
                type:"manager"
            }
        }
    },
    methods:{
        login(){
            login(userFrom)
        }
    }
}
</script>

<style>

</style>