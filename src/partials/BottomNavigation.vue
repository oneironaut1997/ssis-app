<template>
	<v-bottom-navigation absolute
		v-model="bottomNav"
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
                        title: 'Page',
                        icon: 'fa-file',
                        action: 'page'
                    },
                    {
                        title: 'Form',
                        icon: 'fa-pen-square',
                        action: 'form'
                    },
                ]
			}
		},
	}
</script>
