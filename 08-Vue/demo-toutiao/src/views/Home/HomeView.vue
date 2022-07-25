<template>
  <div class="home-container">
    <!-- 标题栏 -->
    <van-nav-bar title="油条" fixed />

    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <!-- 使用 ArticleInfo 组件 -->
        <ArticleInfo
          v-for="item in articlesList"
          :key="item.id"
          :title="item.title"
          :author="item.aut_name"
          :cmt-count="item.comm_count"
          :date="item.pubdate"
          :cover="item.cover"
        ></ArticleInfo>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getArticleListAPI } from '@/api/articleAPI.js'
import ArticleInfo from '@/components/ArticleInfo.vue'

export default {
  name: 'HomeView',
  components: { ArticleInfo },
  data() {
    return {
      // 页码值
      page: 1,
      // 每页的文章数
      limit: 10,
      articlesList: [],
      // 是否正在加载下一页数据
      loading: false,
      // 是否加载完所有数据
      finished: false,
      // 是否正在下拉刷新
      refreshing: false
    }
  },
  methods: {
    async initArticeList() {
      const { data: res } = await getArticleListAPI(this.page, this.limit)

      this.articlesList = [...this.articlesList, ...res]
      this.loading = false

      if (res.length === 0) {
        this.finished = true
      }
    },
    onLoad() {
      this.page++
      this.initArticeList()
    },
    onRefresh() {
      console.log('dewsd')
    }

  },
  created() {
    this.initArticeList()
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 46px 0 50px 0;

  /deep/ .van-nav-bar__title {
    color: white;
  }

  .van-nav-bar {
    background-color: rgb(88, 175, 230);
  }
}
</style>
