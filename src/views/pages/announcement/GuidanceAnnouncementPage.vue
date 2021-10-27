<template>
	<v-container fill-height align-baseline class="home-page__container pa-0">
		<div class="width--100">
			<v-row class="pa-6">
				<v-col cols="12" v-for="(item, index) in guidance_announcements" :key="index">
					<v-card
					class="pa-4 br-8"
					>
						<v-row>
							<v-col cols="12">
								<h3 class="font-weight-bold mb-2">{{ item.name }}</h3>
								<p class="mb-0">{{ item.description }}</p>
								<small class="font-weight-bold clr--yellow float-right mt-2">{{ item.created_at }}</small>
							</v-col>
						</v-row>
					</v-card>
				</v-col>
				<template v-if="guidance_announcements.length == 0">
					<div class="text-center width-100">
						<h3 class="font-weight-bold mt-6 mb-0 text-center">No Available Data</h3>
					</div>
				</template>

			</v-row>
		</div>
    </v-container>
</template>
<script type="text/javascript">
	export default {
    data: () => ({
    	guidance_announcements: [],
    }),

    mounted() {
    	this.$loader.show();
		setTimeout(() => {
			this.$loader.hide();
		}, 500);
		
    	this.guidance_announcements = this.getItem('guidance_announcements');
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
	.home-page__container {

	}
</style>