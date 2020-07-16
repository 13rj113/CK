import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/page/index'
import login from '@/page/login'
import policyDetail from '@/page/policy/policyDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
      meta: {
        keepalive: false
      }
    }, {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        keepalive: true
      }
    }, {
      path: '/policyDetail',
      name: 'policyDetail',
      component: policyDetail,
      meta: {
        keepalive: true
      }
    }
  ]
})
