<template>
	<v-container fill-height align-baseline class="apply-loan-page__container pa-0">
		<div class="width--100">
			<!-- Frame 1 -->
			<div class="frm-1__hldr pa-6">
				<v-card class="pa-6 mb-4 br-24">
					<h4>Loan Amount</h4>
					<h1
					class="font-weight-bold"
					>
						&#8369; XX,XXX
					</h1>

					<hr class="my-2">

					<h4>Term Months</h4>
					<h1
					class="font-weight-bold"
					>
						6 Months
					</h1>

					<hr class="my-2">

					<h4>Monthly Payment</h4>
					<h1
					class="font-weight-bold"
					>
						&#8369; XX,XXX
					</h1>
				</v-card>
			</div>
			<!-- Frame 2 -->
			<div class="frm-2__hldr pa-4">
				<form class="mt-5">
                <v-row no-gutters class="mb-0">
                    <v-col cols="12">
						<v-file-input
						filled
						rounded
						show-size
						label="PROMISSORY NOTE"
						></v-file-input>
						<v-file-input
						filled
						rounded
						show-size
						label="PLEDGE AGREEMENT"
						></v-file-input>
						<v-file-input
						filled
						rounded
						show-size
						label="CO-MAKERS STATEMENT"
						></v-file-input>
                    </v-col>
                </v-row>
                <v-row no-gutters class="mb-8">
                    <v-col cols="12">
                        <v-btn large rounded color="#29648a" block @click="submit">
                            <span class="text--white font-weight-bold">
                                CONTINUE
                            </span>
                        </v-btn>
						<v-dialog v-model="dialog">
							<v-card>
								<v-row no-gutters>
									<v-col cols="12" class="text-center px-8 py-8">
										<v-img
										width="61"
										height="61"
										:src="$PRXConfig().staticUrl('icons/ic-success.svg')"
										class="mx-auto mb-4"
										></v-img>
										<h4 class="clr--black mb-4 font-weight-700">Success!</h4>
										<p class="mb-6 clr--black text-xs-justify font--size--small">
										Please wait while the admin is still reviewing your application, you’ll be notified once approved.
										</p>
										<v-row no-gutters>
											<v-col cols="12">
												<v-btn
												large
												rounded
												color="#29648a"
												:loading="loading"
												:disabled="loading"
												@click="closeDialog">
												<span class="text--white font-weight-bold">
												Ok
												</span>
												</v-btn>
											</v-col>
										</v-row>
									</v-col>
								</v-row>
							</v-card>
						</v-dialog>
                    </v-col>
                </v-row>
                </form>
			</div>
		</div>
    </v-container>
</template>
<script type="text/javascript">
	export default {
    data: () => ({
		dialog: false,
    }),

    mounted() {

    },

    computed: {

    },

    methods: {
		submit() {
			this.dialog = true;
		},

		closeDialog() {
			this.dialog = false;
			this.$router.push('loans');
		}
    },
  }
</script>
<style lang="scss">
	.apply-loan-page__container {

		.frm-1__hldr {
			background-color: #29648a;
			border-bottom-left-radius: 24px;
			border-bottom-right-radius: 24px;
		}
	}
</style>