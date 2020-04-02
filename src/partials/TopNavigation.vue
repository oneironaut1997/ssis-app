<template>
	<div>
		<!-- Top Navigation -->
		<v-app-bar app
			color="teal accent-4"
			dark
			dense
			>
			<v-app-bar-nav-icon @click="showSidebar"></v-app-bar-nav-icon>
			<v-spacer></v-spacer>
			<v-toolbar-items
				v-for="item in items"
				:key="item.title"
				>
				<v-btn @click="$PRXRouter().goTo(item.action)" small text color="white" :input-value="$PRXRouter().isOnRoute(item.action)">
					{{ item.title }}
				</v-btn>
			</v-toolbar-items>
		</v-app-bar>
		<!-- Sidebar -->
		<v-navigation-drawer temporary v-model="drawer" app color="white">
			<v-list-item class="teal">
				<v-list-item-content>
					<v-list-item-title class="title white--text">
						PRAXXYS
					</v-list-item-title>
					<v-list-item-subtitle class="white--text">
						Vuetify Boilerplate
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-divider></v-divider>

			<v-list
			dense
			nav
			>
				<v-list-item
					v-for="item in items"
					:key="item.title"
					link
					@click="$PRXRouter().goTo(item.action)"
					:input-value="$PRXRouter().isOnRoute(item.action)"
					>
					<v-list-item-icon>
					<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script type="text/javascript">
	export default {
		mounted () {
		},

		data() {
			return {
				drawer: false,
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

		methods: {
			showSidebar () {
				this.drawer = true;
			}
		}

	}
</script>
