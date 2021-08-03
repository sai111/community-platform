<template>
  <div class="tips-wrap section-bg section-margin-bottom">
    <div class="section-head">温馨通道</div>
    <div class="tips-list">
      <div
        v-for="(item, index) in list"
        :key="'tips-wrap-li-'+index"
        class="tips-wrap-li"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tips',
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
.tips-wrap {
  width: 100%;
  .tips-list {
    width: 100%;
    margin-top: 10px;
    .tips-wrap-li {
      line-height: 25px;
      font-size: 14px;
    }
  }
}
</style>
