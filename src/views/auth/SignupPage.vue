<template>
    <v-container fill-height align-baseline px-0 py-0 class="auth-signup-page__container">
        <div class="width--100">
            <!-- Frame 1 -->
            <v-container px-4 py-4 mb-12>
                <v-row no-gutters class="mb-8 mt-12 text-center">
                    <v-col cols="12 mb-4">
                        <v-img
                            class="mx-auto"
                            max-height="100"
                            max-width="100"
                            :src="$PRXConfig().staticUrl('logo.png')"
                        ></v-img>
                    </v-col>
                    <v-col cols="12 mb-4">
                        <h4 class="font-weight-700 clr--black">Create Account</h4>
                    </v-col>
                    <!-- <v-col cols="12">
                        <p class="mb-0 clr--black font--size--smaller width--80 mx-auto">Lorem ipsum dolor sit amet consectetur adipiscing elit sed</p>
                    </v-col> -->
                </v-row>
                <form>
                    <v-row no-gutters class="mb-0">
                        <v-col cols="12">
                            <v-text-field
                            filled
                            rounded
                            :rules="accountNumberRules"
                            label="Account Number"
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" v-if="accountNumberExist">
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
                            <v-text-field 
                            filled
                            rounded
                            label="PASSWORD"
                            :append-icon="show1 ? 'fa-eye' : 'fa-eye-slash'"
                            :type="show1 ? 'text' : 'password'"
                            @click:append="show1 = !show1"
                            :disabled="loader" 
                            >
                            </v-text-field>
                            <v-text-field 
                            filled
                            rounded
                            label="Confirm Password"
                            :append-icon="show2 ? 'fa-eye' : 'fa-eye-slash'"
                            :type="show2 ? 'text' : 'password'"
                            @click:append="show2 = !show2"
                            :disabled="loader" 
                            >
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row no-gutters class="mb-5">
                        <v-col cols="12">
                            <template v-if="!accountNumberExist">
                                <v-btn large rounded color="#29648a" block @click="checkForAccountNumber">
                                    <span class="text--white font-weight-bold">
                                        PROCEED
                                    </span>
                                </v-btn>
                            </template>
                            <template v-else>
                                <v-btn large rounded color="#29648a" block @click="register">
                                    <span class="text--white font-weight-bold">
                                        SIGN UP
                                    </span>
                                </v-btn>
                            </template>

                            <v-dialog
                              v-model="dialog"
                            >
                              <v-card>
                                <v-row no-gutters>
                                    <v-col cols="12" class="text-center px-8 py-8">
                                        <v-img
                                            width="61"
                                            height="61"
                                            :src="$PRXConfig().staticUrl('icons/ic-success.svg')"
                                            class="mx-auto mb-4"
                                        ></v-img>
                                        <h4 class="clr--black mb-4 font-weight-700">Successfully registered!</h4>
                                        <p class="mb-6 clr--black text-xs-justify font--size--small">
                                            Please wait while the admin is still reviewing your account, you’ll be notified once approved.
                                        </p>
                                        <v-row no-gutters>
                                          <v-col cols="12">
                                            <v-btn large rounded color="#29648a" @click="closeDialog">
                                                <span class="text--white font-weight-bold">
                                                    OK
                                                </span>
                                            </v-btn>
                                          </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                              </v-card>
                            </v-dialog>
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
            dialog: false,
            show1: false,
            show2: false,
            accountNumberExist: false,
            accountNumberRules: [
                v => !!v || 'Account Number is required',
            ],
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
        }
    },


    mounted() {

    },

    computed: {

    },

    watch: {

    },

    methods: {
        checkForAccountNumber() {
            this.accountNumberExist = true;
        },

        register() {
            this.dialog = true;
        },

        closeDialog() {
            this.dialog = false;
        }
    }
}
</script>
