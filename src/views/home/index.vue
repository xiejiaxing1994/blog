<template>
  <div class="dashboard-container">
    <div>
      <Weather />
      <TypeWrite ref="typewriter" :interval="100">
        <Holiday @geted="getok" />
      </TypeWrite>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Weather from '@/components/Weather'
import Typewriter from 'vue-typewriter'
import TypeWrite from '@/components/TypeWrite'
import Holiday from '@/components/Holiday'
Vue.use(Typewriter);
export default {
  name: 'Dashboard',
  components: {
    Weather,
    TypeWrite,
    Holiday
  },
  data() {
    return {
      obj: {
        output: '',
        isEnd: false,
        speed: 120,
        singleBack: false,
        sleep: 0,
        type: 'custom',
        backSpeed: 40,
        sentencePause: false
      },
    } 
  },
  mounted() {
    },
  methods: {
    getok(val) {
      if(val){
        this.$refs.typewriter.$emit('typewrite')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.write_font{
  font-size: 24px;
  line-height: 34px;
  display: flex;
  align-items: flex-end;
}
</style>
