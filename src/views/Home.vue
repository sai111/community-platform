<template>
  <div class="home">
    <header-block />
    <body-block />
  </div>
</template>
<script>
import HeaderBlock from '../components/header/index.vue'
import BodyBlock from '../components/body/index.vue'
export default {
  name: 'Home',
  components: {
    HeaderBlock,
    BodyBlock
  }
}
</script>
<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
}
</style>
