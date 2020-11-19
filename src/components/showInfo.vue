<template>
<transition appear name="flow-up">
    
  <div class="user-page">
      <div class="avater">
          <el-avatar :size="200" :src="userInfo.avatar"></el-avatar>
          <div>
              <span>欢迎您: <span style="font-size:2em;"> {{ userInfo.name }}</span></span>
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
          <p>手机号: </p>
          <p>{{ userDetailInfo.telephone }}</p>
          <p>QQ: </p>
          <p>{{ userDetailInfo.qq }}</p>
          <p>微信: </p>
          <p>{{ userDetailInfo.wxid }}</p>
        </div>
        <div class="other-info">
            <div>所在地</div>
          <p>省: </p>
            <p>{{ userDetailInfo.province }} </p>
          <p>市:</p>
            <p>{{ userDetailInfo.city }} </p>
          <p>区县:</p>
            <p>{{ userDetailInfo.area }}</p>
        </div>  
      </div>
      <div class="logout" @click="handelEdit">
          <p>编辑信息</p>
      </div>
      <div class="logout" @click="handelClick">
          <p>退出登录</p>
      </div>

      <el-drawer
            :visible.sync="isEditing"
            direction="btt"
            size= '95%'
            :show-close="false"
        > 
      <p style="text-align:center;color:#333;margin-bottom:10px">个人信息</p>
          <userMoudal @submit-clicked="updateUserInfo($event)" @cancle-clicked="isEditing = false" :userInfo="userDetailInfo"></userMoudal>
      </el-drawer>
  </div>
  
</transition>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import userMoudal from '@/components/userMoudal';

export default {
    name: 'showInfo',
    props:{
        userInfo:{},
        userDetailInfo:{}
    },
    data(){
      return{
        isEditing: false
      }
    },
    components:{
      userMoudal
    },
    methods:{
      ...mapActions('user',['saveOrUpdateUserInfo']),
      handelClick(){
        this.$emit('handleClick')
      },
      handelEdit(){
        this.isEditing = true

      },
      updateUserInfo(form){
        this.saveOrUpdateUserInfo(form)
        this.isEditing = false
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
    padding: 2rem 3rem;
    color: #eee;
    font-size: 2rem;
    font-weight: bold;
    box-sizing: border-box;
    overflow: scroll;
}

.avater{
    width: 70%;
    min-width: 550px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 2rem;
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
    width: 8rem;
    font-size: 1em;
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
.other-info p:nth-child(even){
  font-size: .9em;
  color: #ddd;
}
.info-content{
    font-weight: normal;
    display: flex;
    justify-content: space-between;
    padding: 0 1em;
    width: 80%;
    margin: 0 auto;
}
.logout{
  height: 60px;
  line-height: 60px;
  width: 30%;
  margin: 0 auto;
  text-align: center;
  border-radius: 30px;  
  background-color: rgb(240, 107, 107);
  opacity: .8;
  margin-top: 20px;
  transition: all .2s;
}
.logout:first-child{
  background-color: rgb(107, 213, 240);
}
.logout:hover{
  opacity: 1;
}
@media screen and (min-width: 180px) and (max-width: 500px){
  .user-page{
    padding: 2em 5px;
    font-size: 17px;
    font-weight: bold;
  }
  .avater{
    width: 100%;
    min-width: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    font-size: 1em;
    margin-bottom: 3%;
    text-align: center;
}
  .info-content{
    width: 90%
  }
  .logout{
    width: 90%;
  }
  .el-dialog{
    width: 100%;
    margin: auto
  }
  .el-dialog__wrapper{
    top: auto;
  }
  .avater>div{
    margin-left:0
  }
}
</style>