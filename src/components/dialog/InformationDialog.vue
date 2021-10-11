<template>
	<v-row justify="center">
	  	<v-dialog
	    	v-model="dialog"
	    	persistent
	    	max-width="290">

	    	<template v-slot:activator="{ on, attrs }">
	      		<v-btn
		          	icon
		          	width="15"
		          	height="19"
	          		class="float-right"
	          		v-bind="attrs"
	          		v-on="on">
	      		</v-btn>
	    	</template>

	    	<v-card>
	      		<v-row no-gutters>
	        		<v-col cols="12" class="text-center px-4 py-12">
	          			<h2 class="clr--black mb-4 font-weight-bold">{{ header }}</h2>
			          	<p class="mb-4 clr--black text-xs-justify" v-html="body"></p>
	          			<v-col cols="12" class="pa-0">
	            		 	<v-btn large rounded color="#29648a" block @click="dialog = false">
                        <span class="text--white font-weight-bold">
                        	{{ btnText }}
                        </span>
                    </v-btn>
	          			</v-col>
	        		</v-col>
	      		</v-row>
	    	</v-card>
	  	</v-dialog>
	</v-row>
</template>
<script>
import Vue from 'vue';
  export default {
  	props: {
  		// dialog: {
  		// 	default: false,
  		// 	type: Boolean
  		// },

  		// header: String,
  		// body: String,
  		// btnText: {
  		// 	default: 'OK',
  		// 	type: String
  		// },
  	},

  	data() {
  		return {
  			dialog: false,
  			body: null,
  			header: null,
  			btnText: null
  		}
  	},

    mounted() {
    	this.init();
    },

    methods: {
		init() {
			if(typeof(Vue.prototype.alert) !== 'object') {
				Vue.prototype.$alert = {};
			}

			Vue.prototype.$alert = this;
		},

		show(body, header = "Error", btnText = "OK", option = {}) {
			this.body = body;
			this.header = header;
			this.btnText = btnText;
			
			return new Promise((resolve, reject) => {
				this.dialog = true;
			});
		}
    }
  }
</script>