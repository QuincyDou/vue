import router from './router'
import NProgress from 'nprogress' //Progress进度条
import 'nprogress/nprogress.css' //Progress进度条样式
import {getToken} from "./utils/auth" //验权

function hasPermission(roles, permissionRoles) {
  if (roles.includes('admin') || !permissionRoles) {
    return true
  }
  return roles.some(role => permissionRoles.includes(role))
}

const whiteList = ['/login'] //不重定向白名单

router.beforeEach((to, from, next) => {
  NProgress.start();
  if (getToken()) {
    if (to.path === '/login') {
      next({path: '/'});
    } else {

    }
  } else {
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next('/login');
      NProgress.done();
    }
  }
})

router.afterEach(() => {
  NProgress.done();
})
