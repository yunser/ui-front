import Vue from 'vue'
import App from './App'
import router from './router'
import http from '@/util/http'
import storage from '@/util/storage'
import ui from './components/index'
import './scss/main.scss'

Vue.use(ui)

Vue.config.productionTip = false

Vue.prototype.$http = http
Vue.prototype.$storage = storage

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
})
