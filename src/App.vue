<template>
	<v-app>
		<splash-screen ref="splashscreen"></splash-screen>
		<top-navigation></top-navigation>
		<PRXProgressLoader></PRXProgressLoader>
		<v-content class="pa-0">

			<v-container fill-height pa-0>
				<router-view :key="$route.fullPath"></router-view>
			</v-container>

			<InformationDialog></InformationDialog>
			<Loader></Loader>
			<PRXAlert></PRXAlert>
			<PRXDialogLoader></PRXDialogLoader>
		</v-content>
	</v-app>
</template>

<script type="text/javascript">

import SplashScreen from './components/loader/SplashScreen.vue';
import TopNavigation from './partials/TopNavigation.vue'

export default {

  components: {
    'top-navigation': TopNavigation,
    'splash-screen': SplashScreen,
  },

  mounted () {
		this.fetch();
		document.addEventListener("backbutton", this.backbutton.bind(this), false);
  },

  computed: {
		// fetchUrl() {
		// 	return this.$PRXConfig().api.url + '/api/config/fetch';
		// },
	},

	methods: {
		backbutton() {
			if(this.$route.name == 'home' || this.$route.name == 'login') {
				navigator.app.exitApp();
			} else { 
				console.log('a');
				this.$router.back();
			}
		},

		fetch() {
			this.$refs.splashscreen.splash = true;

			// this.$loader.show();
			// axios.post(this.fetchUrl)
			// 	.then(({ data }) => {
			// 	this.setItem('routes', data.routes);
			// 	this.$store.commit('page/set', data.pages);
			// 	this.$loader.hide();

			// 	axios.post(this.routes['api.resources.fetch'])
			// 		.then(response => {
			// 		this.$loader.hide();

			// 	}).catch(error => {
			// 	this.$loader.hide();
			// 	})
			// }).catch(err => {
			// this.$PRX.alert.error(err, 'Network Error', 'options');
			// this.$loader.hide();
			// })
		},
	}
};
</script>
<style type="text/css"></style>
