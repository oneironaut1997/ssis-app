<template>
	<loading :active.sync="isLoading" 
	:can-cancel="false"
	:is-full-page="true"
	color="#003592"></loading>
</template>

<script type="text/javascript">

import Vue from 'vue';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {

	mounted() {
		this.init();
	},

	data() {
		return {
			isLoading: false,
		}
	},

	methods: {
		init:function() {
			if(typeof(Vue.prototype.loader) !== 'object') {
				Vue.prototype.$loader = {};
			}

			Vue.prototype.$loader = this;
		},

		show:function() {
			this.isLoading = true;
		},

		hide:function() {
			this.isLoading = false;
		},
	},

	components: {
		'loading': Loading,
	},

}

</script>
