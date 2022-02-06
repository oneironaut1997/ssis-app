<template>
	<v-container fill-height align-baseline class="home-page__container pa-0 relative">
		<div class="width--100">
			<vue-pull-refresh
		      :on-refresh="onRefresh"
		      :config="options"
		    ></vue-pull-refresh>
			<v-row class="pa-6">
                <v-col cols="12" class="pa-0 messages-container">
					<template v-for="(message, index) in guidance_messages.messages">
		                <div
		                class="message-item mt-6 pa-3 relative"
		                :class="message.user_type == 'App\\Models\\Users\\User' ? 'is-user-message' : 'is-admin-message'"
		                >
		                	<span class="mb-0">{{ message.message }}</span>
		                	<small class="time-stamp">{{ message.created_at }}</small>
		                </div>
					</template>
					<template v-if="guidance_messages.length < 1">
						<div class="text-center">
							<h2 class="mb-0 mt-10">No Messages</h2>
						</div>
					</template>
                </v-col>
			</v-row>
            <div class="text-field__hldr px-3">
				<!-- <form> -->
                    <v-row no-gutters class="mb-0">
                        <v-col cols="10">
                            <v-text-field
                            label="Type Message"
                            required
                            name="mesage"
                            v-model="payloads.message"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="2">
                        	<v-btn
						      class="mx-2"
						      fab
						      color="primary"
						      @click="submit"
						    >
						      <v-icon dark>
						        fas fa-paper-plane
						      </v-icon>
						    </v-btn>
                        </v-col>
                    </v-row>
                <!-- </form> -->
            </div>
		</div>
	</v-container>
</template>
<script>
export default {

    data () {
        return {
            dialog: false,
            payloads: {},
            guidance_messages: {},
            options: {
		      errorLabel: "error",
		      startLabel: "start",
		      readyLabel: "ready",
		      loadingLabel: "loading...",
		      pullDownHeight: 70,
		    },
        }
    },


    mounted() {
        this.$loader.show();
        setTimeout(() => {
	    	this.fetch();
        }, 500);
        setTimeout(() => {
	    	this.listen();
        }, 2000);
    },

    computed: {
        user() {
            return this.getItem('user');
        }
    },

    watch: {

    },

    methods: {

    	fetch() {
        	axios.post(this.routes['api.user.fetch-guidance-messenger'], {user_id : this.user.id})
            .then(response => {
                const data = response.data;

		        this.$store.commit('guidance_messages/set', data.guidance_messages);
		        this.setItem('guidance_messages', data.guidance_messages);

		        this.guidance_messages = this.getItem('guidance_messages');

                this.$loader.hide();
            }).catch(error => {
                this.$loader.hide();
                this.$alert.show(this.parseResponse(error, 1), 'Oooops');
            })
    	},

    	listen() {
        	window.Echo.channel('admin-chat.'+this.guidance_messages.id)
	        .listen('.admin.chat-received', (e) => {
	            console.log(e.chatMessage);
	            console.log("receiving message...")
	            this.guidance_messages.messages.push(e.chatMessage);
	        })
    	},

        submit() {
            this.$loader.show();
            var payloads = new FormData();
            payloads.append('user_id', this.user.id);
            payloads.append('message', this.payloads.message ? this.payloads.message : '');
            payloads.append('room_id', this.guidance_messages.id ? this.guidance_messages.id : '');

            axios.post(this.routes['api.user.guidance-messenger'], payloads)
            .then(response => {
            	this.fetch();

            	this.payloads = {};
                this.$loader.hide();
            }).catch(error => {
                this.$loader.hide();
                this.$alert.show(this.parseResponse(error, 1), 'Oooops');
            })
        },

        onRefresh() {
	      return new Promise((resolve) => {
	        setTimeout(() => {
	          resolve();
	          this.fetch();
	        }, 1000);
	      });
	    },

    }
}
	
</script>
<style lang="scss">
	.text-field__hldr {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
	}

	.messages-container {
		max-height: 80vh;
		overflow-y: auto;
	}

	.message-item {
		border-radius: 20px;
		width: max-content;
		position: relative;
		min-width: 150px;
		margin-bottom: 30px;

		&.is-user-message {
			background-color: #022C43;
			margin-left: auto;
		
			span {
				color: #FFFFFF;
			}
		}

		&.is-admin-message {
			background-color: #FFD700;
		}
	}

	.time-stamp {
		position: absolute;
		bottom: -20px;
		left: 5px;
	}
</style>