<template>
	<v-container fill-height align-baseline class="loans-page__container pa-0">
		<div class="width--100">
		<!-- Frame 1 -->
			<v-container class="pa-0">
				<v-tabs
				v-model="tabs"
				centered
				slider-color="#29648a"
				fixed-tabs
				>
					<v-tab
					href="#tab-1"
					>
					Active
					</v-tab>
					<v-tab
					href="#tab-2"
					>
					Closed
					</v-tab>
				</v-tabs>

				<v-tabs-items v-model="tabs">
					<v-tab-item
					value="tab-1"
					>
					<v-container>
						<template v-for="item in 1">
							<v-card
							:key="item.id"
							class="mb-2 pa-4 br-8"
							@click="goToSelectedLoan"
							>
								<v-row>
									<v-col cols="2" class="d-flex align-center">
										<v-icon color="#29648a" class="fz-large">fa-square</v-icon>
									</v-col>
									<v-col cols="6">
										<h5 class="font-weight-bold mb-1">#21312673678</h5>
										<h5>Sep 12, 2021</h5>
									</v-col>
									<v-col cols="4" class="d-flex align-center">
										<h3 class="font-weight-bold text-primary">&#8369; XX,XXX</h3>
									</v-col>
								</v-row>
							</v-card>
						</template>
					</v-container>
					</v-tab-item>
					<v-tab-item
					value="tab-2"
					>
					<v-container>
						<template v-for="item in 4">
							<v-card
							:key="item.id"
							class="mb-2 pa-4 br-8"
							@click="goToSelectedLoan"
							>
								<v-row>
									<v-col cols="2" class="d-flex align-center">
										<v-icon color="#29648a" class="fz-large">fa-square</v-icon>
									</v-col>
									<v-col cols="6">
										<h5 class="font-weight-bold mb-1">#21312673678</h5>
										<h5>Sep 12, 2021</h5>
									</v-col>
									<v-col cols="4" class="d-flex align-center">
										<h3 class="font-weight-bold text-primary">&#8369; XX,XXX</h3>
									</v-col>
								</v-row>
							</v-card>
						</template>
					</v-container>
					</v-tab-item>
				</v-tabs-items>
			</v-container>
		</div>
    </v-container>
</template>
<script type="text/javascript">
	export default {
    data: () => ({
		tabs: null,
    }),

    mounted() {

    },

    computed: {

    },

    methods: {
		goToSelectedLoan() {
			this.$router.push('selected-loan');
		}
    },
  }
</script>
<style lang="scss">
	.loans-page__container {

	}
</style>