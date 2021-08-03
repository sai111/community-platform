<template>
  <div class="hot-wrap section-bg section-margin-bottom">
    <div class="section-head">本周热议</div>
    <div class="hot-list">
      <div
        v-for="(item, index) in list"
        :key="'hot-wrap-li-'+index"
        class="hot-wrap-li"
      >
          {{ item.label }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HotList',
  components: {},
  props: {},
  data() {
    return {
      list: [
        { label: '测试测试测试', value: '' },
        { label: '测试测试测试', value: '' },
        { label: '测试测试测试', value: '' },
        { label: '测试测试测试', value: '' },
        { label: '测试测试测试', value: '' }
      ]
    }
  },
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss">
.hot-wrap {
  width: 100%;
  .hot-list {
    width: 100%;
    margin-top: 10px;
    .hot-wrap-li {
      line-height: 25px;
      font-size: 14px;
    }
  }
}
</style>
