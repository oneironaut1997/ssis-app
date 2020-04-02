<template>
	<v-container>
		<v-layout align-center row wrap>
			<v-flex xs12>
				<v-card class="pa-4">
					<!-- Define form ref as 'sampleForm' -->
					<form-control ref="sampleForm">
						<v-container>
							<v-layout row wrap>
								<v-flex xs12>
									<h1 class="headline">Sample Form</h1>
								</v-flex>

								<v-flex xs12>
									<v-text-field
									name="first_name"
									label="First Name"
									:rules="rules.required"
									></v-text-field>
								</v-flex>

								<v-flex xs12>
									<v-text-field
									name="middle_name"
									label="Middle Name"
									:rules="rules.required"
									></v-text-field>
								</v-flex>

								<v-flex xs12>
									<v-text-field
									name="last_name"
									label="Last Name"
									:rules="rules.required"
									></v-text-field>
								</v-flex>

								<v-flex xs12>
									<v-radio-group v-model="select" row>
										<v-radio label="Basic" :value="false"></v-radio>
										<v-radio label="Advanced" :value="true"></v-radio>
									</v-radio-group>
								</v-flex>

								<template v-if="select">
									<v-flex xs12>
										<v-text-field
										name="email"
										label="Email"
										v-model="email"
										required

										></v-text-field>
									</v-flex>

									<v-flex xs12>
										<v-text-field
										name="address"
										label="Address"
										></v-text-field>
									</v-flex>

									<v-flex xs12>
										<v-select
										:items="items"
										label="Standards"
										></v-select>
									</v-flex>

									<v-flex xs12>
										<v-select
										:items="items"
										label="Variables"
										></v-select>
									</v-flex>

									<v-flex xs12>
										<v-select
										:items="items"
										label="Options"
										></v-select>
									</v-flex>

									<v-flex xs12>
										<v-text-field
										name="reason"
										label="Reason"
										></v-text-field>
									</v-flex>
								</template>

								<v-flex xs12 text-xs-right>
									<!-- Trigger submit of 'sampleForm' -->
									<v-btn @click="submit('sampleForm')" color="primary">Submit</v-btn>
								</v-flex>
							</v-layout>
						</v-container>
					</form-control>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script type="text/javascript">
import FormControl from '../components/FormControl.vue'

export default {

	data () {
		return {
			select: false,
			items: ['Foo', 'Bar', 'Fizz', 'Buzz'],

			// v-model fields
			first_name: '',
			last_name: '',
			middle_name: '',
			email: '',
			rules: {
				required: [
					v => !!v || 'This field is required',
				]
			}


		}
	},

	components: {
		'form-control': FormControl
	},

	methods: {
		submit(form) {
			
			// Submits form. The 'true' here enables throw error so you can catch the promise error,
			// If 'false' is passed as the second param, the catch block below will not fire
			this.$refs[form].submitForm(true)
				.then(data => {
					// alert response data
					this.$PRXResponse().alertResponse(data, true);
				})
				.catch(error => {
					// do something with the error, such as reset the state
					alert(error);
				});
		}
	}
}
</script>
