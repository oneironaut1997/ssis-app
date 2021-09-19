<template>
	<v-app>
		<top-navigation></top-navigation>
		<PRXProgressLoader></PRXProgressLoader>
		<v-content class="pa-0">

			<v-container fill-height pa-0 mt-12>
				<router-view :key="$route.fullPath"></router-view>
			</v-container>


			<PRXAlert></PRXAlert>
			<PRXDialogLoader></PRXDialogLoader>
			<PRXToast></PRXToast>
		</v-content>
	</v-app>
</template>

<script type="text/javascript">

import TopNavigation from './partials/TopNavigation.vue'

export default {
  mounted () {
  },

  components: {
    'top-navigation': TopNavigation,
  },
};
</script>
<style type="text/css"></style>
