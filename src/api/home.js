import request from '@/utils/request'



//首页轮播图
export function getBanner() {
	return request({
		url: '/index/banner',
		method: 'get'
	})
}
//首页 热门推荐
export function getHotList() {
	return request({
		url: '/index/hotList',
		method: 'get'
	})
}

//首页  猜你喜欢
export function getLike() {
	return request({
		url: '/index/guessLike',
		method: 'get'
	})
}
//首页  通知
export function getNotify() {
	return request({
		url: '/index/getNotify',
		method: 'get'
	})
}

//首页  菜单
export function getMenus() {
	return request({
		url: '/index/menu',
		method: 'get'
	})
}
export function newProduct() {
	return request({
		url: '/index/newProduct',
		method: 'get'
	})
}

export default {
	getMenus,
	getLike,
	getHotList,
	getBanner,
	newProduct,
	getNotify
}
