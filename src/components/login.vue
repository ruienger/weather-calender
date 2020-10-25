<template>
<transition appear name="flow-up">
  <div class="login">
      <input type="text" :value="userFrom.username" class="username">
      <input type="password" :value="userFrom.password" class="password">
      <div><button @click.prevent="login" >登录</button></div>
      
  </div>
</transition>
</template>

<script>
import login from '@/public/userLogin'

export default {
    name:'login',
    data(){
        return{
            userFrom:{
                username:"jerry",
                password:"123321",
                type:"customer"
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
.login{
    width: 50%;
    min-width: 400px;
    margin: 0 auto;
    margin-top: 30%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
input{
    outline: none;
    height: 40px;
    width: 60%;
    border: 1px solid #37bbab;
    padding-left: 2%;
}
.username{
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}
.password{
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
}
.login>div{
    width: 40%;
    margin-top: 3%;
    height: 40px;
}
button{
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    border-radius: 20px;
    background-color: #aaaaaa65;
    color: #eee;
    margin: 0 auto;
}
button:hover{
    background-color: #aaaaaab4;

}
.flow-up-enter-active,.flow-up-leave-active{
    transition: all .4s .4s;
}
.flow-up-enter{
    transform: translateY(60px);
    opacity: 0;
}
</style>