<template>
  <div class="home">
    <headNavBar
      title="主页"
      @search-clicked="handleSearch($event)"
    ></headNavBar>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="location">{{ locate }}</div>
    <weatherShown :data="weather"></weatherShown>
    <chartsPerHour
      :weatherInfo="weatherPerHour.hourly"
      :options="options"
    ></chartsPerHour>
    <slicedCalender :location="locate"></slicedCalender>
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
    ...mapGetters("user", ["userId"]),
    ...mapGetters("location", ["locate"]),
    options() {
      return {
        title: {
          text: "24小时天气预报",
          style:{
            fontSize: "17px",
            fontWeight: "400",
            color: "#eeeeee"
          }
        },
        yAxis: {
          title: {
            text: "温度/湿度",
            style:{
              fontSize: '11px',
              fontWeight: '300',
              color: "#dddddd"
            }
          },
          labels: {
            formatter: function () {
              return this.value;
            },
            style:{
              fontSize: '9px',
              fontWeight: '300',
              color: "#dddddd"
            }
          },
        },
        chart: {
          backgroundColor: "#ffffff00",
          borderRadius: '4em',
          style:{
            fontSize: "17px",
            fontWeight: "400",
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
              color: "#dddddd"
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
            color: "#32e0c4",
            marker: {
              enabled: false,
              states: {
                hover: {
                  enabled: true
                }
              }
            }
          },
          {
            name: "风速",
            data: this.weatherPerHour.hourly.map((i) => {
              return +i.windSpeed;
            }),
            visible: true,
            color: "#c62a88",
            type: 'line',
            marker: {
              enabled: false,
              states: {
                hover: {
                  enabled: true
                }
              }
            }
          },
          {
            name: "云量",
            data: this.weatherPerHour.hourly.map((i) => {
              return +i.cloud;
            }),
            visible: false,
            type: 'line',
            marker: {
              enabled: false,
              states: {
                hover: {
                  enabled: true
                }
              }
            }
          },
          {
            name: "湿度",
            // data: this.mapPrecip
            data: this.weatherPerHour.hourly.map((i) => {
              return +i.precip;
            }),
            visible: false,
            type: 'line',
            marker: {
              enabled: false,
              states: {
                hover: {
                  enabled: true
                }
              }
            }
          }
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
      getWeatherInfo(this.locate);
      getWeatherPreInfo(this.locate);
    },
  },
  created() {
    getLocalCity();
    getWeatherInfo(this.locate);
    this.getWeatherPerHour(this.locate);
  },
};
</script>

<style scoped>

.home {
  color: white;
}
.location {
  text-align: center;
  padding-top: 1%;
  font-size: 19px;
  padding-top: 50px;
}
</style>
