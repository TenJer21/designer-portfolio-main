import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueSmoothScroll from 'vue3-smooth-scroll'
import router from './router/router.js'

const app = createApp(App)
app.use(VueSmoothScroll)
app.use(router)
app.mount('#app')
