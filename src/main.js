import Vue from "vue"
import App from "./App.vue"
import router from './plugins/router'
import vuetify from './plugins/vuetify'

import { initContract } from "./utils"

Vue.config.productionTip = false

window.nearInitPromise = initContract()
  .then(() => {

    new Vue({
      router,
      vuetify,
      render: h => h(App),
    }).$mount("#app")

  })
  