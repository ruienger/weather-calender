<template>
<transition appear name="flow-up">
  <div>
    <div id="container" style="min-width:400px;min-height:300px"></div>
  </div>
</transition>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Highcharts, { chart, Chart } from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsDrilldown from 'highcharts/modules/drilldown';
import Highcharts3D from 'highcharts/highcharts-3d';
HighchartsMore(Highcharts)
HighchartsDrilldown(Highcharts);
Highcharts3D(Highcharts);
export default {
    name: 'chartsPerHour',
    props:{
      options:{}
    },
    data(){
      return {
        chart: {
        }
      }
    },
    watch:{
      options:function(){
        console.log('ChartsDataUpdate')
        this.reDraw()
      }
    },
    methods:{
        initChart() {
            this.chart = new Highcharts.Chart('container', this.options);
            console.log(this.chart)
        },
        reDraw(){
          let length = this.chart.series.length
          for(let i=0; i<length; i++){
            this.chart.series[i].setData(this.options.series[i].data)
          }
          this.chart.redraw()
        }
    },
    mounted(){
      this.initChart()
    }
    
}
</script>

<style>
#container{
  padding: 0 1em;
  margin: 1em 0;
  background-color: #46637aa2;
  box-sizing: border-box;
}
@media screen and (min-width: 180px) and (max-width: 500px){
  #container{
    padding: 0 5px;
    margin: 5px 0;
    background-color: #46637aa2;
    box-sizing: border-box;
  }
}
.flow-up-enter-active, .flow-up-leave-active{
  transition: all .4s .2s;
}
.flow-up-enter, .flow-up-leave-to{
  transform: translateY(2em);
  opacity: 0;
}
</style>