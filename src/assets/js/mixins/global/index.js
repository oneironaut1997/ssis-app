import Vue from 'vue'

import ConfigMixin from './config.js';
import PushNotification from './notification.js';

Vue.mixin({
	mixins: [ ConfigMixin, PushNotification ],
});