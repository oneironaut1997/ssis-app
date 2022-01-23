<template>
	<div>
		<!-- Top Navigation -->
		<v-app-bar app
			v-if="
			!$PRXRouter().isOnRoute('login')
			&& !$PRXRouter().isOnRoute('signup')
			&& !$PRXRouter().isOnRoute('forgot-password')
			"
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
				<h4 class="font-weight-bold"> {{ routeName }}</h4>
				<v-app-bar-nav-icon color="white" @click="showSidebar"></v-app-bar-nav-icon>
			</div>
			<v-spacer></v-spacer>

		</v-app-bar>
		<!-- Sidebar -->
		<v-navigation-drawer temporary v-model="drawer" app color="white">
			<v-list-item class="white">
				<v-list-item-content>
					<v-list-item-title class="title black--text">
						SSIS APP
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
				<template v-if="authenticated">
					<template v-for="item in items">
						<v-list-item
							:key="item.title"
							link
							@click="$PRXRouter().goTo(item.action)"
							:input-value="$PRXRouter().isOnRoute(item.action)"
							v-if="item.title !== 'Login' && item.title !== 'Logout'"
							>
									<v-list-item-icon>
									<v-icon>{{ item.icon }}</v-icon>
									</v-list-item-icon>

									<v-list-item-content>
										<v-list-item-title>{{ item.title }}</v-list-item-title>
									</v-list-item-content>
						</v-list-item>
					</template>
				</template>
				<template v-else>
					<template v-for="item in items">
						<v-list-item
							:key="item.title"
							link
							@click="$PRXRouter().goTo(item.action)"
							:input-value="$PRXRouter().isOnRoute(item.action)"
							v-if="item.title !== 'Account' && item.title !== 'Logout'"
							>
									<v-list-item-icon>
									<v-icon color="primary">{{ item.icon }}</v-icon>
									</v-list-item-icon>

									<v-list-item-content>
										<v-list-item-title>{{ item.title }}</v-list-item-title>
									</v-list-item-content>
						</v-list-item>
					</template>
				</template>
				<template>
					<template v-for="item in items">
					<v-list-item
					:key="item.title"
					@click="toLogout"
					v-if="item.title == 'Logout'"
					>
							<v-list-item-icon>
							<v-icon>{{ item.icon }}</v-icon>
							</v-list-item-icon>

							<v-list-item-content>
								<v-list-item-title>{{ item.title }}</v-list-item-title>
							</v-list-item-content>
					</v-list-item>
					</template>
				</template>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script type="text/javascript">
	export default {

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
						title: 'Registrar',
						icon: 'fa-mail-bulk',
						action: 'registrar-form'
					},
					{
						title: 'Inquiries',
						icon: 'fa-comments',
						action: 'inquiry'
					},
					{
						title: 'Student Services',
						icon: 'fa-file-contract',
						action: 'application'
					},
					{
						title: 'Annoucements',
						icon: 'fa-bullhorn',
						action: 'announcement'
					},
					{
						title: 'Guidance',
						icon: 'fa-chalkboard-teacher',
						action: 'guidance-form'
					},
					{
						title: 'Notifications',
						icon: 'fa-bell',
						action: 'notification'
					},
					{
						title: 'ICTMO',
						icon: 'fa-server',
						action: 'id-form'
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
					{
						title: 'Logout',
						icon: 'fa-sign-out-alt',
						action: 'logout'
					},
				]

			}
		},

		mounted () {

		},

		computed : {
			authenticated() {
				return this.$store.state.user.authenticated;
			},

			routeName() {
				var name = null;
				switch(this.$route.name) {
					case 'home':
						name = 'Home';
						break;
					case 'request':
						name = 'Request';
						break;
					case 'registrar-form':
						name = 'Registrar';
						break;
					case 'guidance-form':
						name = 'Guidance';
						break;
					case 'id-form':
						name = 'ID Form';
						break;			

					case 'application':
						name = 'Application';
						break;

					case 'inquiry':
						name = 'Inquiry';
						break;
					case 'registrar-messenger':
						name = 'Registrar';
						break;
					case 'guidance-messenger':
						name = 'Guidance';
						break;
					case 'stident-service-messenger':
						name = 'Student Service';
						break;
					case 'cashier-messenger':
						name = 'Cashier';
						break;
					case 'ictmo-messenger':
						name = 'ICTMO';
						break;

					case 'announcement':
						name = 'Annoucements';
						break;
					case 'registrar-announcement':
						name = 'Registrar';
						break;
					case 'guidance-announcement':
						name = 'Guidance';
						break;
					case 'student-service-announcement':
						name = 'Student Service';
						break;
					case 'cashier-announcement':
						name = 'Cashier';
						break;
					case 'ictmo-announcement':
						name = 'ICTMO';
						break;

					case 'notification':
						name = 'Notifications';
						break;

					case 'profile':
						name = 'Profile';
						break;
				}

				return name;
			},
		},

		methods: {
			showSidebar () {
				this.drawer = true;
			},

			goBack() {
				this.$router.back();
			},

			toLogout() {
				this.$loader.show();
				setTimeout(() => {
					this.$loader.hide();
					this.logout()
				}, 500);
			}
		}

	}
</script>
<style lang="scss">
	
	.v-app-bar.v-app-bar--fixed {
		position: relative;
		background-color: #022C43 !important; 
	}
</style>