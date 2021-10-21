<template>
	<v-container fill-height align-baseline class="home-page__container pa-0">
		<div class="width--100">
			<v-row class="pa-6">
				<v-col cols="12" v-for="(item, index) in 4" :key="index">
					<v-card
					class="pa-4 br-8"
					>
						<v-row>
							<v-col cols="12">
								<p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repudiandae iure sunt amet esse itaque, veritatis labore deserunt modi voluptas voluptatibus, maiores iusto inventore excepturi quisquam odit, cum ea ipsa, dolorem vero! Nobis, sed suscipit, assumenda sint ab doloremque, distinctio animi repudiandae doloribus optio illum asperiores, itaque mollitia recusandae. Beatae.</p>
							</v-col>
						</v-row>
					</v-card>
				</v-col>

			</v-row>
		</div>
    </v-container>
</template>
<script type="text/javascript">
	export default {
    data: () => ({

    }),

    mounted() {

    },

    computed: {

    },

    watch: {

    },

    methods: {

    },
  }
</script>
<style lang="scss">
	.home-page__container {

	}
</style>