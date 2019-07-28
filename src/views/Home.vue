<template>
	<v-container fill-height>
		<v-layout align-center row wrap>
			<v-flex xs12>
				<example-component></example-component>
			</v-flex>
		</v-layout>
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
