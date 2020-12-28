import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/login/login'
import test from '../view/test/test'
import signup from '@/view/signup/signup'
import forget from '@/view/forget/forget'
import mainForm from '@/view/mian/main'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'test',
    //   component: test,
    // },
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/signup',
      component: signup,
      children:[
        {
          path:'',
          name:'form',
          component:()=>import('@/view/signup/components/form')
        }
      ]
    },
    {
      path: '/forget',
      component: forget,
      children: [
        {
          path: '',
          name: 'mailCheck',
          component: () => import('@/view/forget/components/emailCheck')
        },
        {
          path: '',
          name: 'recovery',
          component: ()=> import('@/view/forget/components/recovery')
        },
        {
          path: '',
          name: 'newPwd',
          component: ()=> import('@/view/forget/components/newPwd')
        },
        {
          path: '',
          name: 'finish',
          component: ()=> import('@/view/forget/components/finish')
        }

      ]
    },
    {
      path: '/main',
      name: 'main',
      component: mainForm
    }
  ]
})