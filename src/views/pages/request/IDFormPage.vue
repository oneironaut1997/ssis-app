<template>
    <v-container fill-height align-baseline px-0 py-0 class="registrar-form-page__container">
        <div class="width--100">
            <v-row class="pa-6">
                <v-col cols="12">
                    <h2>PSU Lingayen - ID Processing for New Students</h2>
                </v-col>
                <v-col cols="12">
                    <h3 class="font-weight-bold text-center mb-3">READ FIRST</h3>
                    <p class="mb-0">REMINDERS BEFORE PROCEEDING:</p>
                    <p class="mb-2">FOR NEW ID REQUESTS:</p>
                    <p class="mb-0">1. Ensure that all the details provided are correct. The ICTMO staff will not be responsible
                    for any errors committed by the student when entering data.</p>
                    <p class="mb-0">2. Prepare ID Photo and Signature.</p>
                    <p class="mb-0">3. Use plain white wall as your background for the photo.</p>
                    <p class="mb-0">4. Wear a school uniform for your photo. In the absence of school uniform, use a whitecollared shirt.</p>
                    <p class="mb-0">5. Use your Notes app or any similar mobile application on your smartphone for your
                    signature and send the screenshot. Photographed signatures done on paper WILL NOT BE
                    ACCEPTED.</p>
                    <p class="mb-2">6. Submissions that are deemed unacceptable by the ICTMO staff shall be rejected and the
                    application for processing will be cancelled.</p>
                    <p class="mb-0 font-weight-bold">ANY MATERIAL MISREPRESENTATION SHALL BE GIVEN CORRESPONDING SANCTIONS AS
                    PER PSU STUDENT HANDBOOK</p>
                </v-col>
                <v-col cols="12">
                    <form>
                        <v-row no-gutters class="mb-0">
                            <v-col cols="12">

                                <v-text-field
                                label="Email *"
                                required
                                name="email"
                                v-model="payloads.email"
                                ></v-text-field>

                                <small>(First Name/MI/Last Name) (WRITE IN CAPSLOCK Ex. "JUAN L. DELA CRUZ" )</small>
                                <v-text-field
                                label="Full Name *"
                                required
                                name="full_name"
                                v-model="payloads.full_name"
                                >
                                </v-text-field>

                                <small>Follow this format: 20-LN-0220</small>
                                <v-text-field
                                label="Student Number*"
                                required
                                name="student_number"
                                v-model="payloads.student_number"
                                ></v-text-field>

                                <v-text-field
                                label="Contact Number *"
                                required
                                name="contact_number"
                                v-model="payloads.contact_number"
                                ></v-text-field>

                                <v-select
                                :items="courses"
                                label="Program Enrolled *"
                                required
                                name="course"
                                v-model="payloads.course"
                                ></v-select>

                                <p class="mb-2">ID Picture and Signature picture must be clear and not blurry. We will not process your entry if appropriate rules aren't followed.</p>
                                <p class="mb-0 font-weight-bold">ID Picture</p>
                                <p class="mb-0">1. Wear White - Polo/ Polo Shirt/ With Collar</p>
                                <p class="mb-0">2. White Background</p>
                                <p class="mb-0">3. Recent Picture</p>
                                <v-file-input
                                label="ID Picture"
                                show-size
                                v-model="payloads.id_path"
                                ></v-file-input>

                                <p class="mb-0 font-weight-bold">Signature</p>
                                <p class="mb-0">1. Written in black.</p>
                                <p class="mb-0">2. White Background.</p>
                                <p class="mb-0">3. Save in jpeg file.</p>
                                <v-file-input
                                label="Signature Picture"
                                show-size
                                v-model="payloads.signature_path"
                                ></v-file-input>

                                <h5 class="font-weight-bold">Details of Contact Person in Case of Emergency</h5>
                                <small>Parents / Guardian (Ex. "PEDRO L. DELA CRUZ")</small>
                                <v-text-field
                                label="Contact Person Full Name *"
                                required
                                name="contact_full_name"
                                v-model="payloads.contact_full_name"
                                ></v-text-field>

                                <v-text-field
                                label="Contact Person Address *"
                                required
                                name="contact_address"
                                v-model="payloads.contact_address"
                                ></v-text-field>

                                <v-text-field
                                label="Contact Number *"
                                required
                                name="contact_mobile_number"
                                v-model="payloads.contact_mobile_number"
                                ></v-text-field>

                                <v-checkbox
                                label="I have read and agreed to the terms and conditions of this agreement"
                                required
                                name="agreed"
                                v-model="payloads.agreed"
                                @click="agreed = !agreed"
                                >
                                </v-checkbox>

                                <v-bottom-sheet v-model="agreed">
                                  <v-sheet
                                    class="text-center"
                                    height="200px"
                                  >
                                    <v-btn
                                      class="mt-6"
                                      text
                                      color="red"
                                      @click="agreed = !agreed"
                                    >
                                      close
                                    </v-btn>
                                    <div class="pa-5">
                                        <p>The Pangasinan State University recognizes its responsibilities under RA
                                        10173, also known as the Data Privacy Act of 2012, with respect to the
                                        data it collects, records, organizes, updates, uses, consolidates or
                                        destructs from its clients. The personal data obtained from this portal is
                                        entered and stored within the University’s information and
                                        communications system and will only be accessed solely by PSU
                                        authorized personnel.</p>

                                        <p>Furthermore, the information collected in this tracker shall only be used
                                        for the processing of RFIDs of students and employees. The University
                                        shall not disclose the employee's/student's personal information without
                                        their consent</p>
                                        

                                        <p>
                                        I have read the Institute’s Data Privacy Statement and express my
                                        consent for the Pangasinan State University to collect, record, organize,
                                        update or modify, retrieve, consult, use, consolidate, block, erase or
                                        destruct my personal data as part of my information.
                                        I hereby affirm my right to be informed, object to processing, access and
                                        rectify, suspend or withdraw my personal data, and be indemnified in
                                        case of damages pursuant to the provisions of the Republic Act No.
                                        10173 of the Philippines, Data Privacy Act of 2012 and its corresponding
                                        Implementing Rules and Regulations.
                                        </p>
                                    </div>
                                  </v-sheet>
                                </v-bottom-sheet>
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
            ],
            agreed: false,
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
            payloads.append('email', this.payloads.email ? this.payloads.email : '');
            payloads.append('student_number', this.payloads.student_number ? this.payloads.student_number : '');
            payloads.append('full_name', this.payloads.full_name ? this.payloads.full_name : '');
            payloads.append('course', this.payloads.course ? this.payloads.course : '');
            payloads.append('contact_number', this.payloads.contact_number ? this.payloads.contact_number : '');
            payloads.append('id_path', this.payloads.id_path ? this.payloads.id_path : '');
            payloads.append('signature_path', this.payloads.signature_path ? this.payloads.signature_path : '');
            payloads.append('contact_full_name', this.payloads.contact_full_name ? this.payloads.contact_full_name : '');
            payloads.append('contact_address', this.payloads.contact_address ? this.payloads.contact_address : '');
            payloads.append('contact_mobile_number', this.payloads.contact_mobile_number ? this.payloads.contact_mobile_number : '');
            payloads.append('agreed', this.payloads.agreed ? this.payloads.agreed : '');
            axios.post(this.routes['api.user.id-transaction'], payloads)
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
<style lang="scss">
    .v-bottom-sheet {

       .v-sheet {
            height: 100vh !important;
       } 
    }
</style>