import Vue from 'vue'
import Router from 'vue-router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import HelloWorld from '@/components/HelloWorld'
import AppIndex from '@/components/AppIndex'
import Login from '@/components/Login'
import Home from '@/components/Home'
import LibraryIndex from '@/components/library/LibraryIndex'
import SideMenu from '@/components/library/SideMenu'

Vue.use(Router)
Vue.use(Element)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sideMenu',
      name: 'SideMenu',
      component: SideMenu
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // Home页不需要被访问
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/library',
          name: 'LibraryIndex',
          component: LibraryIndex
        }
      ]
    }
  ]
})
