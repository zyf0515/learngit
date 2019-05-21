import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Shequ from './views/Shequ.vue'
import Self from './views/Self.vue'
import News from './views/News.vue'


import './assets/css/normalize.css'
import './assets/css/mi.css'
import './assets/js/flexible.min.js'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/self',
      name: 'self',
      component: Self
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/Shequ',
      name: 'Shequ',
      component:Shequ
    },
  ]
})
