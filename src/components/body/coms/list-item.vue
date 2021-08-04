<template>
  <div class="list-item">
    <div class="list-item-img">
      <img :src="item.img" alt="">
    </div>
    <div class="list-item-wrap">
      <div class="wrap-top">
        <div class="wrap-top-tip">
          {{ item.statusName }}
        </div>
        <div class="wrap-top-label">
          {{ item.label }}
        </div>
      </div>
      <div class="wrap-bottom">
        <div class="bottom-name">
          {{ item.workTypeName }}
        </div>
        <div class="bottom-time">
          {{ item.time }}
        </div>
      </div>
    </div>
    <div class="list-item-badge">
      <div class="right-top">
        top
      </div>
      <div class="right-bottom">
        <i class="el-icon-s-comment" />
        <span class="bedge-count" v-if="item&&item.questions">{{ item.questions.length }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ListItem',
  components: {},
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss">
.list-item {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  line-height: 22px;
  padding: 16px;
  border-bottom: 1px dotted #e2e2e2;
  font-size: 14px;
  .list-item-img {
    width: 45px;
    height: 45px;
    img{
      width: 100%;
      height: 100%;
      display: inline-block;
    }
  }
  .list-item-wrap {
    width: calc(100% - 125px);
    padding: 0 16px;
    box-sizing: border-box;
    .wrap-top {
      display: flex;
      align-items: center;
      height: 26px;
      .wrap-top-tip {
        color: #409EFF;
        height: 16px;
        line-height: 16px;
        padding: 0 5px;
        margin-right: 10px;
        font-size: 12px;
        border: 1px solid #409EFF;
      }
      .wrap-top-label {
        font-size: 14px;
      }
    }
    .wrap-bottom {
      color: #999;
      display: flex;
      font-size: 13px;
      .bottom-time {
        margin: 0 16px;
      }
    }
  }
  .list-item-badge {
    width: 80px;
    text-align: right;
    .right-top {
    }
    .right-bottom {
      color: #999;
      .bedge-count {}
    }
  }
}
</style>
