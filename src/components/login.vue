<template>
<transition appear name="flow-up">
<div class="wrapper">
    
  <div class="login">
      <p style="color: #eee; padding-bottom= 1em;font-size: 1.4em;width:100%;text-align:center">登录以读取您的备忘信息</p> 
      <input type="text" :value="userFrom.username" class="username">
      <input type="password" :value="userFrom.password" class="password">
      <div><button @click.prevent="login" :disabled="disabled">登录</button></div>
      <div><button @click.prevent="registe" >注册</button></div>
  </div>
  <el-dialog title="个人信息" :visible.sync="isEditing" show-close>
          <userMoudal @submit-clicked="registeUserInfo($event)" :userInfo="userDetailInfo"></userMoudal>
    </el-dialog>
</div>
</transition>
</template>

<script>
import login from '@/public/userLogin'
import userMoudal from '@/components/userMoudal';
import { mapActions, mapState } from 'vuex';

export default {
    name:'login',
    data(){
        return{
            userFrom:{
                username:"ruienger",
                password:"123321",
                type:"customer"
            },
            isEditing: false,
            disabled: false
        }
    },
    computed:{
        ...mapState('user',['userDetailInfo'])
    },
    methods:{
        ...mapActions('user',['saveOrUpdateUserInfo']),
        login(){
            new Promise((res,rej)=>{
                this.disabled = true
                login(this.userFrom,(tag)=>{
                    tag?res():rej()
                })
            }).then((result) => {
                this.disabled = false
                this.$emit('handleClick')
            }).catch((err) => {
                this.disabled = true
                alert('登录失败')
            });
            
        },
        registe(){
            this.isEditing = true
        },
        registeUserInfo(form){
            this.saveOrUpdateUserInfo(form)
            this.isEditing = false
        }
    },
    components:{
        userMoudal
    }
}
</script>

<style>
.wrapper{
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login{
    width: 50%;
    min-width: 400px;
    margin: 0 auto;
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
.login button{
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    border-radius: 20px;
    background-color: #37444b65;
    color: #eee;
    margin: 0 auto;
}
button:hover{
    background-color: #37444bb4;

}
.flow-up-enter-active,.flow-up-leave-active{
    transition: all .4s .4s;
}
.flow-up-enter{
    transform: translateY(60px);
    opacity: 0;
}
@media screen and (min-width: 180px) and (max-width: 500px){
    .login{
        width: 90%;
    }
    input{
        outline: none;
        height: 50px;
        width: 90%;
        border: 1px solid #37bbab;
        padding-left: 2%;
    }
}
</style>