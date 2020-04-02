import './bootstrap.js'

import Vue from 'vue'
import vuetify from '@/plugins/vuetify'

import App from './App.vue'
import router from './router'
import store from './store'

import PRXVuetifyComponents from '@praxxys/vuetify-components'
import PRXVueUtils from '@praxxys/vue-utils'

Vue.config.productionTip = false

Vue.use(PRXVuetifyComponents);
Vue.use(PRXVueUtils);


var app = {

	init () {
		if (window.cordova !== undefined) {
			document.addEventListener('deviceready', this.on_deviceready.bind(this), false)
			Vue.prototype.$cordova = this
		} else {
			this.setup()
		}
	},

	on_deviceready () {
		this.setup()
	},

	setup () {
		// require('./mixins/global')

		new Vue({
			vuetify,
			el: '#app',
			render: h => h(App),

			router,
			store,

			mounted () {
				this.init()
			},

			methods: {
				init () {
					//this.navigate()
				},

				navigate () {
					//this.$router.replace({ name: 'home' })
				}
			}
		})
	}
}

app.init()
