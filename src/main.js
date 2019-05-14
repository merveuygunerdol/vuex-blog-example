// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import PortalVue from 'portal-vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(PortalVue)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDnvh5Qaf0MNcGul6pNDRDa3h4RF-xPMg8',
    libraries: 'places' // necessary for places input
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
