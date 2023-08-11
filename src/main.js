import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import axios from "axios"
import store from "./store/index.js"
axios.defaults.baseURL="https://api.atlasmode.ir/v1/"
const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
