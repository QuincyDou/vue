import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'

const _import = require('./_import_production')

Vue.use(Router)

export const constantRouterMap = [
  {path: '/login', component: _import('login/index'), hidden: true},
  {
    path: '/',
    component: Layout,
    name: '首页',
    hidden: true
  }
]

export default new Router({
  // module: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
