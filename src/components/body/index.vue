<template>
  <div class="body-wrap">
    <panel-block />
    <div class="body-container">
      <div class="body-container-left">
        <list-block />
      </div>
      <div class="body-container-right">
        <tips />
        <sign />
        <ads />
        <hot-list />
        <links />
      </div>
    </div>
  </div>
</template>
<script>
import PanelBlock from './panel.vue'
import ListBlock from './coms/list.vue'
import HotList from './coms/HotList.vue'
import Tips from './coms/Tips.vue'
import Sign from './coms/Sign.vue'
import Links from './coms/Links.vue'
import Ads from './coms/Ads.vue'
export default {
  name: 'BodyBlock',
  components: {
    PanelBlock,
    HotList,
    Tips,
    Sign,
    Links,
    Ads,
    ListBlock
  },
  props: {},
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss">
.body-wrap {
  width: 100%;
  height: calc(100% - 50px);
  // overflow: hidden;
  .body-container {
    width: 100%;
    padding: 0 16px;
    height: calc(100% - 82px);
    display: flex;
    box-sizing: border-box;
    .body-container-left {
      width: calc(100% - 400px);
      height: 100%;
      margin-right: 16px;
    }
    .body-container-right {
      width: 400px;
      height: 100%;
    }
  }
}
</style>
