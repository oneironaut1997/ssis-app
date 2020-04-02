<template>
	<v-form v-model="valid" ref="form" :lazy-validation="true">
		<slot></slot>
	</v-form>
</template>

<script type="text/javascript">

	import axios from 'axios';

	export default {

		data() {
			return {
				serverErrors: [],
				valid: null,
			};
		},

		methods: {
			submitForm (throwError = false) {

				if(this.$refs.form.validate()) {
					return this.deliverPayload(throwError);
				}

				return Promise.reject();
			},

			deliverPayload(throwError) {
				if (this.$PRX.dialogLoader.loading) { return Promise.reject() }

				this.$PRX.dialogLoader.show();

				let form = this.$el,
					params = new FormData(form);

				return axios[this.method](this.action, params)
					.then(response => {
						this.$PRX.dialogLoader.hide();
						return response.data;

					})
					.catch(error => {
						this.$PRX.dialogLoader.hide();
						
						// Set error fields if there is a return value
						this.serverErrors = this.$PRXResponse().parseAndAlertError(error);

						// throw the error down the catch train if true,
						// otherwise, error will get stuck here
						if(throwError) {
							throw error;
						}
					});	
			}
		},

		props: {
			action: {
				default: 'https://httpbin.org/anything',
				type: String
			},

			method: {
				default: 'post',
				type: String
			},
		}
	}
</script>
