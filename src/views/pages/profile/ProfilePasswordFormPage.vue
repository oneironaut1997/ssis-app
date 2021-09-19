<template>
	<v-container fill-height align-baseline class="profile-password-form-page__container pa-0">
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
				<div class="form__hldr">
					<v-form
						ref="form"
						v-model="valid"
						lazy-validation
						>
						<v-text-field
						filled
						rounded
						:append-icon="show1 ? 'fa-eye' : 'fa-eye-slash'"
						:rules="[rules.required, rules.min]"
						:type="show1 ? 'text' : 'password'"
						label="Old Password"
						hint="At least 8 characters"
						value="password123"
						class="input-group--focused"
						@click:append="show1 = !show1"
						></v-text-field>

						<v-text-field
						filled
						rounded
						:append-icon="show2 ? 'fa-eye' : 'fa-eye-slash'"
						:rules="[rules.required, rules.min]"
						:type="show2 ? 'text' : 'password'"
						label="Re-enter Password"
						hint="At least 8 characters"
						value="password123"
						class="input-group--focused"
						@click:append="show2 = !show2"
						></v-text-field>

						<v-text-field
						filled
						rounded
						:append-icon="show3 ? 'fa-eye' : 'fa-eye-slash'"
						:rules="[rules.required, rules.min]"
						:type="show3 ? 'text' : 'password'"
						label="New Password"
						hint="At least 8 characters"
						value="password123"
						class="input-group--focused"
						@click:append="show3 = !show3"
						></v-text-field>


						<v-btn
						rounded
						color="#29648a"
						x-large
						block
						>
						<span class="text--white font-weight-bold">
							Apply Changes
						</span>
						</v-btn>
    
					</v-form>
				</div>
			</div>
		</div>
    </v-container>
</template>
<script type="text/javascript">
export default {
	data: () => ({
      valid: true,
      show1: false,
      show2: true,
      show3: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
      },
   }),

		methods: {

		}
}
</script>
<style lang="scss">

	.profile-password-form-page__container {
		
	}
	
</style>