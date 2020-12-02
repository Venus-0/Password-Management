import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/login/Login'
import test from '@/components/test'
import signup from '../view/signup/signup'


Vue.use(Router)

export default new Router({
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
      component: signup
    }
  ]
})