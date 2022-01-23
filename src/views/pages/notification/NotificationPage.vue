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
		        For Pickup / For Received
		      </v-tab>

		      <v-tab>
		        Received 
		      </v-tab>

		    </v-tabs>

		    <v-tabs-items v-model="tab">
		      <v-tab-item>
				<v-row class="pa-6">
					<v-col cols="12" v-for="(item, index) in pendingTransactions" :key="index">
						<v-card
						class="pa-4 br-8"
						>
							<v-row>
								<v-col cols="12">
									<div class="d-flex justify-space-between align-center mb-2">
									<p class="font-weight-bold mb-0 text-primary">#{{ item.id }}</p>
									<p class="mb-0">
										<small v-if="item.transaction_type == 'App\\Models\\RegistrarTransactions\\RegistrarTransaction'">(Registrar)</small>
										<small v-if="item.transaction_type == 'App\\Models\\GuidanceTransactions\\GuidanceTransaction'">(Guidance)</small>
										<small v-if="item.transaction_type == 'App\\Models\\StudentServiceTransactions\\StudentServiceTransaction'">(Student Service)</small>
										<small v-if="item.transaction_type == 'App\\Models\\IDTransactions\\IDTransaction'">(ICTMO)</small>
									</p>
									</div>
									<template v-if="item.transaction_type == 'App\\Models\\RegistrarTransactions\\RegistrarTransaction'">
										<p class="mb-0"><b>Category :</b> {{ item.nature_of_concern }} Request</p>
									</template>
									<template v-if="item.transaction_type == 'App\\Models\\GuidanceTransactions\\GuidanceTransaction'">
										<p class="mb-0"><b>Category :</b> Good Moral Character Request</p>
										<p class="mb-0"><b>Attainment :</b> {{ item.attainment }}</p>
										<p class="mb-0"><b>Purpose :</b> {{ item.purpose }}</p>
									</template>
									<template v-if="item.transaction_type == 'App\\Models\\StudentServiceTransactions\\StudentServiceTransaction'">
										<p class="mb-0"><b>Category :</b> President and Dean's List Request</p>
									</template>
									<template v-if="item.transaction_type == 'App\\Models\\IDTransactions\\IDTransaction'">
										<p class="mb-0"><b>Category :</b> ID Request</p>
									</template>
									<small class="font-weight-bold clr--yellow float-right mt-2">{{ item.created_at }}</small>
								</v-col>
							</v-row>
						</v-card>
					</v-col>
					<template v-if="pendingTransactions.length == 0">
						<div class="text-center width-100">
							<h3 class="font-weight-bold mt-6 mb-0 text-center">No Available Data</h3>
						</div>
					</template>
				</v-row>
		      </v-tab-item>
		      <v-tab-item>
				<v-row class="pa-6">
					<v-col cols="12" v-for="(item, index) in approvedTransactions" :key="index">
						<v-card
						class="pa-4 br-8"
						>
							<v-row>
								<v-col cols="12">
									<div class="d-flex justify-space-between align-center mb-2">
									<p class="font-weight-bold mb-0 text-primary">#{{ item.id }}</p>
									<p class="mb-0">
										<small v-if="item.transaction_type == 'App\\Models\\RegistrarTransactions\\RegistrarTransaction'">(Registrar)</small>
										<small v-if="item.transaction_type == 'App\\Models\\GuidanceTransactions\\GuidanceTransaction'">(Guidance)</small>
										<small v-if="item.transaction_type == 'App\\Models\\StudentServiceTransactions\\StudentServiceTransaction'">(Student Service)</small>
										<small v-if="item.transaction_type == 'App\\Models\\IDTransactions\\IDTransaction'">(ICTMO)</small>
									</p>
									</div>
									<template v-if="item.transaction_type == 'App\\Models\\RegistrarTransactions\\RegistrarTransaction'">
										<p class="mb-0"><b>Category :</b> {{ item.nature_of_concern }} Request</p>
									</template>
									<template v-if="item.transaction_type == 'App\\Models\\GuidanceTransactions\\GuidanceTransaction'">
										<p class="mb-0"><b>Category :</b> Good Moral Character Request</p>
										<p class="mb-0"><b>Attainment :</b> {{ item.attainment }}</p>
										<p class="mb-0"><b>Purpose :</b> {{ item.purpose }}</p>
									</template>
									<template v-if="item.transaction_type == 'App\\Models\\StudentServiceTransactions\\StudentServiceTransaction'">
										<p class="mb-0"><b>Category :</b> President and Dean's List Request</p>
									</template>
									<template v-if="item.transaction_type == 'App\\Models\\IDTransactions\\IDTransaction'">
										<p class="mb-0"><b>Category :</b> ID Request</p>
									</template>
									<small class="font-weight-bold clr--yellow float-right mt-2">{{ item.created_at }}</small>
								</v-col>
							</v-row>
						</v-card>
					</v-col>
					<template v-if="approvedTransactions.length == 0">
						<div class="text-center width-100">
							<h3 class="font-weight-bold mt-6 mb-0 text-center">No Available Data</h3>
						</div>
					</template>
				</v-row>
		      </v-tab-item>
		      <v-tab-item>
				<v-row class="pa-6">
					<v-col cols="12" v-for="(item, index) in forPickupTransactions" :key="index">
						<v-card
						class="pa-4 br-8"
						>
							<v-row>
								<v-col cols="12">
									<div class="d-flex justify-space-between align-center mb-2">
									<p class="font-weight-bold mb-0 text-primary">#{{ item.id }}</p>
									<p class="mb-0">
										<small v-if="item.transaction_type == 'App\\Models\\RegistrarTransactions\\RegistrarTransaction'">(Registrar)</small>
										<small v-if="item.transaction_type == 'App\\Models\\GuidanceTransactions\\GuidanceTransaction'">(Guidance)</small>
										<small v-if="item.transaction_type == 'App\\Models\\StudentServiceTransactions\\StudentServiceTransaction'">(Student Service)</small>
										<small v-if="item.transaction_type == 'App\\Models\\IDTransactions\\IDTransaction'">(ICTMO)</small>
									</p>
									</div>
									<template v-if="item.transaction_type == 'App\\Models\\RegistrarTransactions\\RegistrarTransaction'">
										<p class="mb-0"><b>Category :</b> {{ item.nature_of_concern }} Request</p>
									</template>
									<template v-if="item.transaction_type == 'App\\Models\\GuidanceTransactions\\GuidanceTransaction'">
										<p class="mb-0"><b>Category :</b> Good Moral Character Request</p>
										<p class="mb-0"><b>Attainment :</b> {{ item.attainment }}</p>
										<p class="mb-0"><b>Purpose :</b> {{ item.purpose }}</p>
									</template>
									<template v-if="item.transaction_type == 'App\\Models\\StudentServiceTransactions\\StudentServiceTransaction'">
										<p class="mb-0"><b>Category :</b> President and Dean's List Request</p>
									</template>
									<template v-if="item.transaction_type == 'App\\Models\\IDTransactions\\IDTransaction'">
										<p class="mb-0"><b>Category :</b> ID Request</p>
									</template>
									<small class="font-weight-bold clr--yellow float-right mt-2">{{ item.created_at }}</small>
								</v-col>
							</v-row>
						</v-card>
					</v-col>
					<template v-if="forPickupTransactions.length == 0">
						<div class="text-center width-100">
							<h3 class="font-weight-bold mt-6 mb-0 text-center">No Available Data</h3>
						</div>
					</template>
				</v-row>
		      </v-tab-item>
		      <v-tab-item>
				<v-row class="pa-6">
					<v-col cols="12" v-for="(item, index) in receivedTransactions" :key="index">
						<v-card
						class="pa-4 br-8"
						>
							<v-row>
								<v-col cols="12">
									<div class="d-flex justify-space-between align-center mb-2">
									<p class="font-weight-bold mb-0 text-primary">#{{ item.id }}</p>
									<p class="mb-0">
										<small v-if="item.transaction_type == 'App\\Models\\RegistrarTransactions\\RegistrarTransaction'">(Registrar)</small>
										<small v-if="item.transaction_type == 'App\\Models\\GuidanceTransactions\\GuidanceTransaction'">(Guidance)</small>
										<small v-if="item.transaction_type == 'App\\Models\\StudentServiceTransactions\\StudentServiceTransaction'">(Student Service)</small>
										<small v-if="item.transaction_type == 'App\\Models\\IDTransactions\\IDTransaction'">(ICTMO)</small>
									</p>
									</div>
									<template v-if="item.transaction_type == 'App\\Models\\RegistrarTransactions\\RegistrarTransaction'">
										<p class="mb-0"><b>Category :</b> {{ item.nature_of_concern }} Request</p>
									</template>
									<template v-if="item.transaction_type == 'App\\Models\\GuidanceTransactions\\GuidanceTransaction'">
										<p class="mb-0"><b>Category :</b> Good Moral Character Request</p>
										<p class="mb-0"><b>Attainment :</b> {{ item.attainment }}</p>
										<p class="mb-0"><b>Purpose :</b> {{ item.purpose }}</p>
									</template>
									<template v-if="item.transaction_type == 'App\\Models\\StudentServiceTransactions\\StudentServiceTransaction'">
										<p class="mb-0"><b>Category :</b> President and Dean's List Request</p>
									</template>
									<template v-if="item.transaction_type == 'App\\Models\\IDTransactions\\IDTransaction'">
										<p class="mb-0"><b>Category :</b> ID Request</p>
									</template>
									<small class="font-weight-bold clr--yellow float-right mt-2">{{ item.created_at }}</small>
								</v-col>
							</v-row>
						</v-card>
					</v-col>
					<template v-if="receivedTransactions.length == 0">
						<div class="text-center width-100">
							<h3 class="font-weight-bold mt-6 mb-0 text-center">No Available Data</h3>
						</div>
					</template>
				</v-row>
		      </v-tab-item>
		  </v-tabs-items>
		</div>
    </v-container>
