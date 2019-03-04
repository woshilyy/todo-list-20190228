import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import todo from '@/components/todo'
import resume from '@/components/resume'
import { resolve } from 'path';

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/todo',
      name: 'todo',
      //改造成懒加载
      component: resolve => require(['@/components/todo.vue'], resolve)
    },
    {
      path: '/resume',
      name: 'resume',
      component: resume
    },
    {
      path:'/compute',
      name:'compute',
      component:resolve=>require(['@/components/compute.vue'],resolve)
    },
    {
      path:'/search',
      name:'search',
      component:resolve=>require(['@/components/search.vue'],resolve)
      
    },
    {
      path:'/axios',
      name:'axios',
      component:resolve=>require(['@/components/axios.vue'],resolve)
    },
    {
      path:'/father',
      name:'father',
      component:resolve=>require(['@/components/father.vue'],resolve)
    }
  ]
})
