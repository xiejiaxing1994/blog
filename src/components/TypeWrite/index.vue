<template>
  <div :style="{visibility: writeStart}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vue-text-dot',
  data(){
    return {
      writeStart: 'hidden'
    }
  },
  props: {
    interval: { type: Number, default: 75 },
  },
  created () {
    this.$on('typewrite', function () {
      setTimeout(() => {
        this.typewriter()
      }, 100);
    })
  },
  methods: {
    typewriter () {
      var $ele = this.$el
      var str = $ele.innerHTML
      console.log(str)
      var progress = 0
      $ele.innerHTML = ''
      this.writeStart = 'visible'
      let interval = this.interval
      var timer = setInterval(function() {
        var current = str.substr(progress, 1)
        if (current === '<') {
          progress = str.indexOf('>', progress) + 1
        } else {
          progress++
        }
        $ele.innerHTML =str.substring(0, progress) + (progress < str.length && (progress & 1) ? '_' : '')
        if (progress >= str.length) {
          clearInterval(timer)
        }
      }, interval)
    }
  }
}
</script>