// import '@fortawesome/fontawesome-free/css/all.css';

window.moment = require('moment')

window.axios = require('axios')
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.axios.defaults.headers.common['App-Key'] = process.env.VUE_APP_API_KEY

require('./assets/scss/app.scss')
