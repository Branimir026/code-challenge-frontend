import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App).use(router).use(store)

app.config.globalProperties.$http=axios

const token = localStorage.getItem('token');

if (token) {
  app.config.globalProperties.$http.defaults.headers.common['authorization'] = token;
} else {
  app.config.globalProperties.$http.defaults.headers.common['authorization'] = null;
}

app.mount('#app')
