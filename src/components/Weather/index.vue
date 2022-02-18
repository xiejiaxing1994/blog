<template>
  <div>
    <el-card shadow="hover">
      <div class="top">
        <p class="city">{{tqData.city}}</p>
        <p class="wea ml10">{{tqData.wea}}</p>
        <p class="tem ml10">{{tqData.tem_night}}°C ~ {{tqData.tem_day}}°C</p>
        <p class="date" v-if="showDate">{{date}}</p>
      </div>
      <div class="center">
        <div class="tem_now">
          {{tqData.tem}}°
        </div>
        <div class="win">
          <div class="air"
          :style="{backgroundColor: getAQI()}">空气质量: {{tqData.air}}</div>
          <div class="feng">{{tqData.win}} {{tqData.win_speed}} {{tqData.win_meter}}</div>
        </div>
        <div class="state" v-if="tqData.wea_img">
          <img :src="require(`./images/${tqData.wea_img}.png`)" alt="">
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getHomeTianQi } from '@/api'
export default {
  name: 'Weather',
  data() {
    return {
      tqData: {},
      date: '',
      aqiList: [{
        range: [0, 50],
        color: '#00e400',
      },{
        range: [51, 100],
        color: '#ffde00',
      },{
        range: [101, 150],
        color: '#ff7e00',
      },{
        range: [151, 200],
        color: '#ff0000',
      },{
        range: [201, Infinity],
        color: '#99004c',
      }],
    } 
  },
  props: {
    showDate: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    this.date = this.$m().format('YYYY年MM月DD日 dddd');
    getHomeTianQi({
      appid: 59748365,
      appsecret: '6oK3Oweb',
      vue: 1,
    }).then(r=>{
      this.tqData = r
    })
  },
  methods: {
    getAQI(){
      let color = ''
      this.aqiList.forEach(item=>{
        if(~~this.tqData.air>=item.range[0]&&~~this.tqData.air<=item.range[1]){
          color =  item.color
        }
      })
      return color
    }
  }
}
</script>

<style scoped lang="scss">
  .el-card{
    background: linear-gradient(45deg, #FFE8EA, #EDF3FF, #EDF2FB);
    font-size: 14px;
    max-width: 700px;
  }
  .ml10{
    margin-left: 10px;
  }
  .top{
    display: flex;
    align-items: baseline;
  }
  .city{
    font-size: 20px;
  }
  .date{
    margin-left: auto;
  }
  .center{
    display: flex;
    align-items: flex-end;
    margin-top: 15px;
  }
  .tem_now{
    font-size: 70px;
    color: #ff9628;
  }
  .win{
    margin-left: 20px;
    line-height: 20px;
    .air{
      border-radius: 15px;
      text-align: center;
      color: #fff;
      padding: 3px;
    }
    .feng{
      margin-top: 10px;
    }
  }
  .state{
    margin-left: auto;
    display: flex;
    align-items: center;
    img{
      width: 40px;
    }
  }
</style>
