// import '@fortawesome/fontawesome-free/css/all.css';

window.moment = require('moment')

window.axios = require('axios')
window._ = require('lodash')
window.$ = window.jQuery = require('jquery');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.axios.defaults.headers.common['App-Key'] = process.env.VUE_APP_API_KEY

if(localStorage.authToken) {
	window.axios.defaults.headers.common['Authorization'] = localStorage.authToken;
}

require('./assets/scss/app.scss')
