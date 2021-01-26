<template>
  <v-container fill-height align-baseline px-0 py-4>
    <div class="width--100">
      <!-- Frame 1 -->
      <v-container px-4 py-0>
        <v-row no-gutters>
          <v-col cols="12">
            <p class="text-xs-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis modi dolorem ipsam maiores dolore voluptatem saepe, aut. Assumenda dolore rerum vitae quidem illum, nulla officiis odit culpa reiciendis ut. Accusamus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga reprehenderit, necessitatibus ratione eveniet provident ipsa. Laboriosam, amet iusto temporibus sequi enim est vero quaerat praesentium.
            </p>
          </v-col>
        </v-row>
      </v-container>

      <!-- Frame 2 -->
      <v-container px-4 py-0>
        <v-row no-gutters>
          <v-col cols="12">
            <example-component></example-component>
          </v-col>
          <v-col cols="12">
            <p class="text-xs-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis modi dolorem ipsam maiores dolore voluptatem saepe, aut. Assumenda dolore rerum vitae quidem illum, nulla officiis odit culpa reiciendis ut. Accusamus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga reprehenderit, necessitatibus ratione eveniet provident ipsa. Laboriosam, amet iusto temporibus sequi enim est vero quaerat praesentium.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>

<script type="text/javascript">
import ExampleComponent from '../components/ExampleComponent.vue'

export default {
  components: {
    'example-component': ExampleComponent
  }
}
</script>
