import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/login/Login'
import test from '@/components/test'


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
    }
  ]
})