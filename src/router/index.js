import { createRouter, createWebHashHistory } from 'vue-router'
import Vote from '../views/vote.vue'

const routes = [
  {
    path: '/',
    name: 'Vote',
    component: Vote
  },
  {
    path: '/breed',
    name: 'breed',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/breed.vue')
  },
  {
    path: '/favourite',
   name: 'favourite',
   component: () => import(/* webpackChunkName: "about" */'../views/favorite.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
