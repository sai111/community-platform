<template>
  <div class="list-wrap">
    <div class="list-top section-bg section-margin-bottom">
      <div class="top-block section-bg">
        <div class="top-left">
          置顶
        </div>
        <div class="top-right">
          去签到
        </div>
      </div>
      <div class="top-list">
        <div
          v-for="(item, index) in hotList"
          :key="index"
          class="top-list-li"
        >
          <list-item :item="item" />
        </div>
      </div>
    </div>
    <div class="list-body section-bg section-margin-bottom">
      <div class="list-tabs">
        <div
          v-for="(item, index) in tabList"
          :key="'list-li-'+index"
          :class="{'active': tabActive==item.value}"
          class="list-tabs-li"
          @click="tabChange(item)"
        >
          {{ item.label }}
        </div>
      </div>
      <div class="list-containter">
        <div
          v-for="(item, index) in dataList"
          :key="index"
          class="list-containter-li"
        >
          <list-item :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ListItem from './list-item.vue'
export default {
  name: 'ListBlock',
  components: { ListItem },
  props: {},
  data() {
    return {
      tabActive: 1,
      tabList: [
        {
          label: '综合',
          value: 1
        },
        {
          label: '未结',
          value: 2
        },
        {
          label: '已结',
          value: 3
        },
        {
          label: '精华',
          value: 4
        }
      ],
      // status 1 分享 2 提问
      // type 1 精华 2 热门
      list: [
        {
          img: 'http://admin.dev.toimc.com:22000/img/header.jpg',
          label: '大前端课程中权限内容和实现方式？',
          statusName: '分享',
          status: 1,
          type: 1,
          workType: 1,
          workTypeName: 'IT学习者',
          typeName: '精华',
          hot: true,
          time: '2020-08-2',
          questions: []
        },
        {
          img: 'http://api.dev.toimc.com:22000/20200320/a05a84ae-b99d-4e0c-8bad-aba4ff60f91a.png',
          label: '大前端社区欢迎你！！！',
          statusName: '提问',
          status: 2,
          type: 2,
          typeName: '热门',
          workType: 2,
          workTypeName: 'test',
          hot: true,
          time: '2020-08-21',
          questions: [
            { label: '俄式' }
          ]
        },
        {
          img: 'http://admin.dev.toimc.com:22000/img/header.jpg',
          label: '最近更新webpack部分',
          statusName: '分享',
          status: 1,
          type: 1,
          workType: 1,
          workTypeName: 'IT学习者',
          typeName: '精华',
          hot: false,
          time: '2020-08-2',
          grade: 'VIP1',
          questions: []
        }
      ],
      hotList: [],
      dataList: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    tabChange(item) {
      this.tabActive = item.value
    },
    getData() {
      console.log(this.list, 'lsit')
      if (this.list && this.list.length > 0) {
        this.hotList = this.list.filter((v) => v.hot)
        this.dataList = this.list.filter((v) => !v.hot)
      }
    }
  }
}
</script>
<style scoped lang="scss">
.list-wrap {
  width: 100%;
  height: 100%;
  .list-top {
    .top-block {
      font-size: 14px;
      line-height: 30px;
      padding: 0 15px;
      display: flex;
      justify-content: space-between;
      .top-left {
        color: #666;
      }
      .top-right {
        color: rgb(255, 87, 34);
        cursor: pointer;
      }
    }
  }
  .list-body {
    .list-tabs {
      display: flex;
      line-height: 30px;
      padding: 10px;
      box-shadow: 0 1px 2px 0 rgba(0,0,0, 0.05);
      box-sizing: border-box;
      .list-tabs-li {
        cursor: pointer;
        font-size: 14px;
        padding: 0 16px;
        color: #666;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          width: 1px;
          height: 10px;
          transform: translateY(-50%);
          background: #e2e2e2;
        }
        &:first-child {
          &::before {
            background: transparent;
          }
        }
        &.active {
          color: #409EFF;
        }
      }
    }
  }
}
</style>
