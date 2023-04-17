<template>
	<div class="container">
		<div class="">
			<table>
				<thead>
					<tr>
						<th>Item</th>
						<th>Quantidade</th>
						<th>Valor Total</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="i of listaConsumoReserva">
						<td>{{ i.item }}</td>
						<td>{{ i.quantidade }}</td>
						<td>{{ formataValor(i.quantidade * i.valor) }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex';
import { formataValor } from '../helpers/formataValor';

export default {
	name: 'AdminView',
	computed: {
		...mapGetters(['listaConsumoReserva']),
	},
	methods: {
		formataValor,
	},
};
</script>
<style lang="scss" scoped>
@use 'src/sass/sass-utils/_colors.scss' as v;
.container {
	max-width: 800px;
	margin: 2rem auto;
	font-family: 'Roboto', sans-serif;
	color: #333;
}

table {
	border-collapse: collapse;
	width: 100%;
	margin-bottom: 40px;
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
}

thead {
	background-color: v.$main-blue;
	color: #fff;
}

th,
td {
	text-align: left;
	padding: 20px;
	font-weight: 400;

}

td {
	border-right: 1px solid v.$light-gray;
	border-bottom: 1px solid v.$light-gray;
}

tbody tr:last-child td {
	border-bottom: none;
}
</style>
