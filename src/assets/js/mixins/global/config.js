import { bus } from '../../EventBus.js';

export default {
	computed:{
		routes() {
			return this.getItem('routes');
		},

        isCordova() {
            if(window.hasOwnProperty('cordova')) {
                return true;
            }
        },

        isIos() {
          if(this.isCordova) {
            if(device.platform == 'iOS') {
                return true;
            }
          } else {
            return false;
          }
        },

        app_version() {
            if(this.isIos) {
                return process.env.VUE_APP_IOS_MINIMUM_VERSION;
            }
            return process.env.VUE_APP_ANDROID_MINIMUM_VERSION
        },

        app_device() {
            return {
                version: process.env.VUE_APP_APP_VERSION || '0.0.0',
                name: process.env.VUE_APP_NAME || 'SSIS App'
            };
        },
	},
    
	methods: {
        logout() {
            this.$store.commit('user/logout');
            window.localStorage.removeItem('session_id');
            window.localStorage.removeItem('authToken');
            window.localStorage.removeItem('user');
            window.axios.defaults.headers.common['Authorization'] = null;
            this.$PRXRouter().goTo('login');
        },

        getSessionId() {
            return window.localStorage.getItem('session_id');
        },

        getLocations() {
            let result = {};
            let locations = this.$store.state.location;
            
            if(locations.longitude && locations.latitude) {
                result.longitude = locations.longitude;
                result.latitude = locations.latitude;
            }

            return result;
        },

        fetchBarangays(city) {
            return axios.post(this.routes['api.resources.fetch-barangays'], {city:city});
        },

        findArray(array, key) {
            return array.includes(key);
        },

        dynamicImage(img) {
            return this.$PRXConfig().api.url+'/'+img;
        },

        goToID: function(route, id) {
            var path = route + '/' + id;
            console.log(path);
            
            this.$router.push(path);
        },

		getItem(key) {
			return JSON.parse(window.localStorage.getItem(key));
		},

		setItem(key, value, isJson = true) {
            var json = JSON.stringify(value);
            if(!isJson) {
                json = value;
            }
			return localStorage.setItem(key, json);
		},

		parseResponse: function(result, type = 2, title = null, option = {}) {
            /* Set needed variables */
            let message = '';
            let hasResponse = false, hasData = false, hasMultiError = false;


            if(typeof result === 'string') {
                message = result;
            }

            if(typeof result !== 'undefined') {
                /* Fetch and add in message */
                if(result.hasOwnProperty('message')) {
                    message = result.message;
                }
            }

            if(typeof result.data !== 'undefined') { //alert(result.response.status);
                if(result.data.hasOwnProperty('message') && result.data.message.length > 0) {
                    message = result.data.message;
                }
            }

            if(typeof result.response !== 'undefined') { //alert(result.response.status);
                /* Set needed checker vars; */
                hasData = result.response.hasOwnProperty('data');
                /* Fetch and add in response error message */
                if(hasData) {
                    if(result.response.data.hasOwnProperty('message') && result.response.data.message.length > 0) {
                        message = result.response.data.message;
                    }
                }

                /* Setup generic response messages only for error & warning response */
                if(type == 0 || type == 1) {
                    switch(result.response.status) {
                        case 404: message = 'Invalid or missing route';
                            break;
                        case 405: message = 'Method not allowed on route';
                            break;
                        case 422:

                            /* Check for errors field */
                            if(hasData) {
                                console.log('hasData')
                                if(result.response.data.hasOwnProperty('errors')) { 
                                    let fieldsArray = result.response.data.errors; //console.log(fieldsArray);
                                    console.log(fieldsArray);
                                    /* Set multi-line error trigger */
                                    hasMultiError = true;
                                    /* Set error var for hasError() */
                                    this.errors = fieldsArray;

                                    /* Fetch each error per item */
                                    for(let field in fieldsArray) { //console.log(field);
                                        for(let subfield in fieldsArray[field]) { //console.log(fieldsArray[field][subfield]);
                                            message += '<li>' + fieldsArray[field][subfield] + '</li>';
                                        }
                                    } //console.log(errorsMsg);
                                }
                            }

                            break;
                        case 500: message = 'Something went wrong. Kindly try restarting the App.';
                            break;
                    }
                }
            }

            return message;
        },

        openBrowser(url, callback_url = null, mode = '_blank', options='hidden=no,location=no,footer=yes,footercolor=#333333,closebuttoncaption=Done,closebuttoncolor=#ffffff') {
            let browser = cordova.InAppBrowser.open(url, mode, options);

            browser.addEventListener('loadstop', (event) => {
                let url = event.url;

                if(device.platform == 'Android') {
                    browser.insertCSS({ code: "html{height: 100%;} body{height: calc(100% - 45px);} #tawkchat-maximized-wrapper{height: calc(100% - 45px);}" })
                }

                if(callback_url) {
                    if(url.includes(callback_url)) {
                        browser.close();
                    }
                }
            })
        },
        
        regexNumber(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                evt.preventDefault();
            } else {
                return true;
            }
        },

        regexLetter(e) {
            var regex = new RegExp("^[a-zA-Z ]*$");
            var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
            if (regex.test(str)) {
                return true;
            }
            e.preventDefault();
            return false;
        },

        currencyFormatter(price) {
            if(price) {
                price = price.toString();

                const dec = price.split('.')[1]
                const len = dec && dec.length > 2 ? dec.length : 2
                price = Number(price).toFixed(len)
                
                return price.replace(/\B(?=(\d{3})+(?!\d))/g, ",");      
            }

            return '0.00';
        }
	},
}