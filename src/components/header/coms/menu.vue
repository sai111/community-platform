<template>
  <div class="menu-wrap">
    <div
      v-for="(item, index) in menu"
      :key="index"
      @click="handleClick(item)"
      class="menu-wrap-li"
      :class="{'active': activeMenu==item.key}"
    >
      <i :class="item.icon" class="li-icon" />
      {{ item.label }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'MenuBlock',
  components: {},
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      activeMenu: null
    }
  },
  mounted() {},
  methods: {
    handleClick(item) {
      this.activeMenu = item.key
    }
  }
}
</script>
<style scoped lang="scss">
.menu-wrap {
  width: 100%;
  padding: 0 100px;
  display: flex;
  .menu-wrap-li {
    margin: 0 40px 0 0;
    display: flex;
    align-items: center;
    .li-icon {
      font-size: 24px;
      margin-right: 5px;
    }
    &.active {
      color: #409eff;
    }
  }
}
</style>
