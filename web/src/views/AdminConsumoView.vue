<template>
	<div class="main_content">
		<div class="fixed-form">
			<section class="form_main">
				<div class="form_default">
					<legend class="section_title">Cadastrar Consumação</legend>
					<form
						class="form_geral"
						style="display:flex margin-rigth: 1rem"
						enctype="multipart/form-data"
						@submit="sendData()"
					>
						<div class="form_field">
							<label for="item"></label>
							<input
								class="input_form"
								type="text"
								name="item"
								id="item"
								placeholder="Item"
								v-model="form.item"
							/>
						</div>
						<div class="form_field">
							<label for="valor"></label>
							<input
								class="input_form"
								type="number"
								name="valor"
								id="valor"
								placeholder="Valor"
								v-model="form.valor"
							/>
						</div>
						<div class="form_field">
							<label for="local"></label>
							<input
								class="input_form"
								type="text"
								name="local"
								id="local"
								placeholder="Local"
								v-model="form.local"
							/>
						</div>
						<div class="form_field">
							<label for="qtd_item"></label>
							<input
								class="input_form"
								type="number"
								name="qtd_item"
								id="qtd_item"
								placeholder="Quantidade de itens"
								v-model="form.qtd_item"
							/>
						</div>
						<div class="form_field">
							<label for="data_hora"></label>
							<input
								class="input_form"
								type="date"
								name="data_hora"
								id="data_hora"
								placeholder="Data"
								v-model="form.data_hora"
							/>
						</div>
						<div class="form_field">
							<label for="id_reserva"></label>
							<input
								class="input_form"
								type="number"
								name="id_reserva"
								id="id_reserva"
								placeholder="ID da reserva"
								v-model="form.id_reserva"
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
						<th>ID do consumo</th>
						<th>Item</th>
						<th>Valor</th>
						<th>Local</th>
						<th>Quantidade</th>
						<th>Data</th>
						<th>ID do quarto</th>
						<th>Editar</th>
						<th>Excluir</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="consumido in consumoArr" :key="consumido.id_consumo">
						<td style="text-align: center">{{ consumido.id_consumo }}</td>
						<td style="text-align: center">{{ consumido.item }}</td>
						<td style="text-align: center">{{ consumido.valor }}</td>
						<td style="text-align: center">{{ consumido.local }}</td>
						<td style="text-align: center">{{ consumido.qtd_item }}</td>
						<td style="text-align: center">{{ consumido.data_hora }}</td>
						<td style="text-align: center">{{ consumido.id_reserva }}</td>
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
			consumoArr: '',
			form: {
				id_consumo: '',
				item: '',
				valor: '',
				local: '',
				qtd_item: '',
				data_hora: '',
				id_reserva: '',
			},
		};
	},

	methods: {
		async getData() {
			await axios
				.get('http://localhost:3000/api/consumo')
				.then((res) => (this.consumoArr = res.data))
				.catch((error) => console.log(error));
		},

		async sendData() {
			const data = {
				item: this.form.item,
				valor: this.form.valor,
				local: this.form.local,
				qtd_item: this.form.qtd_item,
				data_hora: this.form.data_hora,
				id_reserva: this.form.id_reserva,
			};

			await axios
				.post('http://localhost:3000/api/consumo', data)
				.then((res) => res.data)
				.catch((error) => error);
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
