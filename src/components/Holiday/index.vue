<template>
  <div>
    <p class="">{{greatText}}好，摸鱼人！</p>
    <p v-if="6-weeks>0">距离本周末还有{{6-weeks}}天！</p>
    <p v-else>周末啦，好好休息！</p>
    <p>好好上班，好好摸鱼，好好赚钱[加油]</p>
    <template v-for="item in holidayYear">
      <p :key="item.date" v-if="isAfterTime(item.date) && item.holiday">
        距离{{item.name}}假期还有{{getDays(item.date)}}天
      </p>
    </template>
    <p>工作再累 一定不要忘记摸鱼哦！</p>
    <p>有事没事起身去茶水间去厕所去廊道走走</p>
    <p>别老在工位上坐着钱是老板的，但命是自己的</p>
  </div>
</template>

<script>
import {getHolidayYear} from '@/api'
export default {
  data() {
    return {
      greatText: '',
      holidayYear: {},
      weeks: ''
    }
  },
  mounted () {
    const hour = this.$m().format('HH')
    this.greatText = hour < 12 ? '早上' : hour > 12 && hour < 18 ? '下午' : '晚上'
    this.weeks = this.$m().weekday()+1
    getHolidayYear().then(r=>{
      let dayArr = Object.values(r)
      var obj = {};
      this.holidayYear = dayArr.reduce((curs,next)=>{
        obj[next.name] ? "" : obj[next.name] = true && curs.push(next);
        return curs;
      },[]);
      this.$nextTick().then(()=>{
        this.$emit('geted',true)
      })
    })
  },
  methods: {
    isAfterTime(t){
      if(this.$m().isBefore(t)){
        return true
      }else{
        return false
      }
    },
    getDays(t){
      return Math.abs(this.$m().diff(t,'day'))
    }
  }
}
</script>