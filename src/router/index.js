import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
			meta: {
				requiresGuest: true
			}
    },
    {
      path: '/encoder',
      name: 'encoder',
      component: () => import('../views/EncoderView.vue'),
			meta: {
				requiresAuth: true
			}
    }
  ]
})

router.beforeEach((to, from, next) => {

  if(to.matched.some(record => record.meta.requiresAuth)) {

    if(!store.getters.isLoggedIn) {
      // redirect to the login page
      next('/login');
    } else {
      next();
    }

  } else if (to.matched.some(record => record.meta.requiresGuest)) {

    if(store.getters.isLoggedIn) {
      // redirect to the encoder page
      next('/encoder');
    } else {
      next();
    }

  } else {
    next();
  }
});

export default router
