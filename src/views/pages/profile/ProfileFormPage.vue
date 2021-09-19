<template>
	<v-container fill-height align-baseline class="profile-form-page__container pa-0">
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
						:rules="firstNameRules"
						label="First Name"
						required
						></v-text-field>

						<v-text-field
						filled
						rounded
						:rules="middleNameRules"
						label="Middle Name"
						required
						></v-text-field>

						<v-text-field
						filled
						rounded
						:rules="lastNameRules"
						label="Last Name"
						required
						></v-text-field>

						<v-text-field
						filled
						rounded
						:rules="emailRules"
						label="Email"
						required
						></v-text-field>

						<v-select
						:items="items"
						filled
						rounded
						:rules="genderRules"
						label="Gender"
						required
						></v-select>

						<v-text-field
						filled
						rounded
						:rules="contactNumberRules"
						label="Contact Number"
						required
						></v-text-field>

						<v-text-field
						filled
						rounded
						:rules="placeBirthRules"
						label="Place of Birth"
						required
						></v-text-field>

						<v-textarea
						filled
						rounded
						auto-grow
						:rules="addressRules"
						label="Address"
						rows="3"
						required
						></v-textarea>

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
      firstNameRules: [
        v => !!v || 'First Name is required',
      ],
      middleNameRules: [
        v => !!v || 'Middle Name is required',
      ],
      lastNameRules: [
        v => !!v || 'Last Name is required',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      contactNumberRules: [
        v => !!v || 'Contact Number is required',
      ],
      genderRules: [
        v => !!v || 'Gender is required',
      ],
      placeBirthRules: [
        v => !!v || 'Place of Birth is required',
      ],
      addressRules: [
        v => !!v || 'Address is required',
      ],
      items: [
        'Male',
        'Female',
        'Prefer not to say',
      ],
   }),
}
</script>
<style lang="scss">

	.profile-form-page__container {
		
	}
	
</style>