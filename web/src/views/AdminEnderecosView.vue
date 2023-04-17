<template>
	<div class="main_content">
		<div class="fixed-form">
			<section class="form_main">
				<div class="form_default">
					<legend class="section_title">Cadastrar Endereço</legend>

					<form
						class="form_geral"
						enctype="multipart/form-data"
						@submit="sendData()"
					>
						<div class="form_field">
							<label for="cidade"></label>
							<input
								class="input_form"
								type="text"
								name="cidade"
								id="cidade"
								placeholder="Cidade"
								v-model="form.cidade"
							/>
						</div>
						<div class="form_field">
							<label for="estado"></label>
							<input
								class="input_form"
								type="text"
								name="estado"
								id="estado"
								placeholder="Estado"
								v-model="form.estado"
							/>
						</div>
						<div class="form_field">
							<label for="numero"></label>
							<input
								class="input_form"
								type="number"
								name="numero"
								id="numero"
								placeholder="Numero"
								v-model="form.numero"
							/>
						</div>
						<div class="form_field">
							<label for="rua"></label>
							<input
								class="input_form"
								type="text"
								name="rua"
								placeholder="Rua"
								v-model="form.rua"
							/>
						</div>
						<div class="form_field">
							<label for="bairro"></label>
							<input
								class="input_form"
								type="text"
								name="bairro"
								id="bairro"
								placeholder="Bairro"
								v-model="form.bairro"
							/>
						</div>
						<div class="form_field">
							<label for="complemento"></label>
							<input
								class="input_form"
								type="text"
								name="complemento"
								id="complemento"
								placeholder="Complemento"
								v-model="form.complemento"
							/>
						</div>
						<button class="button_form" type="submit">Cadastrar</button>
					</form>
				</div>
			</section>
		</div>
		<div>
			<table>
				<thead>
					<tr>
						<th>ID endereço</th>
						<th>Cidade</th>
						<th>Estado</th>
						<th>Numero</th>
						<th>Rua</th>
						<th>Bairro</th>
						<th>Complemento</th>
						<th>Editar</th>
						<th>Excluir</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="endereco in enderecosArr" :key="endereco.id_endereco">
						<td style="text-align: center">{{ endereco.id_endereco }}</td>
						<td style="text-align: center">{{ endereco.cidade }}</td>
						<td style="text-align: center">{{ endereco.estado }}</td>
						<td style="text-align: center">{{ endereco.numero }}</td>
						<td style="text-align: center">{{ endereco.rua }}</td>
						<td style="text-align: center">{{ endereco.bairro }}</td>
						<td style="text-align: center">{{ endereco.complemento }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			enderecosArr: '',
			form: {
				id_endereco: '',
				cidade: '',
				estado: '',
				numero: '',
				rua: '',
				bairro: '',
				complemento: '',
			},
		};
	},

	methods: {
		async getData() {
			await axios
				.get('http://localhost:3000/api/enderecos')
				.then((res) => {
					this.enderecosArr = res.data;
				})
				.catch((erro) => console.log(erro));
		},

		async sendData() {
			const data = {
				cidade: this.form.cidade,
				estado: this.form.estado,
				numero: this.form.numero,
				rua: this.form.rua,
				bairro: this.form.bairro,
				complemento: this.form.complemento,
			};

			await axios
				.post('http://localhost:3000/api/enderecos', data)
				.then((res) => res.data)
				.catch((error) => console.log(error));
		},
	},

	mounted() {
		this.getData();
	},
};
</script>

<style lang="scss" scoped>
@use 'src/sass/sass-utils/_colors.scss' as v;
@import '../sass/components/tables.scss';
</style>
