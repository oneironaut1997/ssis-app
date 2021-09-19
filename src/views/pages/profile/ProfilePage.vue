<template>
	<v-container fill-height align-baseline class="profile-page__container pa-0">
		<div class="width--100">
			<!-- Frame 1 -->
			<div class="frm-1__hldr pa-6">
				<div class="profile-img__hldr mb-10">
					<v-avatar
					class="mx-auto d-block mb-4"
					color="#29648a"
					size="80"
					>
						<v-icon
						dark
						style="font-size: 60px;"
						>
						fa-user-circle
						</v-icon>
						<!-- <img
						src="https://cdn.vuetifyjs.com/images/john.jpg"
						alt="John"
						> -->
					</v-avatar>
					<h1 class="font-weight-bold text-center">John Doe</h1>
				</div>
				<div class="profile-nav__hldr">
					<v-btn
					class="mb-4 justify-start"
					rounded
					color="#FFFFFF"
					x-large
					block
					@click="goToProfileForm"
					>
					<span class="font-weight-bold">
						Profile
					</span>
					</v-btn>
					<v-btn
					class="mb-4 justify-start"
					rounded
					color="#FFFFFF"
					x-large
					block
					@click="goToProfilePasswordForm"
					>
					<span class="font-weight-bold">
						Change Password
					</span>
					</v-btn>
					<v-btn
					class="mb-4 justify-start"
					rounded
					color="#FFFFFF"
					x-large
					block
					>
					<span class="font-weight-bold">
						Logout
					</span>
					</v-btn>
				</div>
			</div>
		</div>
    </v-container>
</template>
<script type="text/javascript">
export default {
	data: () => ({
  }),
	methods: {
		goToProfileForm() {
			this.$router.push('/profile/form');
		},

		goToProfilePasswordForm() {
			this.$router.push('/profile/password');
		}
	}
}
</script>
<style lang="scss">

	.profile-page__container {

	}
	
</style>