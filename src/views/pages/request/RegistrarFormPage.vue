<template>
    <v-container fill-height align-baseline px-0 py-0 class="registrar-form-page__container">
        <div class="width--100">
            <v-row class="pa-6">
                <v-col cols="12">
                    <h2>Registrar Transaction Form</h2>
                </v-col>
                <v-col cols="12">
                    <form>
                        <v-row no-gutters class="mb-0">
                            <v-col cols="12">
                                <p class="mb-0">Category *</p>
                                <v-radio-group
                                class="mt-0"
                                v-model="payloads.category"
                                row
                                >
                                    <v-radio
                                    label="Student"
                                    value="Student"
                                    ></v-radio>
                                    <v-radio
                                    label="Alumni"
                                    value="Alumni"
                                    ></v-radio>
                                </v-radio-group>

                                <v-text-field
                                label="Student ID *"
                                required
                                name="student_id"
                                v-model="payloads.student_id"
                                ></v-text-field>

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
                                label="Contact Number *"
                                required
                                name="contact_number"
                                v-model="payloads.contact_number"
                                ></v-text-field>

                                <v-text-field
                                label="Email *"
                                required
                                name="email"
                                v-model="payloads.email"
                                ></v-text-field>

                                <v-text-field
                                label="Address *"
                                required
                                name="address"
                                v-model="payloads.address"
                                ></v-text-field>

                                <v-select
                                :items="nature_of_concerns"
                                label="How may we help you? *"
                                required
                                name="nature_of_concern"
                                v-model="payloads.nature_of_concern"
                                ></v-select>

                                <p class="mb-0">Payment Type *</p>
                                <v-radio-group
                                class="mt-0"
                                v-model="payloads.payment_type"
                                >
                                    <v-radio
                                    label="Cashier"
                                    value="cashier"
                                    ></v-radio>
                                    <v-radio
                                    label="Land Bank Portal"
                                    value="lbp"
                                    ></v-radio>
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

    data: () => ({
        dialog: false,
        payloads: {
            category: 'Student',
            payment_type: 'cashier'
        },
        courses: [],
        nature_of_concern: [],
    }),


    mounted() {
        this.courses = this.getItem('courses');
        this.nature_of_concerns = this.getItem('natureOfConcerns');

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
            payloads.append('category', this.payloads.category ? this.payloads.category : '');
            payloads.append('student_id', this.payloads.student_id ? this.payloads.student_id : '');
            payloads.append('first_name', this.payloads.first_name ? this.payloads.first_name : '');
            payloads.append('middle_name', this.payloads.middle_name ? this.payloads.middle_name : '');
            payloads.append('last_name', this.payloads.last_name ? this.payloads.last_name : '');
            payloads.append('course', this.payloads.course ? this.payloads.course : '');
            payloads.append('contact_number', this.payloads.contact_number ? this.payloads.contact_number : '');
            payloads.append('email', this.payloads.email ? this.payloads.email : '');
            payloads.append('address', this.payloads.address ? this.payloads.address : '');
            payloads.append('nature_of_concern', this.payloads.nature_of_concern ? this.payloads.nature_of_concern : '');
            payloads.append('payment_type', this.payloads.payment_type ? this.payloads.payment_type : '');
            payloads.append('file_path', this.payloads.file_path ? this.payloads.file_path : '');

            axios.post(this.routes['api.user.registrar-transaction'], payloads)
            .then(response => {
                this.$loader.hide();
                this.dialog = true;
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