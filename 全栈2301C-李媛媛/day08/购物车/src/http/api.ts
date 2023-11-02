import http from "./http";
// 首页轮播
export const bannerApi = (params: any) => http.get('/banner/list', params)
// 商品列表
export const shoplistApi = (params: any) => http.post('/shop/goods/list/v2', params)
// 商品分类
export const categoryApi = (params: any) => http.post('/shop/goods/category/all', params)
// 二级分类
export const shoplistApis = (params: any) => http.post('/shop/goods/list/v2', params)