import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/login/Login'
import test from '../view/test/test'
import signup from '../view/signup/signup'
import forget from '../view/forget/forget'


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
    },
    {
      path: '/forget',
      name: 'forget',
      component: forget
    }
  ]
})