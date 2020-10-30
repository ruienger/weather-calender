<template>
  <div class="home">
    <headNavBar
      title="主页"
      @search-clicked="handleSearch($event)"
    ></headNavBar>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="location">{{ location }}</div>
    <weatherShown :data="weather"></weatherShown>
    <chartsPerHour
      :weatherInfo="weatherPerHour.hourly"
      :options="options"
    ></chartsPerHour>
    <slicedCalender :location="location"></slicedCalender>
    <weatherDetail :data="weather"></weatherDetail>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import store from "@/store/index.js";
import axios from "axios";
import headNavBar from "@/components/headNavBar.vue";
import weatherShown from "@/components/weatherShown.vue";
import getWeatherInfo from "@/public/weatherInfo.js";
import slicedCalender from "@/components/slicedCalender.vue";
import chartsPerHour from "@/components/chartsPerHour.vue";
import getLocalCity from "@/public/localCity";
import weatherDetail from "@/components/weatherDetail.vue";
import getUserInfo from "@/public/userInfo";
import getWeatherPreInfo from "@/public/weatherPre";

export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {
    ...mapState("weather", ["weather", "weatherPerHour"]),
    ...mapState("location", ["location"]),
    ...mapGetters("user", ["userId"]),
    options() {
      return {
        title: {
          text: "24小时天气预报",
          style:{
            fontSize: "17px",
            fontWeight: "bold",
            color: "#eeeeee"
          }
        },
        subtitle: {
          text: "数据来源：和风天气",
          style:{
            fontSize: '14px',
            fontWeight: '300',
            color: "#eeeeee"
          }
        },
        yAxis: {
          title: {
            text: "温度/湿度",
            style:{
              fontSize: '11px',
              fontWeight: '300',
              color: "#eeeeee"
            }
          },
          labels: {
            formatter: function () {
              return this.value;
            },
            style:{
              fontSize: '9px',
              fontWeight: '300',
              color: "#eeeeee"
            }
          },
        },
        chart: {
          backgroundColor: "rgba(255, 255, 255, 0.0)",
          style:{
            fontSize: "17px",
            fontWeight: "bold",
            color: "#eeeeee"
          }
        },
        xAxis: {
          type: "category",
          labels: {
            overflow: "justify",
            style:{
              fontSize: '11px',
              fontWeight: '300',
              color: "#eeeeee"
            }
          },
          categories: this.weatherPerHour.hourly.map((i) => {
            return Array.from(i.fxTime).slice(11, 16).join("");
          }),
        },
        legend: {
          layout: "vertical",
          align: "right",
          verticalAlign: "center",
          
        },
        tooltip: {
          pointFormatter: function () {
            return this.series.options.name + " : " + this.options.y;
          }
        },
        plotOptions: {
          line: {
            dataLabels: {
              // 开启数据标签
              enabled: false,
            },
            // 关闭鼠标跟踪，对应的提示框、点击事件会失效
            enableMouseTracking: true,
          },
          series: {
            label: {
              connectorAllowed: false
            },
          },
        },
        series: [
          {
            name: "温度",
            data: this.weatherPerHour.hourly.map((i) => {
              return +i.temp;
            }),
            visible: true,
            type: "area",
            color: "#3480fd",
            marker: {
              symbol: "diamond"
            }
          },
          {
            name: "风速",
            data: this.weatherPerHour.hourly.map((i) => {
              return +i.windSpeed;
            }),
            visible: true,
            color: "#3fe0f1",
            marker: {
              symbol: "triangle"
            }
          },
          {
            name: "云量",
            data: this.weatherPerHour.hourly.map((i) => {
              return +i.cloud;
            }),
            visible: false,
          },
          {
            name: "湿度",
            // data: this.mapPrecip
            data: this.weatherPerHour.hourly.map((i) => {
              return +i.precip;
            }),
            visible: false,
          },
          {
            name: "其他",
            data: [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
            ],
            visible: false,
          },
        ],
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500,
              },
              chartOptions: {
                legend: {
                  layout: "horizontal",
                  align: "center",
                  verticalAlign: "top",
                },
              },
            },
          ],
        },
      };
    },
  },
  components: {
    headNavBar,
    weatherShown,
    slicedCalender,
    weatherDetail,
    chartsPerHour,
  },
  store,
  methods: {
    ...mapActions("weather", ["getWeather", "getWeatherPerHour"]),
    ...mapMutations("location", ["SET_LOCATION"]),
    handleSearch(data) {
      this.SET_LOCATION(data);
      getWeatherInfo(this.location);
      getWeatherPreInfo(this.location);
    },
  },
  created() {
    getLocalCity();
    getWeatherInfo(this.location);
    this.getWeatherPerHour(this.location);
  },
};
</script>

<style scoped>

.home {
  color: white;
  background-color: rgba(255, 255, 255, 0.246);
}
.location {
  text-align: center;
  padding-top: 1%;
  font-size: 19px;
  padding-top: 50px;
}
</style>
