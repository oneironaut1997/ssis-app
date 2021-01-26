<template>
  <v-container fill-height align-baseline pa-4 class="singleFrame-page__container">
    <div>
      <v-container pa-0>
        <v-row class="mb-8">
          <v-col cols="12" class="py-0 mb-4">
            <p class="text-xs-justify mb-0">
              Buttons Normal
            </p>
          </v-col>
          <v-col cols="auto" class="py-0">
            <v-btn depressed x-large class="primary">Primary</v-btn>
          </v-col>
          <v-col cols="auto" class="py-0">
            <v-btn depressed x-large class="secondary">Secondary</v-btn>
          </v-col>
          <v-col cols="auto" class="py-0">
            <v-btn depressed x-large class="success">Success</v-btn>
          </v-col>
          <v-col cols="auto" class="py-0">
            <v-btn depressed x-large class="error">Error</v-btn>
          </v-col>
          <v-col cols="auto" class="py-0">
            <v-btn depressed x-large class="warning">Warning</v-btn>
          </v-col>
        </v-row>

        <v-row class="mb-8">
          <v-col cols="12" class="py-0 mb-4">
            <p class="text-xs-justify mb-0">
              Buttons Disabled
            </p>
          </v-col>
          <v-col cols="auto" class="py-0">
            <v-btn depressed x-large disabled class="primary">Primary</v-btn>
          </v-col>
          <v-col cols="auto" class="py-0">
            <v-btn depressed x-large disabled class="secondary">Secondary</v-btn>
          </v-col>
          <v-col cols="auto" class="py-0">
            <v-btn depressed x-large disabled class="success">Success</v-btn>
          </v-col>
          <v-col cols="auto" class="py-0">
            <v-btn depressed x-large disabled class="error">Error</v-btn>
          </v-col>
          <v-col cols="auto" class="py-0">
            <v-btn depressed x-large disabled class="warning">Warning</v-btn>
          </v-col>
        </v-row>

        <v-row class="mb-8">
          <v-col cols="12" class="py-0 mb-4">
            <p class="text-xs-justify mb-0">
              Buttons Outline
            </p>
          </v-col>
          <v-col cols="auto" class="py-0">
            <v-btn depressed x-large outlined class="primary--text">Primary</v-btn>
          </v-col>
          <v-col cols="auto" class="py-0">
            <v-btn depressed x-large outlined class="secondary--text">Secondary</v-btn>
          </v-col>
          <v-col cols="auto" class="py-0">
            <v-btn depressed x-large outlined class="success--text">Success</v-btn>
          </v-col>
          <v-col cols="auto" class="py-0">
            <v-btn depressed x-large outlined class="error--text">Error</v-btn>
          </v-col>
          <v-col cols="auto" class="py-0">
            <v-btn depressed x-large outlined class="warning--text">Warning</v-btn>
          </v-col>
        </v-row>

        <v-row class="mb-8">
          <v-col cols="12" class="py-0 mb-4">
            <p class="text-xs-justify mb-0">
              Buttons Disabled Outline
            </p>
          </v-col>
          <v-col cols="auto" class="py-0">
            <v-btn depressed x-large disabled outlined class="primary--text">Primary</v-btn>
          </v-col>
          <v-col cols="auto" class="py-0">
            <v-btn depressed x-large disabled outlined class="secondary--text">Secondary</v-btn>
          </v-col>
          <v-col cols="auto" class="py-0">
            <v-btn depressed x-large disabled outlined class="success--text">Success</v-btn>
          </v-col>
          <v-col cols="auto" class="py-0">
            <v-btn depressed x-large disabled outlined class="error--text">Error</v-btn>
          </v-col>
          <v-col cols="auto" class="py-0">
            <v-btn depressed x-large disabled outlined class="warning--text">Warning</v-btn>
          </v-col>
        </v-row>

        <v-row class="mb-8">
          <v-col cols="12" class="py-0 mb-4">
            <p class="text-xs-justify mb-0">
              Buttons Variants
            </p>
          </v-col>
          <v-col cols="auto" class="py-0">
            <v-btn depressed x-large class="primary">Default Size</v-btn>
          </v-col>
          <v-col cols="auto" class="py-0">
            <v-btn depressed large class="secondary">Large Size</v-btn>
          </v-col>
          <v-col cols="auto" class="py-0">
            <v-btn depressed x-large class="secondary">
              <v-img :src="$PRXConfig().staticUrl('icons/ic-add.svg')" aspect-ratio="1" contain></v-img>
              <v-img :src="$PRXConfig().staticUrl('icons/ic-cart-white.svg')" aspect-ratio="1" contain></v-img>
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn depressed x-large block class="success">Block</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      
    }
  }
}
</script>