</template>
<script type="text/javascript">
	export default {
    data: () => ({
    	tab: null,
    	transactions: [],
    }),

    mounted() {
    	this.fetch();
    },

    computed: {
    	pendingTransactions() {
    		return this.transactions.filter(x => x.status == 'PENDING');
    	},
    	approvedTransactions() {
    		return this.transactions.filter(x => x.status == 'APPROVED');
    	},
    	forPickupTransactions() {
    		return this.transactions.filter(x => x.status == 'PICKUP');
    	},
    	receivedTransactions() {
    		return this.transactions.filter(x => x.status == 'RECEIVED');
    	},

    	user() {
	        return this.getItem('user');
	    }
    },

    watch: {

    },

    methods: {
    	fetch() {
			this.$loader.show();

	        axios.post(this.routes['api.user.fetch-transactions'], {
	        	user_id : this.user.id
	        })
	        .then(response => {
	            const data = response.data;

	          this.$store.commit('transactions/set', data.transactions);
	          this.setItem('transactions', data.transactions);

	          this.transactions = this.getItem('transactions');
			  this.$loader.hide();

	        }).catch(error => {
	        	this.$PRX.alert.error(err, 'Network Error', 'options');
				this.$loader.hide();
	        })    
		},
    },
  }
</script>
<style lang="scss">
	.width-100 {
		width: 100%;
	}

	.notif-page__container {

		.v-slide-group__prev {
			display: none !important;
		}
	}
</style>