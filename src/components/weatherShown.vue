<template>
  <div class="root">
      <div class="apiInfo">
        <span>上次更新时间:{{ data.weather.updateTime }}</span>
        <span>数据来源: <a :href="data.weather.fxLink">和风天气</a> </span>
      </div>
      <div class="temp">
        <span><img :src="'../../../WeatherIcon/weather-icon-S1/color-128/'+data.weather.now.icon+'100.png'" alt=""></span>
        <span>{{data.weather.now.temp}}</span>
        <span style="font-size:17px">  C</span>
      </div>
      <div>
        <span><img :src="'../../../WeatherIcon/weather-icon-S1/color-128/'+data.weather.now.icon+'100.png'" alt=""></span>
        <span>{{data.weather.now.text}}</span>
      </div>
      <div>
        <span><img :src="'../../../WeatherIcon/weather-icon-S1/color-128/'+data.weather.now.icon+'100.png'" alt=""></span>
        <span>风速: {{data.weather.now.windSpeed}} km/h {{data.weather.now.windDir}} {{data.weather.now.windScale}}级</span>
      </div>
      <div>
        <span><img :src="'../../../WeatherIcon/weather-icon-S1/color-128/'+data.weather.now.icon+'100.png'" alt=""></span>
        <span>相对湿度: {{data.weather.now.humidity}}</span>
      </div>
  </div>
</template>

<script>


export default {
    data(){
        return {}
    },
    props:{
        data:{},
        withCalander:true
    }
}
</script>

<style>
.root{
    color: #eee;
    text-align: center;
}
.apiInfo{
    display: flex;
    justify-content: space-between;
    padding: 0 1em;
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
</style>