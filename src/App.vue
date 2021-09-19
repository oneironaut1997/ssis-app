<template>
	<v-app>
		<top-navigation></top-navigation>
		<PRXProgressLoader></PRXProgressLoader>
		<v-content class="pa-0">

			<v-container fill-height pa-0>
				<router-view :key="$route.fullPath"></router-view>
			</v-container>

			<!-- <bottom-navigation></bottom-navigation> -->

			<PRXAlert></PRXAlert>
			<PRXDialogLoader></PRXDialogLoader>
			<PRXToast></PRXToast>
		</v-content>
	</v-app>
</template>

<script type="text/javascript">

import TopNavigation from './partials/TopNavigation.vue'
// import BottomNavigation from './partials/BottomNavigation.vue'

export default {
  mounted () {
  },

  components: {
    'top-navigation': TopNavigation,
    // 'bottom-navigation': BottomNavigation
  },
};
</script>
<style type="text/css"></style>
