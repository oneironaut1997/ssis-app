<template>
    <v-container fill-height align-baseline px-0 py-0 class="auth-signup-page__container">
        <div class="width--100">
            <!-- Frame 1 -->
            <v-container px-4 py-4 mb-12>
                <v-row no-gutters class="mb-8 mt-12 text-center">
                    <v-col cols="12 mb-4">
                        <v-img
                            class="mx-auto"
                            max-height="150"
                            max-width="150"
                            :src="$PRXConfig().staticUrl('ssis-logo-dark.png')"  
                        ></v-img>
                    </v-col>
                    <v-col cols="12 mb-4">
                        <h4 class="font-weight-700 clr--black">Create Account</h4>
                    </v-col>
                </v-row>
                <form>
                    <v-row no-gutters class="mb-0">
                        <v-col cols="12">
                            <v-text-field
                            label="Student ID *"
                            required
                            name="student_id"
                            v-model="payload.student_id"
                            ></v-text-field>

                            <v-text-field
                            label="First Name *"
                            required
                            name="first_name"
                            v-model="payload.first_name"
                            ></v-text-field>

                            <v-text-field
                            label="Middle Name *"
                            required
                            name="middle_name"
                            v-model="payload.middle_name"
                            ></v-text-field>

                            <v-text-field
                            label="Last Name *"
                            required
                            name="last_name"
                            v-model="payload.last_name"
                            ></v-text-field>

                            <v-text-field
                            label="Username *"
                            required
                            name="username"
                            v-model="payload.username"
                            ></v-text-field>

                            <v-text-field
                            label="Email *"
                            required
                            name="email"
                            v-model="payload.email"
                            ></v-text-field>

                            <v-select
                            :items="items"
                            label="Gender *"
                            required
                            name="gender"
                            v-model="payload.gender"
                            ></v-select>

                            <v-text-field
                            label="Contact Number *"
                            required
                            name="mobile_number"
                            v-model="payload.mobile_number"
                            ></v-text-field>

                            <v-text-field 
                            type="date" 
                            label="Birthdate *"
                            name="birthday" 
                            v-model="payload.birthday"
                            ></v-text-field>

                            <v-text-field
                            label="Address *"
                            required
                            name="address"
                            v-model="payload.address"
                            ></v-text-field>

                            <v-text-field 
                            label="Password *"
                            :append-icon="show1 ? 'fa-eye' : 'fa-eye-slash'"
                            :type="show1 ? 'text' : 'password'"
                            @click:append="show1 = !show1"
                            name="password"
                            v-model="payload.password"
                            >
                            </v-text-field>
                            <v-text-field 
                            label="Confirm Password *"
                            :append-icon="show2 ? 'fa-eye' : 'fa-eye-slash'"
                            :type="show2 ? 'text' : 'password'"
                            @click:append="show2 = !show2"
                            name="password"
                            v-model="payload.password_confirmation"
                            >
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row no-gutters class="mb-5 mt-5">
                        <v-col cols="12">
                            <v-btn large rounded color="primary" block @click="submit">
                                <span class="text--white font-weight-bold">
                                    SIGN UP
                                </span>
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-row no-gutters>
                        <v-col cols="12 text-center">
                            <span class="clr--black font--size--smaller">Already have an account? <a class="font--size--smaller" @click="$PRXRouter().goTo('login')">Login</a></span>
                        </v-col>
                    </v-row>
                </form>
            </v-container>
        </div>
    </v-container>
</template>

<script type="text/javascript">

export default {

    data () {
        return {
            show1: false,
            show2: false,
            items: [
            'Male',
            'Female',
            'Prefer not to say',
            ],
            payload: {},
        }
    },


    mounted() {

    },

    computed: {

    },

    watch: {

    },

    methods: {
        submit() {
            this.$loader.show();
            axios.post(this.routes['api.register'], this.payload)
                .then(response => {
                    this.isSuccess = true;
                    this.$loader.hide();
                    this.$alert.show(response.data.message, 'Success');
                    this.$PRXRouter().goTo('login');
                }).catch(error => {
                    this.isSuccess = false;
                    this.$loader.hide();          
                    this.$alert.show(this.parseResponse(error, 1), 'Oooops!');
                })
        },
    }
}
</script>
