<template>
	<div>
		<!-- Top Navigation -->
		<v-app-bar app
			color="accent-4"
			dark
			dense
			flat
			>
			<div class="width--100 d-flex align-center justify-space-between">
				<v-btn
				v-if="!$PRXRouter().isOnRoute('home')"
				icon
				color="white"
				@click="goBack"
				>
				<v-icon>fa-chevron-left</v-icon>
				</v-btn>
				<v-app-bar-nav-icon color="white" :class="!$PRXRouter().isOnRoute('home') ? '' : 'mx-auto d-block'" @click="showSidebar"></v-app-bar-nav-icon>
			</div>
			<v-spacer></v-spacer>

		</v-app-bar>
		<!-- Sidebar -->
		<v-navigation-drawer temporary v-model="drawer" app color="white">
			<v-list-item class="white">
				<v-list-item-content>
					<v-list-item-title class="title black--text">
						LOAN APP
					</v-list-item-title>
					<v-list-item-subtitle class="black--text">
						Sample Text
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-divider></v-divider>

			<v-list
			dense
			nav
			>
				<v-list-item
					v-for="item in items"
					:key="item.title"
					link
					@click="$PRXRouter().goTo(item.action)"
					:input-value="$PRXRouter().isOnRoute(item.action)"
					>
					<v-list-item-icon>
					<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script type="text/javascript">
	export default {
		mounted () {
		},

		data() {
			return {
				drawer: false,
				items: [
					{
						title: 'Home',
						icon: 'fa-home',
						action: 'home'
					},
					{
						title: 'Loans',
						icon: 'fa-chart-pie',
						action: 'loans'
					},
					{
						title: 'Contact Us',
						icon: 'fa-address-book',
						action: 'contact-us'
					},
					{
						title: 'Account',
						icon: 'fa-user-circle',
						action: 'profile'
					},
					{
						title: 'Login',
						icon: 'fa-sign-in-alt',
						action: 'login'
					},
				]

			}
		},

		methods: {
			showSidebar () {
				this.drawer = true;
			},

			goBack() {
				this.$router.back();
			}
		}

	}
</script>
<style lang="scss">
	
	.v-app-bar.v-app-bar--fixed {
		position: relative;
		background-color: #29648a !important; 
	}
</style>