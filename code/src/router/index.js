import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/login/Login'
import test from '../view/test/test'
import signup from '../view/signup/signup'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'test',
      component: test,
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup,
      // children:[
      //   {
      //     path:'signup',
      //     component: () => import('../components/pwdRequired'),
      //     name:'pwdRequired',
      //   }
      // ]
    }
  ]
})