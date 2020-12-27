import Vue from 'vue'
import Router from 'vue-router'
import login from '../view/login/login'
import test from '../view/test/test'
import signup from '../view/signup/signup'
import forget from '../view/forget/forget'
import mainForm from '../view/mian/main'


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
      component: login
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup,
    },
    {
      path: '/forget',
      name: 'forget',
      component: forget
    },
    {
      path: '/main',
      name: 'main',
      component: mainForm
    }
  ]
})