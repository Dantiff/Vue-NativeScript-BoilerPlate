<template>
	<Page>
		<ActionBar>
			<GridLayout width="100%" columns="auto, *">
				<label
					text="MENU"
					col="0"
					@tap="$refs.drawer.nativeView.showDrawer();"
				/>
				<label class="title" text="Welcome to NativeScript-Vue!" col="1" />
			</GridLayout>
		</ActionBar>

		<RadSideDrawer ref="drawer">
			<StackLayout -drawer-content background-color="#ffffff">
				<label class="drawer-header" text="Drawer" />
				<label class="drawer-item" text="Item 1" />
				<label class="drawer-item" text="Item 2" />
				<label class="drawer-item" text="Item 3" />
			</StackLayout>

			<GridLayout -main-content columns="*" rows="*">
				<label :text="msg" class="message" col="0" row="0" />
			</GridLayout>
		</RadSideDrawer>
	</Page>
</template>

<script>
export default {
	data() {
		return {
			msg: 'Hello World!',
		};
	},
};
</script>

<style scoped>
ActionBar {
	background-color: #53ba82;
	color: #ffffff;
}

.title {
	text-align: left;
	padding-left: 16;
}

.message {
	vertical-align: center;
	text-align: center;
	font-size: 20;
	color: #333333;
}

.drawer-header {
	padding: 50 16 16 16;
	margin-bottom: 16;
	background-color: #53ba82;
	color: #ffffff;
	font-size: 24;
}

.drawer-item {
	padding: 8 16;
	color: #333333;
	font-size: 16;
}
</style>
