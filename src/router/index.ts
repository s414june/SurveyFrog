import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    redirect: '/start',
  },
  {
    path: '/start',
    name: 'start',
    component: () => import('../view/start.vue')
  }
  ,
  {
    path: '/survey/:id',
    name: 'survey',
    component: () => import('../view/survey.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/end',
    name: 'end',
    component: () => import('../view/end.vue')
  }
]
// Vue-router新版本中，需要使用createRouter来创建路由
const router = createRouter({
  // 指定路由的模式
  history: createWebHashHistory(),
  routes
})
export default router