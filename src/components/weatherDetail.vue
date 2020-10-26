<template>
<transition appear name="flow-up-long-delay">
  <div class="root">
      <div class="detail-wrapper">
        <div class="wind">
          <div class="tag">风向风力</div>
          <span>风速: {{data.weather.now.windSpeed}} km/h </span>
          <p>风向: {{data.weather.now.windDir}}</p>
          <p>{{data.weather.now.windScale}}级</p>
          <div class="windAni">
            <div class="winAni-slow"></div>
            <div class="winAni-fast"></div>
            <div class="winAni-middle"></div>
          </div>
        </div>
        <div class="wet">
          <div class="tag">相对湿度</div>
          <div class="wetCircle">
            <span>{{ data.weather.now.humidity }}</span>
            
            <div class="wetCircle-fill" :style="'top:'+ (100 - data.weather.now.humidity)*1.5 + 'px'"></div>
          </div>
          
        </div>
        <div class="pressure">
          <div class="tag">其他</div>
          <span>大气压: {{data.weather.now.pressure}}</span>
          <div class="precip">
          <span>降水量: {{data.weather.now.precip}}</span>
        </div>
        </div>
        
      </div>
  </div>
</transition>
</template>

<script>


export default {
    data(){
        return {
        }
    },
    props:{
        data:{
          
        }
    },
    computed:{
    }
}
</script>

<style>
.detail-wrapper{
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  justify-content: space-between;
}
.wetCircle{
  width: 150px;
  height: 150px;
  border-radius: 75px;
  overflow: hidden;
  border: 1px solid  rgb(90, 163, 192);
  position: relative;
}
.wind{
  text-align: start;
  font-size: 19px;
}
.wetCircle-fill{
  position: relative;
  top: 150px;
  height: 150px;
  width: 200px;
  left: -25px;
  transition: all 2s;
  background-color: rgb(128, 170, 233);
  animation: wave 3s ease-in-out infinite alternate-reverse;
}

@keyframes wave {
  0%{
    transform: rotate(-3deg);
  }100%{
    transform: rotate(3deg);


  }
  
}
.wetCircle>span{
  position: absolute;
  top: 0;left: 0;right: 0;bottom: 0;
  margin: auto;
  z-index: 5;
}
.pressure{
  font-size: 19px;
}
.tag{
  font-weight: bold;
  font-size: 19px;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
  text-align: center;
  padding-bottom: 5px;
}
.windAni{
  overflow: hidden;
  width: 100%;
}
.winAni-slow{
  height: 5px;
  width: 40%;
  background-color: #eee;
  margin-top: 1em;
  animation: flow 3s linear infinite;
}
.winAni-fast{
  height: 5px;
  width: 64%;
  margin-top: 8%;
  background-color: #eee;
  animation: flow 4s linear infinite;

}
.winAni-middle{
  height: 5px;
  width: 56%;
  background-color: #eee;
  margin-top: 8%;
  animation: flow 2s linear infinite;

}
@keyframes flow {
  0%{
    margin-left: -100%;
  }100%{
    margin-left: 100%;
  }
}
.flow-up-long-delay-enter-active, .flow-up-long-delay-leave-active {
  transition: all .4s .6s;
}
.flow-up-long-delay-enter{
  transform: translateY(50px);
  opacity: 0;
}
@media screen and (min-width: 180px) and (max-width: 500px){
  .detail-wrapper{
    display: block;
    width: 98%;
    margin: 0 auto;
    border-top: 1px double #eee;
    padding-top: 1em;
  }
  .detail-wrapper>div{
    margin-top: 1em;
  }
  .tag{
    border-bottom: none;
    text-align: start;
  }
  .pressure{
    text-align: start;
  }
}
</style>