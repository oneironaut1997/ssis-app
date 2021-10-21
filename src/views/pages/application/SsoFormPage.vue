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

                                <p class="mb-0">Sex *</p>
                                <v-radio-group
                                class="mt-0"
                                v-model="payload.gender"
                                row
                                >
                                    <v-radio
                                    label="Male"
                                    value="male"
                                    ></v-radio>
                                    <v-radio
                                    label="Female"
                                    value="female"
                                    ></v-radio>
                                </v-radio-group>

                                <v-text-field
                                label="Age *"
                                required
                                name="age"
                                v-model="payload.age"
                                ></v-text-field>

                                <v-select
                                :items="courses"
                                label="Course *"
                                required
                                name="course"
                                v-model="payload.course"
                                ></v-select>

                                <v-select
                                :items="year_levels"
                                label="Year Level *"
                                required
                                name="year_level"
                                v-model="payload.year_level"
                                ></v-select>

                                <v-text-field
                                label="Contact Number *"
                                required
                                name="mobile_number"
                                v-model="payload.mobile_number"
                                ></v-text-field>

                                <v-text-field
                                label="Father's Name *"
                                required
                                name="father_nmae"
                                v-model="payload.father_nmae"
                                ></v-text-field>

                                <v-text-field
                                label="Father's Occupation *"
                                required
                                name="father_occupation"
                                v-model="payload.father_occupation"
                                ></v-text-field>

                                <v-text-field
                                label="Mother's Name *"
                                required
                                name="mother_nmae"
                                v-model="payload.mother_nmae"
                                ></v-text-field>

                                <v-text-field
                                label="Mother's Occupation *"
                                required
                                name="mother_occupation"
                                v-model="payload.mother_occupation"
                                ></v-text-field>

                                <p class="mb-0">Do you have a school ID already?</p>
                                <small>(The Registrar Office will give a certification to the Student Services Office for those who doesn’t have their ID yet.)</small>
                                <v-radio-group
                                class="mt-0"
                                v-model="payload.has_school_id"
                                row
                                >
                                    <v-radio
                                    label="Yes"
                                    value="yes"
                                    ></v-radio>
                                    <v-radio
                                    label="Nothing yet"
                                    value="no"
                                    ></v-radio>
                                </v-radio-group>

                                <p class="mb-0">Scanned Copy of ID</p>
                                <small>(front and back portion of the school ID in one document)</small>
                                <v-file-input
                                chips
                                label="Front"
                                v-model="payload.front_image"
                                ></v-file-input>

                                <v-file-input
                                chips
                                label="Back"
                                v-model="payload.back_image"
                                ></v-file-input>
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
