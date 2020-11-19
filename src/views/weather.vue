<template>
    <transition appear name="flow-up">
        <div>
            <headNavBar title="其他详情"></headNavBar>
            <div class="content" style="margin-top:50px">
            <el-collapse>
                <el-collapse-item title="生活TIPS" name="1" style="color:#eee">
                    <div class="tips-wrapper">
                    <div v-for="item in lifeQuality.daily" :key="item.type">
                        <div>
                            <span>{{item.name}} : {{item.level}}</span>
                            <span></span>
                            (<span>{{item.category}}</span>)
                        </div>
                        <p style="color:#ddd; font-size:.9em">{{item.text}}</p>
                        <br>
                    </div>
                </div>
                </el-collapse-item>
            </el-collapse>
            <transition appear name="slide-in">
                
            </transition>
            <chartsPerHour :options="options"></chartsPerHour>
            <h2 style="color:#eee;text-align:center;margin-top:20px">空气质量</h2>
                    <h3 style="color:#eee;text-align:center">
                        主要污染物:{{weatherQuality.now.primary}}
                    </h3>
            <div class="weather-quality">
                <div>
                    <el-progress type="dashboard" :percentage="percentage" :color="colors"></el-progress>
                    <p>
                        空气质量:{{weatherQuality.now.category}}
                    </p>
                </div>
                <div>
                    <p>
                        空气质量等级:{{weatherQuality.now.level}}
                    </p>
                    <p>
                        空气质量:{{weatherQuality.now.category}}
                    </p>
                    <p>
                        PM10:{{weatherQuality.now.pm10}}
                    </p>
                    <p>
                        PM2.5:{{weatherQuality.now.pm2p5}}
                    </p>
                </div>
                <div>
                    <p>
                        二氧化氮: {{weatherQuality.now.no2}} </p>
                        <p>二氧化硫: {{weatherQuality.now.so2}} </p>
                        <p>一氧化碳: {{weatherQuality.now.co}} </p>
                        <p>臭氧: {{weatherQuality.now.o3}}
                    </p>
                </div>
            </div>
            </div>
        </div>
  </transition>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import headNavBar from '@/components/headNavBar.vue'
import chartsPerHour from '@/components/chartsPerHour.vue'
export default {
    data(){
        return{
            colors: [
                {color: '#ff1111', percentage: 100},
                {color: '#f56c6c', percentage: 90},
                {color: '#e6923c', percentage: 60},
                {color: '#5cb87a', percentage: 45},
                {color: '#1989fa', percentage: 30},
                {color: '#6faad3', percentage: 15}
            ],
            visible: false
        }
    },
    computed:{
        ...mapState('weather',['waterPerMin','weatherWarning','weatherQuality','lifeQuality']),
        ...mapState('location',['location']),
        percentage(){
            return Math.floor(this.weatherQuality.now.aqi/3)
        },
        tipsList(){
            return this.lifeQuality.daily
        },
        options(){
            return {
                // 为high chart准备的配置对象
                chart: {
                    type: 'bar',
                    style:{
                        fontSize: "17px",
                        fontWeight: "bold",
                        color: "#eeeeee"
                    },
                    backgroundColor: '#ffffff00'
                },
                title: {
                    text: '未来2小时内降水量',
                    style:{
                        fontSize: "17px",
                        fontWeight: "bold",
                        color: "#eeeeee"
                    }
                },
                subtitle: {
                    text: '目前:'+this.waterPerMin.summary,
                    style:{
                        fontSize: "11px",
                        fontWeight: "bold",
                        color: "#ddd"
                    }
                },
                xAxis: {
                    categories: this.waterPerMin.minutely.map((i)=>{
                        return i.fxTime.slice(11,16)
                    }),
                    title: {
                        text: null,
                        color: "#ddd"
                    },
                    labels: {
                        style:{
                            fontSize: "9px",
                            fontWeight: "300",
                            color: "#eeeeee"
                        }
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: '降水量(mm)',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify',
                        style:{
                            fontSize: "17px",
                            fontWeight: "bold",
                            color: "#ddd"
                        }
                    }
                },
                tooltip: {
                    valueSuffix: ' mm ',
                    style:{
                        fontSize: "17px",
                        fontWeight: "bold",
                        color: "#eeeeee"
                    }
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true,
                            allowOverlap: true // 允许数据标签重叠
                        }
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -40,
                    y: 100,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor: '#FFFFFF',
                    shadow: true
                },
                series: [{
                    name: '降水量',
                    data: this.waterPerMin.minutely.map((i)=>{
                        return i.precip
                    }),
                    style:{
                        fontSize: "17px",
                        fontWeight: "bold",
                        color: "#eeeeee"
                    }
                    
                }]
            }
            }
                
    },
    methods:{
        ...mapActions('weather',['getWaterPerMin','getWeatherWarning','getWeatherQuality','getLifeQuality']),
    },
    created(){
        this.getWaterPerMin(this.location)
        this.getWeatherWarning(this.location)
        this.getWeatherQuality(this.location)
        this.getLifeQuality(this.location)
    },
    components:{
        headNavBar, chartsPerHour
    }
}
</script>

<style>
.content{
    padding-bottom: 2em;
}
.tips-wrapper{
    padding: 5px 0;
    color: #eee;
}
.weather-quality{
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #eee;
    margin: 0 auto;
}
.weather-quality>div:first-child>p{
    text-align: center;
}
.weather-quality>div>p{
    color: #ddd;
    border: none;
}
.el-progress__text{
    color: #eee;
}
@media screen and (min-width: 180px) and (max-width: 500px){
    .weather-quality{
        width: 98%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #eee;
        margin: 0 auto;
    }
    .weather-quality>div>p{
        font-size: 1em;
        border: none;
    }
}
.slide-in-enter-active, .slide-in-leave-active{
    transition: all .3s;
}
.slide-in-enter, .slide-in-leave-to{
    opacity: 0;
    max-height: 0;
}
</style>