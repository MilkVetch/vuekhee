import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import WorkExp from '@/components/WorkExp'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        color: '#2c3e50',
        ifg: true
      }
    },
    {
      path: '/About',
      name: 'About',
      component: About,
      meta: {
        color: '#4AB19A',
        ifg: false
      }
    },
    {
      path: '/Education',
      name: 'Education',
      component: Education,
      meta: {
        color: '#2980b9',
        ifg: false
      }
    },
    {
      path: '/Skills',
      name: 'Skills',
      component: Skills,
      meta: {
        color: '#8e44ad',
        ifg: false
      }
    },
    {
      path: '/WorkExp',
      name: 'WorkExp',
      component: WorkExp,
      meta: {
        color: '#27ae60',
        ifg: false
      }
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact,
      meta: {
        color: '#2ed573',
        ifg: false
      }
    }
  ]
})
