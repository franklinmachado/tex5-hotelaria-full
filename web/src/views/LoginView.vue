<template>
	<div class="background_login">
		<div id="app" class="formularioLogin">
			<form class="formulario" @submit.prevent="onSubmit">
				<label class="fraseInp">
					Usuário
					<input type="text" name="usuario" v-model="form.email" />
				</label>
				<label class="fraseInp">
					Senha
					<input type="password" name="senha" v-model="form.senha" />
				</label>
				<span v-if="mensagemErro">{{ mensagemErro }}</span>
				<button type="submit" class="botaoLogin">Entrar</button>
				<p>
					Não possui uma conta?
					<a href="cadastro">Cadastre-se</a>
				</p>
				<p><a href="#">Esqueceu a Senha?</a></p>
			</form>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'LoginView',
	data() {
		return {
			form: {
				nome: '',
				senha: '',
			},
			mensagemErro: '',
		};
	},
	computed: {
		...mapGetters(['usuario']),
	},
	methods: {
		...mapActions(['handleUserLogin']),
		onSubmit() {
			const payload = {
				email: this.form.email,
				senha: this.form.senha,
			};
			axios
				.post('http://localhost:3000/api/auth', payload)
				.then((res) => {
					if (res.status === 200) {
						this.handleUserLogin(res.data);
						this.$router.push('/');
					} else {
						console.warn('Erro LoginView: 58', res);
					}
				})
				.catch((err) => {
					this.mensagemErro = err.response.data.erro;
				});
		},
	},
};
</script>

<style lang="scss" scoped>
@use 'src/sass/sass-utils/_colors.scss' as v;

$color_1: white;
$background-color_1: #f5f5f5;
$background-color_2: #415a77;
$background-color_3: #233242;

.formularioLogin {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	width: 100%;
	max-width: 100%;
	padding: 0 1rem;
}
.formulario {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	background-color: $background-color_1;
	padding: 2rem;
	border-radius: 5px;
}
.fraseInp {
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	text-align: left;
}
input {
	padding: 0.5rem;
	border: none;
	border-bottom: 2px solid #ccc;
	width: 100%;
	font-size: 2.5rem;
	height: 2.5rem;
}
.botaoLogin {
	background-color: $background-color_2;
	color: $color_1;
	padding: 0.5rem;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: all 0.3s ease;
	font-size: larger;
	&:hover {
		background-color: $background-color_3;
	}
}

.background_login {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	background: v.$gradient-top,
		url(/src/assets/images/reception.jpg) fixed bottom;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	width: 100%;
	min-height: 100vh;
}
</style>
