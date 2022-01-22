/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [{
	path: '/',
	component: () => import('@/views/layouts/index'),
	redirect: '/home',
	meta: {
		title: '首页',
		keepAlive: false
	},
	
	children: [{
		path: '/nullPage',
		name: 'NullPage',
		component: () => import('@/views/home/nullPage'),
		meta: {
			title: '出错啦！',
			keepAlive: false,
			tabBar:false,
			navBar:true
		}
	},{
			path: '/home',
			name: 'Home',
			component: () => import('@/views/home/index'),
			meta: {
				title: '首页',
				keepAlive: false,
				tabBar:true,  //是否显示底部标签栏 true 显示 false不显示
				navBar:false, //是否显示顶部导航栏 true 显示 false不显示
				//requireAuth:true //是否需要登录才能进
			}
		},
		{
			path: '/register',
			name: 'Register',
			component: () => import('@/views/home/register'),
			meta: {
				title: '注册',
				keepAlive: false,
				tabBar:false,
				navBar:false
			}
		},
		{
			path: '/login',
			name: 'Login',
			component: () => import('@/views/home/login'),
			meta: {
				title: '登录',
				keepAlive: false,
				tabBar:false,
				navBar:false
			}
		},
		{
			path: '/search',
			name: 'Search',
			component: () => import('@/views/search/Search'),
			meta: {
				title: '搜索商品',
				keepAlive: false,
				tabBar:true,
				navBar:false
			}
		},
		{
			path: '/ProductList',
			name: 'ProductList',
			component: () => import('@/views/product/ProductList'),
			meta: {
				title: '全部商品',
				keepAlive: false,
				tabBar:true,
				navBar:false
			}
		},
	]
}]
