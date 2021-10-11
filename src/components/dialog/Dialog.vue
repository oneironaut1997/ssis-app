<template>
  <v-row justify="center">
          <v-dialog
            v-model="dialog"
            persistent
            max-width="290"
          >

            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  icon
                  width="15"
                  height="19"
                  class="float-right"
                  v-bind="attrs"
                  v-on="on"
                  >
                    <v-img
                    :src="$PRXConfig().staticUrl('icons/ic-delete.svg')"
                    ></v-img>
              </v-btn>
            </template>

            <v-card>
              <v-row no-gutters>
                <v-col cols="12" class="text-center px-4 py-12">
                  <v-img
                    width="34"
                    height="39"
                    :src="$PRXConfig().staticUrl('icons/ic-warning.svg')"
                    class="mx-auto mb-6"
                  ></v-img>
                  <h2 class="clr--black mb-4 font-weight-bold">Are you sure?</h2>
                  <p class="mb-4 clr--black text-xs-justify">
                    You are going to delete item from your cart. Continue?
                  </p>
                  <v-col cols="12" class="pa-0 mb-4">
                     <v-btn large rounded color="#29648a" block @click="dialog = false">
                        <span class="text--white font-weight-bold">
                          Continue
                        </span>
                    </v-btn>
                  </v-col>
                  <v-col cols="12" class="pa-0">
                     <v-btn large rounded color="#29648a" block @click="dialog = false">
                        <span class="text--white font-weight-bold">
                          Cancel
                        </span>
                    </v-btn>
                  </v-col>
                </v-col>
              </v-row>
            </v-card>
          </v-dialog>
        </v-row>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>