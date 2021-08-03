<template>
  <div class="header-wrap">
    <div class="header-left">
      社区
    </div>
    <div class="header-menu">
      <menu-block :menu="list" />
    </div>
    <div class="header-user">
      user
    </div>
  </div>
</template>
<script>
import list from './index.js'
import MenuBlock from './coms/menu.vue'
export default {
  name: 'HeaderBlock',
  components: {
    MenuBlock
  },
  props: {},
  data() {
    return {
      list
    }
  },
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss">
.header-wrap {
  width: 100%;
  height: 50px;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  .header-left {
    width: 200px;
    text-align: right;
  }
  .header-menu {
    width: calc(100% - 400px);
  }
  .header-user {
    width: 200px;
  }
}

</style>
