import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import layout from '@/components/layout'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    { path: '/',  name: 'login',  component: login },
    { path: '/layout',  name: 'layout',  component: layout },
  ]
})
