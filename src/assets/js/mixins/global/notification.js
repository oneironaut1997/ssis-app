import { bus } from '../../EventBus.js';
export default {
	methods: {
		setupPushNotif() {
			var $this = this;
	        var push = PushNotification.init({
	            android: {
	                senderID: 419448536483,
	                clearBadge: true
	            },
	            ios: {
	                alert: "true",
	                badge: "true",
	                sound: "true",
	                clearBadge: true
	            },
	        });

	        //registration
	        push.on('registration', function(data) {
	            console.log('Registering device token -----');
	            console.log(device.platform)
	            var data = {
	                'token' : data.registrationId,
	                'platform' : device.platform,
	                'deviceable_id' : localStorage.user ? JSON.parse(localStorage.user).id : 0,
	            }
	            axios.post($this.routes['api.device-token.store'], data).then(response => {
	            	window.localStorage.setItem('pushnotifs/setToken', response.data.token);
	            });
	        });

	        push.on('notification', (data) => {
	        	bus.$emit('new_notification' , data);
	        	$this.$store.commit('notificationReceive/set', true);
	        	$this.$store.commit('notificationReceive/setMessage', data.message);
	        	$this.$store.commit('notificationReceive/setTitle', data.title);
	            console.log('notification received ...', data);
	        });

	        push.on('error', function(e) {
	            console.log('Error, ' + e);
	        })
		},
	}
}