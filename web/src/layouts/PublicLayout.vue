<template>
	<HeaderComponent />
	<main>
		<router-view></router-view>
	</main>
	<FooterComponent />
</template>
<script>
import HeaderComponent from '../components/Header.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default {
	name: 'PublicLayout',
	components: {
		HeaderComponent,
		FooterComponent,
	},
};
</script>
<style lang="scss" scoped></style>
