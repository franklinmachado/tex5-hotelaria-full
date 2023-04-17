<template>
	<section class="reservaHero">
		<h1>{{ title }}</h1>
		<h3>{{ subtitle }}</h3>
	</section>
</template>

<script>
export default {
	name: 'HeroComponent',
	data() {
		return {
			title: 'Conforto e praticidade para você',
			subtitle: '"Aconchego, conforto, simpatia e alto astral"',
		};
	},
};
</script>

<style lang="scss" scoped>
@use 'src/sass/sass-utils/_colors.scss' as v;

.reservaHero {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	background-size: cover;
	min-height: 100vh;
	width: 100%;
	color: #415a77;
	background-image: url(../assets/images/banner1.jpeg);
}
.reservaHero h1 {
	font-size: 3.2rem;
	margin-bottom: 15px;
	color: #e0e1dd;
}
.reservaHero h3 {
	font-size: 2rem;
	margin-bottom: 50px;
	color: #fff;
}
</style>
