import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: () => import('@/views/login') },
  {
    path: '/',
    component: () => import('@/views/layout'),
    redirect: '/home',
    children: [
      { path: '/home', component: () => import('@/views/layout/home.vue') },
      { path: '/category', component: () => import('@/views/layout/category.vue') },
      { path: '/cart', component: () => import('@/views/layout/cart.vue') },
      { path: '/user', component: () => import('@/views/layout/user.vue') }
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

export default router
