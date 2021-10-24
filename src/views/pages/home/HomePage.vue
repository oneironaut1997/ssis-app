<template>
	<v-container fill-height align-baseline class="home-page__container pa-0">
		<div class="width--100">
			<v-row class="pa-6">
				<v-col cols="6">
					<v-card
					class="pa-4 br-8"
					@click="goTo('request')"
					>
						<v-row>
							<v-col cols="12" class="d-flex align-center justify-center">
								<v-icon color="primary" class="fz-large">fa-comment-dots</v-icon>
							</v-col>
							<v-col cols="12" class="d-flex align-center justify-center">
								<h4 class="font-weight-bold mb-1">Request</h4>
							</v-col>
						</v-row>
					</v-card>
				</v-col>

				<v-col cols="6">
					<v-card
					class="pa-4 br-8"
					@click="goTo('application')"
					>
						<v-row>
							<v-col cols="12" class="d-flex align-center justify-center">
								<v-icon color="primary" class="fz-large">fa-file-contract</v-icon>
							</v-col>
							<v-col cols="12" class="d-flex align-center justify-center">
								<h4 class="font-weight-bold mb-1">Application</h4>
							</v-col>
						</v-row>
					</v-card>
				</v-col>

				<v-col cols="6">
					<v-card
					class="pa-4 br-8"
					@click="goTo('inquiry')"
					>
						<v-row>
							<v-col cols="12" class="d-flex align-center justify-center">
								<v-icon color="primary" class="fz-large">fa-comments</v-icon>
							</v-col>
							<v-col cols="12" class="d-flex align-center justify-center">
								<h4 class="font-weight-bold mb-1">Inquiry</h4>
							</v-col>
						</v-row>
					</v-card>
				</v-col>

				<v-col cols="6">
					<v-card
					class="pa-4 br-8"
					@click="goTo('announcement')"
					>
						<v-row>
							<v-col cols="12" class="d-flex align-center justify-center">
								<v-icon color="primary" class="fz-large">fa-bullhorn</v-icon>
							</v-col>
							<v-col cols="12" class="d-flex align-center justify-center">
								<h4 class="font-weight-bold mb-1">Announcments</h4>
							</v-col>
						</v-row>
					</v-card>
				</v-col>

				<v-col cols="6">
					<v-card
					class="pa-4 br-8"
					@click="goTo('notification')"
					>
						<v-row>
							<v-col cols="12" class="d-flex align-center justify-center">
								<v-icon color="primary" class="fz-large">fa-bell</v-icon>
							</v-col>
							<v-col cols="12" class="d-flex align-center justify-center">
								<h4 class="font-weight-bold mb-1">Notifications</h4>
							</v-col>
						</v-row>
					</v-card>
				</v-col>
			</v-row>
		</div>
    </v-container>
</template>
<script type="text/javascript">
	export default {
    data: () => ({
    loading: false,
    }),

    mounted() {
    	this.navigate();

    	this.$loader.show();
		setTimeout(() => {
			this.$loader.hide();
		}, 1000);
    },

    computed: {
		authenticated() {
			return this.$store.state.user.authenticated;
		},
    },

    watch: {

    },

    methods: {
    	goTo(val) {
    		switch(val) {
    			case 'request':
    				this.$router.push('request');
    			break;
    			case 'application':
    				this.$router.push('application');
    			break;
    			case 'inquiry':
    				this.$router.push('inquiry');
    			break;
    			case 'announcement':
    				this.$router.push('announcement');
    			break;
    			case 'notification':
    				this.$router.push('notification');
    			break;
    			default:
    			break;
    		}
    	}
    },
  }
</script>
<style lang="scss">
	.home-page__container {
		
	}
</style>