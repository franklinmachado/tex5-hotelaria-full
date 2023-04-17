<template>
	<main class="form_main">
		<div class="form_default">
			<fieldset class="form_fields">
				<legend class="section_title">Cadastro de Acomodações</legend>
				<form
					class="form_geral"
					enctype="multipart/form-data"
					@submit.prevent="onSubmit()"
					ref="form"
				>
					<div class="form_field">
						<label for="titulo">Título da acomodação</label>
						<input class="input_form" type="text" id="titulo" v-model="form.titulo" />
					</div>
					<div class="form_field">
						<label for="preco">Preço da diária</label>
						<input
							class="input_form"
							type="text"
							id="preco"
							v-model="form.preco"
						/>
					</div>
					<div class="form_field">
						<label for="descricao">Descreva a acomodação</label>
						<textarea
							class="text_area"
							name="descricao"
							id="descricao"
							cols="30"
							rows="10"
							v-model="form.descricao"
						></textarea>
					</div>
					<div class="upload">
						<label for="imagem">Selecione a imagem da acomodação:</label>
						<input
							class="select_image"
							type="file"
							name="imagem"
							id="imagem"
							accept="image/*"
							ref="image"
							@change="onSelect"
						/>
					</div>
					<div>
						<button class="button_form" type="submit">Cadastrar</button>
					</div>
				</form>
			</fieldset>
		</div>
	</main>
</template>

<script>
import { mapActions } from 'vuex';
import axios from 'axios';
import router from '@/router';

export default {
	name: 'CadastroAcomodacaoView',
	data() {
		return {
			form: {
				titulo: '',
				preco: '',
				descricao: '',
				imagem: '',
			},
		};
	},
	methods: {
		...mapActions(['handleInsertAcomodacao']),
		async onSubmit() {
			const formData = new FormData();
			formData.append('imagem', this.form.imagem);
			formData.append('titulo', this.form.titulo);
			formData.append('preco', this.form.preco);
			formData.append('descricao', this.form.descricao);

			try {
				await axios
					.post('http://localhost:3000/api/acomodacoes', formData)
					.then((res) => {
						router.push({name:'AdminAcomodacoes'});
					});
			} catch (err) {
				console.log(err);
			}
		},
		onSelect() {
			const file = this.$refs.image.files[0];
			this.form.imagem = file;
		},
	},
};
</script>
<style lang="scss">
@import '../sass/components/_forms.scss';
</style>
