<template>
	<v-container fill-height align-baseline class="home-page__container pa-0">
		<div class="width--100">
			<v-row class="pa-6 mt-8">
				<v-col cols="12">
					<v-card
					class="pa-4 br-8"
					@click="goTo('registrar-form')"
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
					@click="goTo('guidance-form')"
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
    			case 'registrar-form':
    				this.$router.push('registrar-form');
    			break;
    			case 'guidance-form':
    				this.$router.push('guidance-form');
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