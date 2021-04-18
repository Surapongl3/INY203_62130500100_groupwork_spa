import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/tailwind.css'
import Catmodel from './components/catmodel.vue'

let app = createApp(App)
app.component('catmodel', Catmodel)
app.use(router).use(VueAxios,axios).mount('#app')
