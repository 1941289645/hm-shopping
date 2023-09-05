import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Layout from '@/views/layout'
import Home from '@/views/layout/home'
import Category from '@/views/layout/category'
import Cart from '@/views/layout/cart'
import User from '@/views/layout/user'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: () => import('@/views/login') },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: '/home', component: Home },
      { path: '/category', component: Category },
      { path: '/cart', component: Cart },
      { path: '/user', component: User }
    ]
  },
  { path: '/search', component: () => import('@/views/search') },
  { path: '/searchlist', component: () => import('@/views/search/list.vue') },
  { path: '/prodetail/:id', component: () => import('@/views/prodetail') },
  { path: '/pay', component: () => import('@/views/pay') },
  { path: '/myorder', component: () => import('@/views/myorder') }
]

const router = new VueRouter({
  routes
})

// 定义一个数组，专门用户存放所有需要访问的页面
const authUrls = ['/pay', '/myorder']

// 全局前置导航守卫
// 1. to  往哪里去， 到哪去的路由信息对象
// 2. from 从哪里来， 从哪来的路由信息对象
// 3. next() 是否放行
//  如果next()调用，就是放行
//  next(路径) 拦截到某个路径页面
router.beforeEach((to, from, next) => {
  // console.log(to, from, next)
  // 看to.path是否在authUrls中存在
  if (!authUrls.includes(to.path)) {
    // 非权限页面，直接放行
    next()
    return
  }
  // 是权限页面，判断是否登录
  const token = store.getters.token
  if (token) {
    // 已登录，放行
    next()
  } else {
    next('/login')
  }
})

export default router
