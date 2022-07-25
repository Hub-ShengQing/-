// 文章相关的 API 接口
import request from '@/utils/request.js'

// 向外导出一个 API 函数
export const getArticleListAPI = function(_page, _limit) {
  return request.get('/articles', {
    params: {
      _page,
      _limit
    }
  })
}
