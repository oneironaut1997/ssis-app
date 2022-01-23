<template>
    <v-container fill-height align-baseline px-0 py-0 class="registrar-form-page__container">
        <div class="width--100">
            <v-row class="pa-6">
                <v-col cols="12">
                    <h2>Guidance Transaction Form (For Good Moral Certificate)</h2>
                </v-col>
                <v-col cols="12">
                    <form>
                        <v-row no-gutters class="mb-0">
                            <v-col cols="12">

                                <v-text-field
                                label="First Name *"
                                required
                                name="first_name"
                                v-model="payloads.first_name"
                                ></v-text-field>

                                <v-text-field
                                label="Middle Name *"
                                required
                                name="middle_name"
                                v-model="payloads.middle_name"
                                ></v-text-field>

                                <v-text-field
                                label="Last Name *"
                                required
                                name="last_name"
                                v-model="payloads.last_name"
                                ></v-text-field>

                                <v-select
                                :items="courses"
                                label="Course *"
                                required
                                name="course"
                                v-model="payloads.course"
                                ></v-select>

                                <v-text-field
                                label="Email *"
                                required
                                name="email"
                                v-model="payloads.email"
                                ></v-text-field>

                                <v-text-field
                                label="Contact Number *"
                                required
                                name="contact_number"
                                v-model="payloads.contact_number"
                                ></v-text-field>

                                <v-text-field
                                label="Alternatitve Contact Number *"
                                required
                                name="alt_contact_number"
                                v-model="payloads.alt_contact_number"
                                ></v-text-field>

                                <p class="mb-0">Sex *</p>
                                <v-radio-group
                                class="mt-0"
                                v-model="payloads.gender"
                                >
                                    <v-radio
                                    label="Male"
                                    value="Male"
                                    ></v-radio>
                                    <v-radio
                                    label="Female"
                                    value="Female"
                                    ></v-radio>
                                    <v-radio
                                    label="Prefer not to say"
                                    value="Prefer not to say"
                                    ></v-radio>
                                </v-radio-group>

                                <p class="mb-0">Status *</p>
                                <v-radio-group
                                class="mt-0"
                                v-model="payloads.attainment"
                                >
                                    <v-radio
                                    label="Graduate"
                                    value="Graduate"
                                    ></v-radio>
                                    <v-radio
                                    label="Enrolled"
                                    value="Enrolled"
                                    ></v-radio>
                                    <v-radio
                                    label="Transferred to another School"
                                    value="Transferred to another School"
                                    ></v-radio>
                                </v-radio-group>

                                <p class="mb-0">Purpose *</p>
                                <v-radio-group
                                class="mt-0"
                                v-model="payloads.purpose"
                                >
                                    <v-radio
                                    label="Enrollment"
                                    value="Enrollment"
                                    ></v-radio>
                                    <v-radio
                                    label="Scholarship"
                                    value="Scholarship"
                                    ></v-radio>
                                    <v-radio
                                    label="Others"
                                    value="Others"
                                    ></v-radio>
                                </v-radio-group>

                                <p class="mb-0">Payment Type *</p>
                                <v-radio-group
                                class="mt-0"
                                v-model="payloads.payment_type"
                                >
                                    <v-radio
                                    label="Cashier"
                                    value="cashier"
                                    ></v-radio>
                                    <!-- <v-radio
                                    label="Land Bank Portal"
                                    value="lbp"
                                    ></v-radio> -->
                                </v-radio-group>

                                <template v-if="payloads.payment_type == 'lbp'">
                                    <a href="https://epaymentportal.landbank.com/pay1.php?code=TWROaDE5VXRvV01EUUtaeFF4VkluM0svTkdZeTY0dzA5c0xOUWlZRFp6az0=" target="_blank">
                                        <v-img
                                        width="200"
                                        height="auto"
                                        :src="$PRXConfig().staticUrl('linkbiz.png')"
                                        class="mx-auto mb-4"
                                        ></v-img>
                                    </a>
                                    <v-file-input
                                    v-model="payloads.file_path"
                                    show-size
                                    label="OR Receipt"
                                    ></v-file-input>
                                </template>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="mb-5 mt-5">
                            <v-col cols="12">
                                <v-btn large rounded color="primary" block @click="submit">
                                    <span class="text--white font-weight-bold">
                                        SUBMIT
                                    </span>
                                </v-btn>
                                <v-dialog v-model="dialog">
                                    <v-card>
                                        <v-row no-gutters>
                                            <v-col cols="12" class="text-center px-8 py-8">
                                                <v-img
                                                width="61"
                                                height="61"
                                                :src="$PRXConfig().staticUrl('icons/ic-success.svg')"
                                                class="mx-auto mb-4"
                                                ></v-img>
                                                <h4 class="clr--black mb-4 font-weight-700">Success!</h4>
                                                <p class="mb-6 clr--black text-xs-justify font--size--small">
                                                Please wait while the admin is still reviewing your transaction, you’ll be notified once approved.
                                                </p>
                                                <v-row no-gutters>
                                                    <v-col cols="12">
                                                        <v-btn
                                                        large
                                                        rounded
                                                        color="primary"
                                                        :loading="loading"
                                                        :disabled="loading"
                                                        @click="closeDialog">
                                                        <span class="text--white font-weight-bold">
                                                        Ok
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
                    </form>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>

<script type="text/javascript">

export default {

    data () {
        return {
            dialog: false,
            payloads: {
                payment_type: 'cashier'
            },
            courses: [],
        }
    },


    mounted() {
        this.courses = this.getItem('courses');

        this.$loader.show();
        setTimeout(() => {
            this.$loader.hide();
        }, 500);
    },

    computed: {
        user() {
            return this.getItem('user');
        }
    },

    watch: {

    },

    methods: {
        submit() {
            this.$loader.show();
            var payloads = new FormData();
            payloads.append('user_id', this.user.id);
            payloads.append('first_name', this.payloads.first_name ? this.payloads.first_name : '');
            payloads.append('middle_name', this.payloads.middle_name ? this.payloads.middle_name : '');
            payloads.append('last_name', this.payloads.last_name ? this.payloads.last_name : '');
            payloads.append('course', this.payloads.course ? this.payloads.course : '');
            payloads.append('email', this.payloads.email ? this.payloads.email : '');
            payloads.append('contact_number', this.payloads.contact_number ? this.payloads.contact_number : '');
            payloads.append('alt_contact_number', this.payloads.alt_contact_number ? this.payloads.alt_contact_number : '');
            payloads.append('gender', this.payloads.gender ? this.payloads.gender : '');
            payloads.append('attainment', this.payloads.attainment ? this.payloads.attainment : '');
            payloads.append('purpose', this.payloads.purpose ? this.payloads.purpose : '');
            payloads.append('payment_type', this.payloads.payment_type ? this.payloads.payment_type : '');
            payloads.append('file_path', this.payloads.file_path ? this.payloads.file_path : '');

            axios.post(this.routes['api.user.guidance-transaction'], payloads)
            .then(response => {
                this.$loader.hide();
                this.dialog = true;

                setTimeout(() => {
                    this.$router.push('/');
                }, 1000)
            }).catch(error => {
                this.$loader.hide();
                this.$alert.show(this.parseResponse(error, 1), 'Oooops');
            })
        },

        closeDialog() {
            this.dialog = false;
        },
    }
}
</script>
