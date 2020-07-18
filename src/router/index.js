import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import login from '@/page/login'
import policyDetail from '@/page/policy/policyDetail'
import policy from '@/page/policy/policy'
import platform from '@/page/platform/platform'

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
    }, {
      path: '/policy',
      name: 'policy',
      component: policy,
      meta: {
        keepalive: true
      }
    }, {
      path: '/platform',
      name: 'platform',
      component: platform,
      meta: {
        keepalive: true
      }
    }
  ]
})
