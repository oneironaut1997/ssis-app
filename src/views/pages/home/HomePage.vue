<template>
	<v-container fill-height align-baseline class="home-page__container pa-0">
		<div class="width--100">
			<!-- Frame 1 -->
			<div class="frm-1__hldr pa-6">
				<v-card class="pa-6 mb-4 br-24">
					<h4>Loan Amount</h4>
					<h1
					class="font-weight-bold"
					>
						&#8369; {{ com_loan_val }}
					</h1>
					<v-slider
					v-model="loan_val"
					track-color="grey"
					:color="color_for_loan_slider"
					always-dirty
					:step="1000"
					:min="1000"
					:max="100000"
					>
					</v-slider>
					<div class="d-flex justify-space-between">
						<small>&#8369; 1,000</small>
						<small>&#8369; 100,000</small>
					</div>

					<div class="my-4"></div>

					<h4>Term Months</h4>
					<h1
					class="font-weight-bold"
					>
						{{ terms }} Months
					</h1>
					<v-slider
					v-model="terms"
					track-color="grey"
					:color="color_for_terms_slider"
					always-dirty
					:step="6"
					:min="6"
					:max="36"
					>
					</v-slider>
					<div class="d-flex justify-space-between">
						<small>6 Months</small>
						<small>36 Months</small>
					</div>
				</v-card>
				<v-card class="pa-6 br-24 text-center">
					<h4>Monthly Payment</h4>
					<h1
					class="font-weight-bold fz-large"
					>
						&#8369; {{ com_loan_val }}
					</h1>
					<v-btn
					rounded
					color="#29648a"
					large
					@click="applyLoan"
					>
					<span class="text--white font-weight-bold">
						APPLY NOW
					</span>
					</v-btn>

					<v-dialog
                      v-model="dialog"
                    >
                      <v-card>
                        <v-row no-gutters>
                            <v-col cols="12" class="text-center px-8 py-8">
                                <v-img
                                    width="61"
                                    height="61"
                                    :src="$PRXConfig().staticUrl('icons/ic-warning.svg')"
                                    class="mx-auto mb-4"
                                ></v-img>
                                <h4 class="clr--black mb-4 font-weight-700">Forms Required!</h4>
                                <p class="mb-6 clr--black text-xs-justify font--size--small">
                                    For applying a loan we have form requirements, <a class="font-weight-bold" :href="$PRXConfig().staticUrl('files/Forms.pdf')" download>download</a> now, fill them out and submit! 
                                </p>
                                <v-row no-gutters>
                                  <v-col cols="12">
                                    <v-btn
                                    large
                                    rounded
                                    color="#29648a"
									:loading="loading"
									:disabled="loading"
                                    @click="goToApplyLoanPage">
                                        <span class="text--white font-weight-bold">
                                            Proceed
                                        </span>
                                    </v-btn>
                                  </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                      </v-card>
                    </v-dialog>
				</v-card>
			</div>
			<!-- Frame 2 -->
			<div class="frm-2__hldr pa-4">

				<div class="menu-list__hldr mb-6 d-flex flex-wrap justify-space-between px-12">
					<a href="#">
						<div class="menu-list_item br-8 pa-2">
							<v-icon color="#FFFFFF">fa-square</v-icon>
						</div>
					</a>
					<a href="#">
						<div class="menu-list_item br-8 pa-2">
							<v-icon color="#FFFFFF">fa-square</v-icon>
						</div>
					</a>
					<a href="#">
						<div class="menu-list_item br-8 pa-2">
							<v-icon color="#FFFFFF">fa-square</v-icon>
						</div>
					</a>
					<a href="#">
						<div class="menu-list_item br-8 pa-2">
							<v-icon color="#FFFFFF">fa-square</v-icon>
						</div>
					</a>
				</div>
				<h3 class="font-weight-bold mb-5">Loan History</h3>
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
			</div>
		</div>
    </v-container>
</template>
<script type="text/javascript">
	export default {
    data: () => ({
	loan_val: 10000,
	terms: 0,
	termnsLabels: [ 6, 12, 18, 24, 30, 36],
    dialog: false,
    loading: false,
    }),

    mounted() {

    },

    computed: {
		color_for_loan_slider () {
		if (this.loan_val < 10000) return 'indigo'
		if (this.loan_val < 20000) return 'teal'
		if (this.loan_val < 50000) return 'green'
		if (this.loan_val < 70000) return 'orange'
		if (this.loan_val < 100000) return 'yellow'
		return 'red'
		},
		color_for_terms_slider () {
		if (this.terms < 6) return 'indigo'
		if (this.terms < 12) return 'teal'
		if (this.terms < 18) return 'green'
		if (this.terms < 24) return 'orange'
		if (this.terms < 30) return 'yellow'
		return 'red'
		},
		com_loan_val() {
			return this.loan_val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}
    },

    watch: {

    },

    methods: {
		applyLoan() {
			this.dialog = true;
		},

		goToApplyLoanPage() {
			this.loading = true;
			setTimeout(() => {
				this.$router.push('apply-loan')
			}, 1000)
		},

		goToSelectedLoan() {
			this.$router.push('selected-loan');
		}
    },
  }
</script>
<style lang="scss">
	.home-page__container {

		.frm-1__hldr {
			background-color: #29648a;
			border-bottom-left-radius: 24px;
			border-bottom-right-radius: 24px;
		}

		.v-card {
			// box-shadow: unset;

			.v-messages {
				min-height: 0;
			}

		}

		.v-btn {
			box-shadow: unset;
		}

		.frm-2__hldr {

			.menu-list__hldr {

				.menu-list_item {
					background-color: #29648a;

					.v-icon {
						font-size: 30px;
					}
				}
			}
		}
	}
</style>