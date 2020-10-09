<template>
  <div>
      <input type="text" :value="userFrom.username">
      <input type="text" :value="userFrom.password">
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
            login(this.userFrom)
            this.$emit('handleClick')
        }
    }
}
</script>

<style>

</style>