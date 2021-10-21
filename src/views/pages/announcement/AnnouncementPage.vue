<template>
	<v-container fill-height align-baseline class="home-page__container pa-0">
		<div class="width--100">
			<v-row class="pa-6">
				<v-col cols="12">
					<v-card
					class="pa-4 br-8"
					@click="goTo('registrar-announcements')"
					>
						<v-row>
							<v-col cols="12" class="d-flex align-center justify-center">
								<v-icon color="primary" class="fz-large">fa-mail-bulk</v-icon>
							</v-col>
							<v-col cols="12" class="d-flex align-center justify-center">
								<h4 class="font-weight-bold mb-1">Registrar</h4>
							</v-col>
						</v-row>
					</v-card>
				</v-col>

				<v-col cols="12">
					<v-card
					class="pa-4 br-8"
					@click="goTo('guidance-announcements')"
					>
						<v-row>
							<v-col cols="12" class="d-flex align-center justify-center">
								<v-icon color="primary" class="fz-large">fa-chalkboard-teacher</v-icon>
							</v-col>
							<v-col cols="12" class="d-flex align-center justify-center">
								<h4 class="font-weight-bold mb-1">Guidance</h4>
							</v-col>
						</v-row>
					</v-card>
				</v-col>

				<v-col cols="12">
					<v-card
					class="pa-4 br-8"
					@click="goTo('student-service-announcements')"
					>
						<v-row>
							<v-col cols="12" class="d-flex align-center justify-center">
								<v-icon color="primary" class="fz-large">fa-user-graduate</v-icon>
							</v-col>
							<v-col cols="12" class="d-flex align-center justify-center">
								<h4 class="font-weight-bold mb-1">Student Services</h4>
							</v-col>
						</v-row>
					</v-card>
				</v-col>

				<v-col cols="12">
					<v-card
					class="pa-4 br-8"
					@click="goTo('cashier-announcements')"
					>
						<v-row>
							<v-col cols="12" class="d-flex align-center justify-center">
								<v-icon color="primary" class="fz-large">fa-cash-register</v-icon>
							</v-col>
							<v-col cols="12" class="d-flex align-center justify-center">
								<h4 class="font-weight-bold mb-1">Cashier</h4>
							</v-col>
						</v-row>
					</v-card>
				</v-col>

				<v-col cols="12">
					<v-card
					class="pa-4 br-8"
					@click="goTo('ictmo-announcements')"
					>
						<v-row>
							<v-col cols="12" class="d-flex align-center justify-center">
								<v-icon color="primary" class="fz-large">fa-server</v-icon>
							</v-col>
							<v-col cols="12" class="d-flex align-center justify-center">
								<h4 class="font-weight-bold mb-1">ICTMO</h4>
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

    }),

    mounted() {

    },

    computed: {

    },

    watch: {

    },

    methods: {
    	goTo(val) {
    		switch(val) {
    			case 'registrar-announcements':
    				this.$router.push('announcement/registrar-announcements');
    			break;
    			case 'guidance-announcements':
    				this.$router.push('announcement/guidance-announcements');
    			break;
    			case 'student-service-announcements':
    				this.$router.push('announcement/student-service-announcements');
    			break;
    			case 'cashier-announcements':
    				this.$router.push('announcement/cashier-announcements');
    			break;
    			case 'ictmo-announcements':
    				this.$router.push('announcement/ictmo-announcements');
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