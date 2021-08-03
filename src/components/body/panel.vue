<template>
  <div class="panel-container">
    <div class="panel-left">
      <div
        v-for="(item, index) in list"
        :key="'panel-li-'+index"
        class="panel-li"
        :class="[{
          'panel-li-extra': item.extra
        }]"
      >
        {{ item.label }}
      </div>
    </div>
    <div class="panel-right">
      <span class="panel-right-search">
        <i class="el-icon-search" />
      </span>
      <el-button type="primary">主要按钮</el-button>
    </div>
  </div>
</template>
<script>
import list from './index.js'
export default {
  name: 'PanelBlock',
  components: {},
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
.panel-container {
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding: 0 50px;
  margin-bottom: 15px;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(0,0,0, 0.05);
  display: flex;
  align-items: center;
  .panel-left {
    display: flex;
    align-items: center;
    width: calc(100% - 180px);
    .panel-li {
      padding: 0 20px;
    }
    .panel-li-extra {
      width: 1px;
      height: 10px;
      background: #e2e2e2;
      padding: 0;
    }
  }
  .panel-right {
    width: 180px;
    display: flex;
    align-items: center;
    .panel-right-search {
      .el-icon-search {
        font-size: 20px;
         margin-right: 20px;
      }
    }
  }
}
</style>

