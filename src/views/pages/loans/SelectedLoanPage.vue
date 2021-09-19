<template>
	<v-container fill-height align-baseline class="selected-loan-page__container pa-0">
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
					Schedule
					</v-tab>
					<v-tab
					href="#tab-2"
					>
					Transactions
					</v-tab>
					<v-tab
					href="#tab-3"
					>
					Documents
					</v-tab>
				</v-tabs>

				<v-tabs-items v-model="tabs">
					<v-tab-item
					value="tab-1"
					>
					<v-container>
					<v-card class="pa-6 mb-6 br-24">
						<h4>Loan Amount</h4>
						<h4
						class="font-weight-bold"
						>
						&#8369; XX,XXX
						</h4>
						<h5>Sep 12, 2021</h5>

						<hr class="my-2">
						<v-row no-gutters>
							<v-col cols="6"><small>Installment</small></v-col>
							<v-col cols="6" class="text-right"><small>&#8369; XX,XXX x 6</small></v-col>
						</v-row>
						<v-row no-gutters>
							<v-col cols="6"><small>Remaining</small></v-col>
							<v-col cols="6" class="text-right"><small>&#8369; XX,XXX</small></v-col>
						</v-row>
					</v-card>

					<v-row no-gutters class="mb-4">
						<v-col cols="auto">
							<v-icon color="#29648a" class="mr-2">fa-square</v-icon>
						</v-col>
						<v-col>
							<h2 class="font-weight-bold">Schedule</h2>
						</v-col>
					</v-row>
					<v-row no-gutters class="mb-4">
						<v-col>
							<v-progress-linear value="6" max="6" color="#29648a"></v-progress-linear>
							<small>Paid <b>1</b>/6</small>
						</v-col>
					</v-row>

					<template v-for="item in 6">
						<v-card
						:key="item.id"
						class="mb-2 pa-4 br-8"
						@click="goToSelectedLoan"
						>
							<v-row>
								<v-col cols="2" class="d-flex align-center">
									<v-icon color="#29648a" class="fz-large">fa-square</v-icon>
								</v-col>
								<v-col cols="6" class="d-flex align-center">
									<h3>Sep 12, 2021</h3>
								</v-col>
								<v-col cols="4" class="d-flex align-end flex-column">
									<h3 class="font-weight-bold text-primary">&#8369; XX,XXX</h3>
									<h5 class="font-weight-bold">PAID</h5>
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
						<v-card class="pa-6 mb-6 br-24">
						<h4>Loan Amount</h4>
						<h4
						class="font-weight-bold"
						>
						&#8369; XX,XXX
						</h4>
						<h5>Sep 12, 2021</h5>

						<hr class="my-2">
						<v-row no-gutters>
							<v-col cols="6"><small>Installment</small></v-col>
							<v-col cols="6" class="text-right"><small>&#8369; XX,XXX x 6</small></v-col>
						</v-row>
						<v-row no-gutters>
							<v-col cols="6"><small>Remaining</small></v-col>
							<v-col cols="6" class="text-right"><small>&#8369; XX,XXX</small></v-col>
						</v-row>
					</v-card>
					</v-container>
					</v-tab-item>

					<v-tab-item
					value="tab-3"
					>
					<v-container>
						<v-card class="pa-6 mb-6 br-24">
						<h4>Loan Amount</h4>
						<h4
						class="font-weight-bold"
						>
						&#8369; XX,XXX
						</h4>
						<h5>Sep 12, 2021</h5>

						<hr class="my-2">
						<v-row no-gutters>
							<v-col cols="6"><small>Installment</small></v-col>
							<v-col cols="6" class="text-right"><small>&#8369; XX,XXX x 6</small></v-col>
						</v-row>
						<v-row no-gutters>
							<v-col cols="6"><small>Remaining</small></v-col>
							<v-col cols="6" class="text-right"><small>&#8369; XX,XXX</small></v-col>
						</v-row>
					</v-card>

					<v-row no-gutters class="mb-4">
						<v-col cols="auto">
							<v-icon color="#29648a" class="mr-2">fa-square</v-icon>
						</v-col>
						<v-col>
							<h2 class="font-weight-bold">Files</h2>
						</v-col>
					</v-row>

					<template>
						<a :href="$PRXConfig().staticUrl('files/Forms.pdf')" download>
							<v-card
							class="mb-2 pa-4 br-8"
							>
								<v-row>
									<v-col cols="2" class="d-flex align-center">
										<v-icon color="#29648a" class="fz-large">fa-square</v-icon>
									</v-col>
									<v-col cols="10" class="d-flex align-center">
										<h3>PROMISSORY NOTE</h3>
									</v-col>
								</v-row>
							</v-card>
						</a>
						<a :href="$PRXConfig().staticUrl('files/Forms.pdf')" download>
							<v-card
							class="mb-2 pa-4 br-8"
							>
								<v-row>
									<v-col cols="2" class="d-flex align-center">
										<v-icon color="#29648a" class="fz-large">fa-square</v-icon>
									</v-col>
									<v-col cols="10" class="d-flex align-center">
										<h3>PLEDGE AGREEMENT</h3>
									</v-col>
								</v-row>
							</v-card>
						</a>
						<a :href="$PRXConfig().staticUrl('files/Forms.pdf')" download>
							<v-card
							class="mb-2 pa-4 br-8"
							>
								<v-row>
									<v-col cols="2" class="d-flex align-center">
										<v-icon color="#29648a" class="fz-large">fa-square</v-icon>
									</v-col>
									<v-col cols="10" class="d-flex align-center">
										<h3>CO-MAKERS STATEMENT</h3>
									</v-col>
								</v-row>
							</v-card>
						</a>
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

    },
  }
</script>
<style lang="scss">
	.selected-loan-page__container {

	}
</style>