<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const { icon, title } = context.props
    const vnodes = []

    if (icon) {
      if (icon.includes('my-')) {
        const icons = icon.replace('my-','')
        vnodes.push(<i class={['iconfont','icon-'+icons,'sub-el-icon']}/>)
      } else {
        vnodes.push(<i class={[icon, 'sub-el-icon']} />)
        // vnodes.push(<svg-icon icon-class={icon}/>)
      }
    }

    if (title) {
      vnodes.push(<span slot='title'>{(title)}</span>)
    }
    return vnodes
  }
}
</script>

<style scoped>
.sub-el-icon,.iconfont {
  color: currentColor;
  font-size: 18px;
  margin-right: 10px;
}
.el-menu-item [class^=el-icon-]{
  width: auto;
}
</style>
