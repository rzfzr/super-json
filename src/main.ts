import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

/* eslint @typescript-eslint/no-var-requires: "off" */


declare module 'vue/types/vue' {
  interface Vue {
    $dir: string;
  }
}
Vue.prototype.$dir = require('path').join(require("os").homedir(), "Desktop") + "\\super-json\\"

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
