import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Icon from 'vue-awesome/components/Icon'
import App from './App'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.component('icon', Icon)

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />'
})
