import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Player from '@/components/Player'
import firebase from 'firebase'

Vue.use(Router)

let router= new Router({
  routes: [
    {
      path: '*',
      redirect:'/login'
    },
    {
      path: '/',
      redirect:'/login'
    },
    {
      path: '/player',
      component: Player,
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requireAuth = to.matched.some(record=>record.meta.requireAuth);

  if(requireAuth&&!currentUser) next('login')
  else if(!requireAuth&&currentUser) next ('hello')
  else next()
})

export default router