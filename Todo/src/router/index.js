import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_production')

Vue.use(Router)

export const constantRouterMap = [
  {path: '/login', component: _import('login/index'), hidden: true}
]

export default new Router({
  // module: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
