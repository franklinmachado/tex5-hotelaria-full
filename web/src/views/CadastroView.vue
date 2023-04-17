<template>
	<div class="cadastro_background">
		<div id="app" class="formularioCadastro">
			<form class="formulario" @submit.prevent="onSubmit()">
				<fieldset class="fieldset_form">
					<legend>Dados pessoais</legend>
					<label class="fraseInp">
						Nome Completo<input type="text" v-model="form.usuario.nome"
					/></label>

					<label class="fraseInp"
						>Email<input type="text" v-model="form.usuario.email"
					/></label>

					<label class="fraseInp"
						>Telefone<input type="text" v-model="form.usuario.telefone"
					/></label>

					<label class="fraseInp"
						>CPF<input type="text" v-model="form.usuario.cpf"
					/></label>
				</fieldset>

				<fieldset class="fieldset_form">
					<legend>Endereço</legend>
					<select
						name="estado"
						id="estado"
						class="select"
						v-model="form.endereco.estado"
					>
						<option hidden disabled value="">Selecione um estado</option>
						<option
							v-for="estado in estados"
							:key="estado.uf"
							:value="estado.uf"
						>
							{{ estado.nome }}
						</option>
					</select>

					<label class="fraseInp"
						>Cidade<input type="text" v-model="form.endereco.cidade"
					/></label>

					<label class="fraseInp"
						>Rua<input type="text" v-model="form.endereco.rua"
					/></label>

					<label class="fraseInp"
						>Bairro<input type="text" v-model="form.endereco.bairro"
					/></label>

					<label class="fraseInp"
						>Número<input type="text" v-model="form.endereco.numero"
					/></label>

					<label class="fraseInp"
						>Complemento<input type="text" v-model="form.endereco.complemento"
					/></label>

					<label class="fraseInp"
						>CEP<input type="text" v-model="form.endereco.cep"
					/></label>
				</fieldset>
				<fieldset class="fieldset_form">
					<legend>Crie sua senha</legend>
					<label class="fraseInp"
						>Senha<input type="password" v-model="form.usuario.senha"
					/></label>

					<label class="fraseInp"
						>Confirme a Senha<input type="password"
					/></label>
				</fieldset>
				<div class="button_form">
					<button type="submit" class="botaoCadastro">Cadastrar-se</button>
					<button type="button" class="botaoCadastro voltar">Voltar</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { estados } from '@/components/constants/estados';
import router from '@/router';
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'CadastroView',
	computed: {
		...mapGetters(['usuario']),
	},
	data() {
		return {
			selectedState: '',
			estados: estados,
			form: {
				usuario: {
					nome: '',
					telefone: '',
					email: '',
					cpf: '',
					senha: '',
				},
				endereco: {
					cidade: '',
					estado: '',
					numero: '',
					rua: '',
					bairro: '',
					complemento: '',
				},
			},
		};
	},
	methods: {
		...mapActions(['handleUserLogin']),
		async onSubmit() {
			const data = {};
			const usuario = {
				nome: this.form.usuario.nome,
				telefone: this.form.usuario.telefone,
				email: this.form.usuario.email,
				cpf: this.form.usuario.cpf,
				senha: this.form.usuario.senha,
			};
			const endereco = {
				cidade: this.form.endereco.cidade,
				estado: this.form.endereco.estado,
				numero: this.form.endereco.numero,
				rua: this.form.endereco.rua,
				bairro: this.form.endereco.bairro,
				complemento: this.form.endereco.complemento,
			}

			data.usuario = usuario;
			data.endereco = endereco;

			try {
				await axios
					.post('http://localhost:3000/api/usuarios', data)
					.then((res) => {
						this.handleUserLogin(res.data);
						router.push('/');
					})
					.catch(err => {console.log(err.response.data)});
			} catch (err) {
				console.log(err);
			}
		}
	}
};
</script>

<style lang="scss" scoped>
@use 'src/sass/sass-utils/_colors.scss' as v;

$color_1: white;

.formularioCadastro {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 2rem;
	width: 100%;
	padding: 0 1rem;
}
.formulario {
	width: 50%;
	align-items: center;
	gap: 1.5rem;
	background-color: hsl(60, 6%, 94%);
	padding: 2rem;
	border-radius: 5px;
	flex-direction: row;
	justify-content: space-evenly;

	@media (max-width: 1400px) {
		width: 80vw;
		padding: 1rem;
	}
}

.fieldset_form {
	display: flex;
	flex-wrap: wrap;
	max-width: 100%;
	align-items: center;
	padding: 2rem;
	gap: 1rem;
	flex-direction: row;
	justify-content: space-evenly;
	margin: 1rem;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: stretch;
		padding: 1rem;
	}
}

.fraseInp {
	flex-basis: 40%;
}
input {
	padding: 0.5rem;
	border: none;
	border-bottom: 2px solid #ccc;
	width: 100%;
	font-size: 1.3rem;
	height: 2.5rem;
}
.botaoCadastro {
	background-color: v.$yellow;
	color: v.$dark-blue;
	width: 50%;
	padding: 1rem;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: all 0.3s ease;
	font-size: 1.2rem;
	&:hover {
		background-color: v.$dark-blue;
		color: v.$light-gray;
	}

	@media (max-width: 768px) {
		width: 80%;
	}
}

.voltar {
	max-width: 20%;
	color: v.$light-gray;
	background-color: v.$dark-blue;
	&:hover {
		background-color: v.$yellow;
		color: v.$dark-blue;
	}
}

.cadastro_background {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	background: v.$gradient-top,
		url(/src/assets/images/quarto_blur.jpg) fixed bottom;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	width: 100%;
	min-height: 100vh;
}

.select {
	width: 40%;
	padding: 0.8rem;
	margin-top: 10px;
	border: 0.3px solid v.$light-blue;
	text-indent: 1rem;
	color: v.$dark-blue;
	border-radius: 1rem;

	@media (max-width: 768px) {
		width: 100%;
	}
}

.button_form {
	gap: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
