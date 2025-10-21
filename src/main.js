import { createApp } from 'vue'
import router from './router'
import pinia from './stores'
import './style.css'
import App from './App.vue'

// 創建應用程式
const app = createApp(App)

// 安裝插件
app.use(pinia)
app.use(router)

// 掛載應用程式
app.mount('#app')
