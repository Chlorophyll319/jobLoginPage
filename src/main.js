import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'
import pinia from './stores'
import './style.css'
import App from './App.vue'

// 設定路由
const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(routes),
})

// 創建應用程式
const app = createApp(App)

// 安裝插件
app.use(pinia)
app.use(router)

// 掛載應用程式
app.mount('#app')
