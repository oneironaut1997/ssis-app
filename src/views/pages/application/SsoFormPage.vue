<template>
    <v-container fill-height align-baseline px-0 py-0 class="registrar-form-page__container">
        <div class="width--100">
            <v-row class="pa-6">
                <v-col cols="12">
                    <h2>Student Services Transaction Form (For President and Dean's List)</h2>
                </v-col>
                <v-col cols="12">
                    <form>
                        <v-row no-gutters class="mb-0">
                            <v-col cols="12">

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

                                <v-text-field
                                label="Age *"
                                required
                                name="age"
                                v-model="payloads.age"
                                ></v-text-field>

                                <v-select
                                :items="courses"
                                label="Course *"
                                required
                                name="course"
                                v-model="payloads.course"
                                ></v-select>

                                <v-select
                                :items="year_levels"
                                label="Year Level *"
                                required
                                name="year_level"
                                v-model="payloads.year_level"
                                ></v-select>

                                <v-text-field
                                label="Contact Number *"
                                required
                                name="contact_number"
                                v-model="payloads.contact_number"
                                ></v-text-field>

                                <v-text-field
                                label="Father's Name *"
                                required
                                name="fathers_name"
                                v-model="payloads.fathers_name"
                                ></v-text-field>

                                <v-text-field
                                label="Father's Occupation *"
                                required
                                name="fathers_occupation"
                                v-model="payloads.fathers_occupation"
                                ></v-text-field>

                                <v-text-field
                                label="Mother's Name *"
                                required
                                name="mothers_name"
                                v-model="payloads.mothers_name"
                                ></v-text-field>

                                <v-text-field
                                label="Mother's Occupation *"
                                required
                                name="mothers_occupation"
                                v-model="payloads.mothers_occupation"
                                ></v-text-field>

                                <p class="mb-0">Do you have a school ID already?</p>
                                <small>(The Registrar Office will give a certification to the Student Services Office for those who doesn’t have their ID yet.)</small>
                                <v-radio-group
                                class="mt-0"
                                v-model="payloads.has_school_id"
                                row
                                >
                                    <v-radio
                                    label="Yes"
                                    value="Yes"
                                    ></v-radio>
                                    <v-radio
                                    label="Nothing yet"
                                    value="Nothing yet"
                                    ></v-radio>
                                </v-radio-group>

                                <template v-if="payloads.has_school_id == 'Yes'">
                                <p class="mb-0">Scanned Copy of ID</p>
                                <small>(front and back portion of the school ID in one document)</small>
                                    <v-file-input
                                    chips
                                    label="School ID"
                                    v-model="payloads.file_path_school_id"
                                    ></v-file-input>
                                </template>

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

    data () {
        return {
            dialog: false,
            payloads: {
                payment_type: 'cashier'
            },
            courses: [],
            year_levels: [
                '1st Year',
                '2nd Year',
                '3rd Year',
                '4th Year',
            ]
        }
    },


    mounted() {
        this.courses = this.getItem('courses');

        this.$loader.show();
        setTimeout(() => {
            this.$loader.hide();
        }, 1000);
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
            payloads.append('student_id', this.payloads.student_id ? this.payloads.student_id : '');
            payloads.append('first_name', this.payloads.first_name ? this.payloads.first_name : '');
            payloads.append('middle_name', this.payloads.middle_name ? this.payloads.middle_name : '');
            payloads.append('last_name', this.payloads.last_name ? this.payloads.last_name : '');
            payloads.append('gender', this.payloads.gender ? this.payloads.gender : '');
            payloads.append('age', this.payloads.age ? this.payloads.age : '');
            payloads.append('course', this.payloads.course ? this.payloads.course : '');
            payloads.append('year_level', this.payloads.year_level ? this.payloads.year_level : '');
            payloads.append('contact_number', this.payloads.contact_number ? this.payloads.contact_number : '');
            payloads.append('fathers_name', this.payloads.fathers_name ? this.payloads.fathers_name : '');
            payloads.append('fathers_occupation', this.payloads.fathers_occupation ? this.payloads.fathers_occupation : '');
            payloads.append('mothers_name', this.payloads.mothers_name ? this.payloads.mothers_name : '');
            payloads.append('mothers_occupation', this.payloads.mothers_occupation ? this.payloads.mothers_occupation : '');
            payloads.append('has_school_id', this.payloads.has_school_id ? this.payloads.has_school_id : '');
            payloads.append('file_path_school_id', this.payloads.file_path_school_id ? this.payloads.file_path_school_id : '');
            payloads.append('payment_type', this.payloads.payment_type ? this.payloads.payment_type : '');
            payloads.append('file_path', this.payloads.file_path ? this.payloads.file_path : '');

            axios.post(this.routes['api.user.student-service-transaction'], payloads)
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
