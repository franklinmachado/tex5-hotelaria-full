<template>
	<router-view />
</template>

<script>
import store from './store';

export default {
	name: 'App',
	mounted: function () {
		if (window.localStorage.getItem('reserva')) {
			store.state.dadosReserva = JSON.parse(
				window.localStorage.getItem('reserva')
			);
		}
		if (window.localStorage.getItem('usuario')) {
			store.state.usuario = JSON.parse(window.localStorage.getItem('usuario'));
		}
	},
};
</script>

<style>
html {
	box-sizing: border-box;
	font-size: 16px;
	font-family: 'Inter', sans-serif;
	scroll-behavior: smooth;
}

*,
*:before,
*:after {
	box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
	font-weight: normal;
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
		'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

ol,
ul {
	list-style: none;
}

img {
	max-width: 100%;
	height: auto;
}
</style>
