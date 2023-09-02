import request from '@/utils/request'

// 获取搜索商品列表的数据
export const getProList = (obj) => {
  const { sortType, sortPrice, categoryId, goodsName, page } = obj
  return request.get('/goods/list', {
    params: {
      sortType, // all-按综合搜索(默认)，sales-按销量搜索，price-按价格搜索
      sortPrice, // 0-价格从低到高， 1-价格从高到低
      categoryId,
      goodsName,
      page
    }
  })
}

// 获取商品详情数据
export const getProDetail = (goodsId) => {
  return request.get('/goods/detail', {
    params: {
      goodsId
    }
  })
}

// 获取商品评价
export const getProComments = (goodsId, limit) => {
  return request.get('/comment/listRows', {
    params: {
      goodsId,
      limit
    }
  })
}
