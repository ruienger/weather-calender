<template>
  <div class="root">
      <transition appear name="flow-up">
        <div class="temp">
          <span><img :src='file' alt=""></span>
          <span>{{data.weather.now.temp}}</span>
          <span> &#8451;</span>
          
        </div>
      </transition>
      <transition appear name="flow-up" delay="300" >
        <div>
          <span class="text">{{data.weather.now.text}}</span>
          <div>体感温度:{{data.weather.now.feelsLike}}&#8451;</div>
        </div>
      </transition>
      <transition appear name="flow-up" >

        <div class="apiInfo">
          <span>上次更新时间:{{ lastUpdateTime }}</span>
          <span>数据来源: <a :href="data.weather.fxLink">和风天气</a> </span>
        </div>
      </transition>
  </div>
</template>

<script>
import moment from 'moment'

export default {
    data(){
        return {
          imgDir: 'image/',
          imgEXTname: '.png'
        }
    },
    props:{
        data:{
          weather:{
            now: {
              icon: '100'
            }
          }
        }
    },
    computed:{
      file(){
        return this.imgDir + this.data.weather.now.icon + this.imgEXTname
      },
      lastUpdateTime(){
        return moment(this.data.weather.updateTime).fromNow()
      }
    }
}
</script>

<style>
.root{
    color: #eee;
    text-align: center;
    padding-top: 20px;
    width: 90%;
    margin: 0 auto;
}
.apiInfo{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
}
.temp{
    font-size: 5em;
    font-weight: 400;
    text-align: center;
}
.temp::after{
    content: none;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border: 1px solid #eee;
}
.temp>span:last-child{
   font-size:40px
}
.text{
  font-size: 27px;
}
.flow-up-enter-active, .flow-up-leave-active {
  transition: all .4s;
}
.flow-up-enter{
  transform: translateY(50px);
  opacity: 0;
}
</style>