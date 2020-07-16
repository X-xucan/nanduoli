// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import Video from 'video.js'
import 'video.js/dist/video-js.css'

import {Button,DatetimePicker,Popup,Field,Picker,Uploader,Dialog,Step, Steps} from 'vant'
Vue.use(Picker).use(Popup ).use(Button).use(DatetimePicker).use(Popup).use(Field).use(Uploader).use(Dialog).use(Step).use(Steps)

Vue.prototype.$video = Video
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
