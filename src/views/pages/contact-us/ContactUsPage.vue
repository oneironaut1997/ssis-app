<template>
	<v-container fill-height align-baseline class="contact-us-page__container pa-0">
		<div class="width--100">
			<!-- Frame 1 -->
			<div class="frm-1__hldr pa-6">
				<template v-for="item in items">
					<v-card :key="item.id" class="pa-4 br-8 mb-2">
						<h2 class="font-weight-bold">{{ item.name }}</h2>
						<p class="mb-2">{{ item.address }}</p>
						<p class="mb-0 d-flex align-center">
							<v-icon class="mr-2 fz-16">
								fas fa-phone
							</v-icon>
							<a :href="`telto:${item.mobile_no}`" target="_blank" class="text--black">{{ item.mobile_no }}</a>
							<a :href="`telto:${item.phone_no}`" target="_blank" class="text--black">, {{ item.phone_no }}</a>
						</p>
						<p class="mb-2 d-flex align-center">
							<v-icon class="mr-2 fz-16">
								fas fa-envelope
							</v-icon>
							<a :href="`mailto:${item.email}`" target="_blank" class="text--black">{{ item.email }}</a>
						</p>
						<h3 class="mb-0 d-flex align-center">
							<v-icon class="mr-2 fz-16">
								fas fa-route
							</v-icon>
							<a :href="item.link" target="_blank" class="font-weight-bold">Direction</a>
						</h3>
					</v-card>
				</template>
			</div>
		</div>
    </v-container>
</template>
<script type="text/javascript">
	export default {
		mounted () {
		},

		data() {
			return {
				items: [
					{
						id: 1,
						name: 'Branch Name',
						address: 'Sample Bddressbranch Address',
						email: 'sample@email.com',
						mobile_no: '09123456789',
						phone_no: '523727467',
						working_hours: '8:00am - 6:00pm',
						link: 'https://www.google.com/maps'
					},
					{
						id: 2,
						name: 'Branch Name',
						address: 'Branch Address',
						email: 'sample@email.com',
						mobile_no: '09123456789',
						phone_no: '523727467',
						working_hours: '8:00am - 6:00pm',
						link: 'https://www.google.com/maps'
					},
					{
						id: 3,
						name: 'Branch Name',
						address: 'Branch Address',
						email: 'sample@email.com',
						mobile_no: '09123456789',
						phone_no: '523727467',
						working_hours: '8:00am - 6:00pm',
						link: 'https://www.google.com/maps'
					},
					{
						id: 4,
						name: 'Branch Name',
						address: 'Branch Address',
						email: 'sample@email.com',
						mobile_no: '09123456789',
						phone_no: '523727467',
						working_hours: '8:00am - 6:00pm',
						link: 'https://www.google.com/maps'
					},
					{
						id: 5,
						name: 'Branch Name',
						address: 'Branch Address',
						email: 'sample@email.com',
						mobile_no: '09123456789',
						phone_no: '523727467',
						working_hours: '8:00am - 6:00pm',
						link: 'https://www.google.com/maps'
					},
				]

			}
		},

		methods: {
			
		}

	}
</script>
<style lang="scss">
	.contact-us-page__container {

		.fz-16 {
			font-size: 16px !important;
		}

		.br-8 {
			border-radius: 8px !important;
		}

		.text--black {
			color: #000000;
		}
	}
</style>