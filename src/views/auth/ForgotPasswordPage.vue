<template>
    <v-container fill-height align-baseline px-0 py-0 class="auth-login-page__container">
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
                        <h4 class="font-weight-700 clr--black">Forgot Password</h4>
                    </v-col>
                </v-row>
                <form>
                <v-row no-gutters class="mb-0">
                    <v-col cols="12">
                        <div class="frm-form__row mb-0">
                            <v-text-field
                              label="Email *"
                              v-model="payload.email"
                            ></v-text-field>
                        </div>
                    </v-col>
                </v-row>
                <v-row no-gutters class="mb-5 mt-5">
                    <v-col cols="12">
                        <v-btn large rounded color="primary" block @click="submit">
                            <span class="text--white font-weight-bold">
                                SUBMIT
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


    data() {
        return {
            payload:{},
        }
    },

    methods:{
        submit() {

            this.$loader.show();
            axios.post(this.routes['api.forgot-password'], this.payload)
                .then(response => {
                    const data = response.data;
                    this.$alert.show(this.parseResponse(data.message), 'Success!');
                    setTimeout(() => {
                        this.$router.push('/login');
                    }, 1000)

                }).catch(error => {
                    this.$alert.show(this.parseResponse(error, 1), 'Oppps...');
                }).finally(() => {
                    this.$loader.hide();
                });
        },
    }
}
</script>
<style lang="scss">

</style>