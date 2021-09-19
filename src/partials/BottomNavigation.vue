<template>
	<v-bottom-navigation absolute
		v-model="bottomNav"
		class="bottm__nav"
		>
		<v-btn 
            v-for="item in items"
            :key="item.title"
			:value="item.action"
			:input-value="$PRXRouter().isOnRoute(item.action)"
			@click="$PRXRouter().goTo(item.action)"
			>
			<span>{{ item.title }}</span>
			<v-icon>{{ item.icon }}</v-icon>
		</v-btn>

	</v-bottom-navigation>
</template>

<script type="text/javascript">
	export default {
		mounted () {
		},
		data () {
			return {
				bottomNav: true,
                items: [
                    {
						title: 'Home',
						icon: 'fa-home',
						action: 'home'
					},
					{
						title: 'Loans',
						icon: 'fa-chart-pie',
						action: 'loans'
					},
					{
						title: 'Contact Us',
						icon: 'fa-address-book',
						action: 'contact-us'
					},
					{
						title: 'Account',
						icon: 'fa-user-circle',
						action: 'profile'
					},
                ]
			}
		},
	}
</script>
<style lang="scss">
	.bottm__nav {
		height: 70px !important;

		.v-btn__content span {
			margin-top: 10px !important;
			font-size: 12px;
		}
	}

</style>
