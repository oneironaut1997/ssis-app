<template>
	<v-container fill-height align-baseline class="home-page__container pa-0">
		<div class="width--100">
			<v-row class="pa-6">
				<v-col cols="6">
					<v-card
					class="pa-4 br-8"
					@click="goTo('registrar-form')"
					>
						<v-row>
							<v-col cols="12" class="d-flex align-center justify-center">
								<v-icon color="primary" class="fz-large">fa-mail-bulk</v-icon>
							</v-col>
							<v-col cols="12" class="d-flex align-center justify-center">
								<h5 class="font-weight-bold text-center mb-1">Registrar</h5>
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
								<h5 class="font-weight-bold text-center mb-1">Inquiries</h5>
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
								<h5 class="font-weight-bold text-center mb-1">Student Service</h5>
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
								<h5 class="font-weight-bold text-center mb-1">Announcements</h5>
							</v-col>
						</v-row>
					</v-card>
				</v-col>

				<v-col cols="6">
					<v-card
					class="pa-4 br-8"
					@click="goTo('guidance-form')"
					>
						<v-row>
							<v-col cols="12" class="d-flex align-center justify-center">
								<v-icon color="primary" class="fz-large">fa-chalkboard-teacher</v-icon>
							</v-col>
							<v-col cols="12" class="d-flex align-center justify-center">
								<h5 class="font-weight-bold text-center mb-1">Guidance</h5>
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
								<h5 class="font-weight-bold text-center mb-1">Notifications</h5>
							</v-col>
						</v-row>
					</v-card>
				</v-col>

				<v-col cols="6">
					<v-card
					class="pa-4 br-8"
					@click="goTo('id-form')"
					>
						<v-row>
							<v-col cols="12" class="d-flex align-center justify-center">
								<v-icon color="primary" class="fz-large">fa-server</v-icon>
							</v-col>
							<v-col cols="12" class="d-flex align-center justify-center">
								<h5 class="font-weight-bold text-center mb-1">ICTMO</h5>
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
		}, 500);
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
    			case 'registrar-form':
    				this.$router.push('request/registrar-form');
    			break;
    			case 'guidance-form':
    				this.$router.push('request/guidance-form');
    			break;
    			case 'id-form':
    				this.$router.push('request/id-form');
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