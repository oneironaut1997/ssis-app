<template>
	<v-container fill-height align-baseline class="profile-page__container pa-0">
		<div class="width--100">
			<!-- Frame 1 -->
			<div class="frm-1__hldr pa-6 mt-10">
				<div class="profile-img__hldr mb-10">
					<v-avatar
					class="mx-auto d-block mb-4"
					color="primary"
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
					<h1 class="font-weight-bold text-center">{{ user.first_name }}  {{ user.last_name }}</h1>
				</div>
				<v-tabs
			      v-model="tab"
			      fixed-tabs
			      background-color="transparent"
			      color="primary"
			    >
			      <v-tab>
			        Information 
			      </v-tab>

			      <v-tab>
			        Security 
			      </v-tab>
			    </v-tabs>

			    <v-tabs-items v-model="tab">
			      <v-tab-item>
			        <div class="form__hldr mt-4">
						<v-form
						ref="form"
						lazy-validation
						>
							<v-text-field
							v-model="user.first_name"
							label="First Name"
							required
							></v-text-field>

							<v-text-field
							v-model="user.middle_name"
							label="Middle Name"
							required
							></v-text-field>

							<v-text-field
							v-model="user.last_name"
							label="Last Name"
							required
							></v-text-field>

							<v-select
							v-model="user.gender"
							:items="items"
							label="Gender"
							required
							></v-select>

							<v-text-field
							v-model="user.mobile_number"
							label="Contact Number"
							required
							></v-text-field>

							<v-text-field 
					        type="date" 
					        label="Birthdate *"
					        v-model="user.birthday"
					        ></v-text-field>

							<v-textarea
							v-model="user.address"
							auto-grow
							label="Address"
							rows="3"
							required
							></v-textarea>

							<v-btn
							class="mt-12"
							rounded
							color="primary"
							x-large
							block
							@click="changeInformation"
							>
							<span class="text--white font-weight-bold">
								Apply Changes
							</span>
							</v-btn>

						</v-form>
					</div>
			      </v-tab-item>
			      <v-tab-item>
		        	<div class="form__hldr mt-4">
						<v-form
							ref="form"
							lazy-validation
							>
							
							<v-text-field
							:append-icon="show1 ? 'fa-eye' : 'fa-eye-slash'"
							:type="show1 ? 'text' : 'password'"
							label="Old Password"
							hint="At least 8 characters"
							class="input-group--focused"
							@click:append="show1 = !show1"
							v-model="payloads.current_password"
							></v-text-field>

							<v-text-field
							:append-icon="show2 ? 'fa-eye' : 'fa-eye-slash'"
							:type="show2 ? 'text' : 'password'"
							label="Re-enter Password"
							hint="At least 8 characters"
							class="input-group--focused"
							@click:append="show2 = !show2"
							v-model="payloads.password"
							></v-text-field>

							<v-text-field
							:append-icon="show3 ? 'fa-eye' : 'fa-eye-slash'"
							:type="show3 ? 'text' : 'password'"
							label="New Password"
							hint="At least 8 characters"
							class="input-group--focused"
							@click:append="show3 = !show3"
							v-model="payloads.password_confirmation"
							></v-text-field>


							<v-btn
							class="mt-12"
							rounded
							color="primary"
							x-large
							block
							@click="changePassword"
							>
							<span class="text--white font-weight-bold">
								Apply Changes
							</span>
							</v-btn>
	    
						</v-form>
					</div>
			      </v-tab-item>
			    </v-tabs-items>
			</div>
		</div>
    </v-container>
</template>
<script type="text/javascript">
export default {
	data: () => ({
		tab: null,
		user : {},
		payloads: {},
		items: [
		'Male',
		'Female',
		'Prefer not to say',
		],
		show1: false,
		show2: false,
		show3: false,
	}),

	computed: {

	},

	mounted() {
		this.user = this.getItem('user');
	},

	methods: {

		changeInformation() {
	      this.$loader.show();
	      var payloads = new FormData();
	      payloads.append('user_id', this.user.id);
	      payloads.append('first_name', this.user.first_name ? this.user.first_name : '');
	      payloads.append('middle_name', this.user.middle_name ? this.user.middle_name : '');
	      payloads.append('last_name', this.user.last_name ? this.user.last_name : '');
	      payloads.append('gender', this.user.gender ? this.user.gender : '');
	      payloads.append('mobile_number', this.user.mobile_number ? this.user.mobile_number : '');
	      payloads.append('birthday', this.user.birthday ? this.user.birthday : '');
	      payloads.append('place_of_birth', this.user.place_of_birth ? this.user.place_of_birth : '');
	      payloads.append('address', this.user.address ? this.user.address : '');

	      axios.post(this.routes['api.user.profile-update'], payloads)
	      .then(response => {
	          this.setItem('user', response.data.user);
	          this.$loader.hide();
	          this.$alert.show('Profile updated.', 'Success');
	      }).catch(error => {
	          this.$loader.hide();
	          this.$alert.show(this.parseResponse(error, 1), 'Oooops');
	      })
	  	},

	  	changePassword() {
	      this.$loader.show();
	      axios.post(this.routes['api.user.change-password'], this.payloads)
	        .then(response => {
	          this.$alert.show(response.data.message, response.data.title);
	          this.payloads = {};
	          this.$loader.hide();
	        }).catch(error => {
	          this.$alert.show(this.parseResponse(error, 1), 'Oooops!');
	          this.$loader.hide();
	        })
	    }
	}
}
</script>
<style lang="scss">

	.profile-page__container {

	}
	
</style>