import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import mitt from 'mitt';
export const emitter = mitt();

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import store from './store';


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
app.use(ElementPlus)
app.use(store)
app.mount('#app')