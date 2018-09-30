import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Vote from '@/components/Vote'
import Player from '@/components/Player'
import NotFound from '@/components/NotFound'
import NewSong from '@/components/AddNewSong'
import firebase from 'firebase'
import VueFire from 'vuefire'

Vue.use(Router)
Vue.use(VueFire)

let router = new Router({
    routes: [
        {
            path: '/player',
            component: Player,
            meta: {
                requireAuth: true
            }
        },
        {
          path: '/vote',
          component: Vote,
          meta: {
              requireAuth: true
          }
        },
        {
            path: '/newSong',
            component: NewSong,
            meta: {
                requireAuth: true
            }
          },
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld,
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: {
                guest: true,
            }
        },
        {
            path: '/signup',
            name: 'SignUp',
            component: SignUp,
            meta: {
                guest: true,
            }
        },
        {
            path: '*',
            name: '404',
            component: NotFound,
        }
    ]
})

router.beforeEach((to, from, next) => {
    let currentUser = firebase.auth().currentUser;
    let requireAuth = to.matched.some(record => record.meta.requireAuth)
    let guest = to.matched.some(record => record.meta.guest)

    if (requireAuth) {
        if (!currentUser) {
              next({
                path: '/login',
                params: { nextUrl: to.fullPath }
              })
        } else {
            next ()
        }
    } else if (guest) {
        if (currentUser) router.push('/')
        else next()
    }  else next ()
})

export default router