<template>
<transition appear name="flow-up">
    
  <div class="user-page">
      <div class="avater">
          <el-avatar :size="300" :src="userInfo.avatar"></el-avatar>
          <div>
              <span>欢迎您: <span style="font-size:67px;"> {{ userInfo.name }}</span></span>
              <div>
              <span>{{ userDetailInfo.gender }}</span>
              <span>{{ userInfo.introduction }}</span>
            </div>
          </div>
          
      </div>
      <!-- {{userInfo}}
    {{userDetailInfo}} -->
      <div class="info-content">
          
        <div class="other-info">
          <div>联系方式</div> 
          <p>手机号: {{ userDetailInfo.telephone }}</p>
          <p>QQ: {{ userDetailInfo.qq }}</p>
          <p>微信: {{ userDetailInfo.qq }}</p>
        </div>
        <div class="other-info">
            <div>所在地</div>
          <p> {{ userDetailInfo.province }} {{ userDetailInfo.city }} {{ userDetailInfo.area }}</p>
        </div>  
      </div>
      <div class="logout" @click="handelClick">
          <p>退出登录</p>
      </div>
  </div>
</transition>
</template>

<script>
import { mapState } from 'vuex'
import logout from '@/public/userLogout'

export default {
    name: 'showInfo',
    props:{
        userInfo:{},
        userDetailInfo:{}
    },
    components:{
    },
    methods:{
      handelClick(){
        logout()
        this.$emit('handleClick')
      }
    }
}
</script>

<style>
.flow-up-enter-active, .flow-up-leave-active {
  transition: all .4s;
}
.flow-up-enter{
  transform: translateY(50px);
  opacity: 0;

}
.flow-up-leave{
  transform: translateY(50px);
  opacity: 0;

}
.user-page{
    padding: 2em 3em;
    color: #eee;
    font-size: 37px;
    font-weight: bold;
}
.avater{
  width: fit-content;
    display: flex;
    align-items: center;
    font-size: 27px;
    margin: 0 auto;
    margin-bottom: 3%;
}
.avater>div{
    margin-left:5%
}
.avater span{
    padding: 0 5px;
}
.other-info{
    width: 40%;
    font-size: 32px;
}
.info-content>div:last-child{
    text-align: end;
}
.other-info>div:first-child{
    padding-bottom: 1%;
    border-bottom: 1px solid #eee;
}
.other-info p{
    margin-top: 4%;
}
.info-content{
    font-weight: normal;
    display: flex;
    justify-content: space-between;
    padding: 0 1em;
    width: 80%;
    margin: 0 auto;
}
</style>