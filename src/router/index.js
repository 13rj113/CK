import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import login from '@/page/login'
import policyDetail from '@/page/policy/policyDetail'
import policy from '@/page/policy/policy'
import technology from '@/page/technology/technology'
import park from '@/page/park/park'
import headhunting from '@/page/technology/headhunting'
import achievement from '@/page/achievement/achievement'
import demandDetail from '@/page/demand/demandDetail'
import technologyDetail from '@/page/technology/technologyDetail'
import demand from '@/page/demand/demand'

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
      path: '/technology',
      name: 'technology',
      component: technology,
      meta: {
        keepalive: true
      }
    }, {
      path: '/park',
      name: 'park',
      component: park,
      meta: {
        keepalive: true
      }
    }, {
      path: '/headhunting',
      name: 'headhunting',
      component: headhunting,
      meta: {
        keepalive: true
      }
    }, {
      path: '/achievement',
      name: 'achievement',
      component: achievement,
      meta: {
        keepalive: true
      }
    }, {
      path: '/demandDetail',
      name: 'demandDetail',
      component: demandDetail,
      meta: {
        keepalive: true
      }
    }, {
      path: '/technologyDetail',
      name: 'technologyDetail',
      component: technologyDetail,
      meta: {
        keepalive: true
      }
    },{
      path: '/demand',
      name: 'demand',
      component: demand,
      meta: {
        keepalive: true
      }
    }

  ]
})
