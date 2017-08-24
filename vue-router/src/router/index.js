import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/params'
import Error404 from '@/components/error404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      // component: Hello
      components: {
        default: Hello,
        left: Hi1,
        right: Hi2
      }
    }, {
      path: '/hi',
      name: 'Hi',
      component: Hi,
      alias: '/quincy',
      children: [
        {path: '/hi/hi1', name: 'Hi1', component: Hi1},
        {path: '/hi/hi2', name: 'Hi2', component: Hi2}
      ]
    }, {
      path: '/params/:username/:password',
      name: 'params',
      component: Params,
      /*beforeEnter: (to, from, next) => {
        console.log('准备进入params路由模版');
        next();
        // next(false);
        // next({path: '/'});
      }*/
    }, {
      path: '/goHome',
      redirect: '/'
    }, {
      path: '/goParams/:username/:password',
      redirect: '/params/:username/:password'
    }, {
      path: '*',
      component: Error404
    }
  ]
})
