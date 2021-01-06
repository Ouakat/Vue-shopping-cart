import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFinalModal from 'vue-final-modal'
createApp(App).use(VueFinalModal())
createApp(App).use(store).use(router).mount('#app')