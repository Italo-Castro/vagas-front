import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import mitt from "mitt"

//criar a instancia do pacote mitt
const emitter = mitt();

const app = createApp(App);

app.config.globalProperties.emitter = emitter;

// createApp(App).use(store).use(router).mount('#app')


//associar a instancia do vue com o elemento html de id app
app.use(store).use(router).mount("#app")