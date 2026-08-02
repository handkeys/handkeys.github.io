import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/people',
      name: 'people',
      component: () => import('../views/PeopleView.vue'),
    },
    {
      path: '/instantlyColorful',
      name: 'instantlyColorful',
      component: () => import('../views/instantlyColorful.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'comingSoon',
      component: () => import('../views/comingSoon.vue'),
    },
  ],
})

export default router
