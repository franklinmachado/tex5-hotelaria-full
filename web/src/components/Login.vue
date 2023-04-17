<template>
	<li class="dropdown" v-if="usuario.nome === ''">
		Faça <u>seu login</u> ou <u>cadastre-se</u>
		<ul>
			<li>
				<router-link to="login">Entrar</router-link>
			</li>
			<li>
				<router-link to="cadastro">Cadastrar</router-link>
			</li>
		</ul>
	</li>
	<li class="dropdown" v-else>
		Olá, {{ usuario.nome }}
		<ul>
			<button type="button" @click="goToUser(id)">Perfil</button>
			<button type="button" @click="handleUserLogout">Sair</button>
		</ul>
	</li>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'LoginComponent',
	data() {
		usuario: localStorage.getItem("usuario");
	},
	methods: {
		...mapActions(['handleUserLogout']),
		goToUser(id){
			this.$router.push({ path:`editar-usuario/${this.usuario.id_usuario}`});
		}
	},
	computed: {
		...mapGetters(['usuario']),
	},
};
</script>

<style lang="scss">
.dropdown {
	position: relative;

	&:after {
		content: '';
		display: inline-block;
		background-image: url('../assets/icons/caret-down.svg');
		background-size: cover;
		width: 16px;
		height: 16px;
	}

	&:hover {
		&:after {
			transform: rotate(180deg);
		}

		ul {
			display: block;
		}
	}

	ul {
		border-radius: 0.5rem;
		display: none;
		padding: 1rem;
		position: relative;
		text-decoration: none;

		@media (min-width: 768px) {
			background-color: rgba(27, 38, 59, 0.8);
			position: absolute;
			right: 0;
			top: auto;
		}

		li {
			text-decoration: none;
			padding-inline: 0.5rem;
			padding-block: 1rem;
			width: 100%;

			&:hover {
				background-color: #4c9e9e;
			}
		}
		a {
			color: white;
		}
	}
}
</style>
