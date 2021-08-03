<template>
  <div class="sign-wrap section-bg section-margin-bottom">
    <div class="sign-head">
      <div class="sign-head-left">
        <div
          v-for="(item, index) in list"
          :key="index"
          class="sign-left-li"
        >
          {{ item.label }}
        </div>
      </div>
      <div class="sign-head-right">
        {{ activeTip }}
      </div>
    </div>
    <div class="sign-body">
      {{ activeTip }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'Sign',
  components: {},
  props: {},
  data() {
    return {
      activeTip: '已连续签到',
      list: [
        {
          label: '签到',
          value: 'sign',
          count: 0
        },
        {
          label: '说明',
          value: 'des',
          count: 0
        },
        {
          label: '活跃榜',
          value: 'brisk',
          count: 0
        }
      ]
    }
  },
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss">
.sign-wrap {
  width: 100%;
  .sign-head {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e2e2e2;
    .sign-head-left {
      display: flex;
      padding-bottom: 5px;
      .sign-left-li {
        margin-right: 20px;
      }
    }
    .sign-head-right {
      color: #999;
    }
  }
  .sign-body {
    font-size: 14px;
  }
}
</style>
