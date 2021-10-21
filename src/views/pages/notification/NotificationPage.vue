<template>
	<v-container fill-height align-baseline class="notif-page__container pa-0">
		<div class="width--100">
			<v-tabs
		      v-model="tab"
		      fixed-tabs
		      background-color="transparent"
		      color="primary"
		    >
		      <v-tab>
		        Processing 
		      </v-tab>

		      <v-tab>
		        Approved 
		      </v-tab>

		      <v-tab>
		        For Pickup 
		      </v-tab>

		      <v-tab>
		        Received 
		      </v-tab>

		    </v-tabs>

		    <v-tabs-items v-model="tab">
		      <v-tab-item>
				<v-row class="pa-6">
					<v-col cols="12" v-for="(item, index) in 4" :key="index">
						<v-card
						class="pa-4 br-8"
						>
							<v-row>
								<v-col cols="12">
									<p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ipsum repudiandae dicta voluptatem eveniet voluptates!</p>
								</v-col>
							</v-row>
						</v-card>
					</v-col>
				</v-row>
		      </v-tab-item>
		      <v-tab-item>
				<v-row class="pa-6">
					<v-col cols="12" v-for="(item, index) in 6" :key="index">
						<v-card
						class="pa-4 br-8"
						>
							<v-row>
								<v-col cols="12">
									<p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ipsum repudiandae dicta voluptatem eveniet voluptates!</p>
								</v-col>
							</v-row>
						</v-card>
					</v-col>
				</v-row>
		      </v-tab-item>
		      <v-tab-item>
				<v-row class="pa-6">
					<v-col cols="12" v-for="(item, index) in 3" :key="index">
						<v-card
						class="pa-4 br-8"
						>
							<v-row>
								<v-col cols="12">
									<p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ipsum repudiandae dicta voluptatem eveniet voluptates!</p>
								</v-col>
							</v-row>
						</v-card>
					</v-col>
				</v-row>
		      </v-tab-item>
		      <v-tab-item>
				<v-row class="pa-6">
					<v-col cols="12" v-for="(item, index) in 2" :key="index">
						<v-card
						class="pa-4 br-8"
						>
							<v-row>
								<v-col cols="12">
									<p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ipsum repudiandae dicta voluptatem eveniet voluptates!</p>
								</v-col>
							</v-row>
						</v-card>
					</v-col>
				</v-row>
		      </v-tab-item>
		  </v-tabs-items>
		</div>
    </v-container>
</template>
<script type="text/javascript">
	export default {
    data: () => ({
    	tab: null
    }),

    mounted() {

    },

    computed: {

    },

    watch: {

    },

    methods: {

    },
  }
</script>
<style lang="scss">
	.notif-page__container {

		.v-slide-group__prev {
			display: none !important;
		}
	}
</style>