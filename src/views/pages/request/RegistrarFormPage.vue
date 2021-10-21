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
                                v-model="payload.category"
                                row
                                >
                                    <v-radio
                                    label="Student"
                                    value="student"
                                    ></v-radio>
                                    <v-radio
                                    label="Alumni"
                                    value="alumni"
                                    ></v-radio>
                                </v-radio-group>

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

                                <v-select
                                :items="courses"
                                label="Course *"
                                required
                                name="course"
                                v-model="payload.course"
                                ></v-select>

                                <v-text-field
                                label="Contact Number *"
                                required
                                name="mobile_number"
                                v-model="payload.mobile_number"
                                ></v-text-field>

                                <v-text-field
                                label="Email *"
                                required
                                name="email"
                                v-model="payload.email"
                                ></v-text-field>

                                <v-text-field
                                label="Address *"
                                required
                                name="address"
                                v-model="payload.address"
                                ></v-text-field>

                                <v-select
                                :items="inquiry_types"
                                label="How may we help you? *"
                                required
                                name="inquiry_type"
                                v-model="payload.inquiry_type"
                                ></v-select>
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
            payload: {},
            courses: [],
        }
    },


    mounted() {

    },

    computed: {

    },

    watch: {

    },

    methods: {

    }
}
</script>
