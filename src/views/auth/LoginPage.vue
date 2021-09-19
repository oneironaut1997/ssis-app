<template>
    <v-container fill-height align-baseline px-0 py-0 class="auth-login-page__container">
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
                    <v-col cols="12">
                        <!-- <p class="mb-0 clr--black font--size--smaller width--80 mx-auto">v{{ appobj.version }}</p> -->
                    </v-col>
                    <v-col cols="12 mb-4">
                        <h4 class="font-weight-700 clr--black">Welcome Back!</h4>
                    </v-col>
                </v-row>
                <form>
                <v-row no-gutters class="mb-0">
                    <v-col cols="12">
                        <div class="frm-form__row mb-0">
                            <v-text-field
                              filled
                              rounded
                              label="Email/Phone Number"
                              v-model="form.username"
                              :rules="usernameRules"
                            ></v-text-field>
                              <!-- :error-messages="getErrors('username')" -->
                        </div>
                        <div class="frm-form__row mb-0">
                            <v-text-field 
                                filled
                                rounded
                                label="PASSWORD"
                                :append-icon="show1 ? 'fa-eye-slash' : 'fa-eye'"
                                :type="show1 ? 'text' : 'password'"
                                @click:append="show1 = !show1"
                                v-model="form.password"
                                :rules="passwordRules"
                            >
                                <!-- :error-messages="getErrors('password')" -->
                            </v-text-field>
                        </div>
                    </v-col>
                </v-row>
                <v-row no-gutters class="mb-8">
                    <v-col cols="12">
                        <v-btn large rounded color="#29648a" block @click="login">
                            <span class="text--white font-weight-bold">
                                LOGIN
                            </span>
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col cols="12 text-center">
                        <span class="clr--black font--size--smaller">You don’t have an account? <a class="font--size--smaller" @click="$PRXRouter().goTo('signup')">Sign Up</a></span>
                    </v-col>
                </v-row>
                </form>
            </v-container>
        </div>
    </v-container>
</template>
<script type="text/javascript">

export default {


    data() {
        return {
            show1: false,
            form:{
                username:null,
                password:null
            },
            usernameRules: [
                v => !!v || 'Username is required',
            ],
            passwordRules: [
                v => !!v || 'Password is required',
            ],
        }
    },

    methods:{
        login() {
            this.$router.push('/');
        }
    }
}
</script>
<style lang="scss">

</style>