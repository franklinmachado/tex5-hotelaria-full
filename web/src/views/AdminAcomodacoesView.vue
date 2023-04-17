<template>
	<div class="container">
		<nav class="menu">
			<router-link :to="{ name: 'CadastroAcomodacao' }" class="btn"
				>Cadastrar nova acomodação</router-link
			>
		</nav>
		<div class="table-responsive">
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Imagem</th>
						<th>Título</th>
						<th>Descrição</th>
						<th>Preço</th>
						<th>Status</th>
						<th>Ações</th>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="(acomodacao, index) in acomodacoes"
						:key="acomodacao.id_acomodacao"
					>
						<td>{{ acomodacao.id_acomodacao }}</td>
						<td>
							<img
								:src="'http://localhost:3000/static/' + acomodacao.imagem"
								alt=""
								width="200"
								height="150"
							/>
						</td>
						<td>{{ acomodacao.titulo }}</td>
						<td>
							{{ acomodacao.descricao }}
						</td>
						<td>{{ acomodacao.preco }}</td>
						<td>
							{{ acomodacao.status }}
						</td>
						<td>
							<router-link
								:to="{ name: 'EditarAcomodacao' }"
								@click="selecionarAcomodacao(acomodacao)"
								>Editar</router-link
							>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
import axios from 'axios';

export default {
	name: 'AdminAcomodacoesView',
	data() {
		return {
			acomodacoes: [],
		};
	},
	methods: {
		selecionarAcomodacao(acomodacao) {
			localStorage.setItem('acomodacaoSelecionada', JSON.stringify(acomodacao));
		},
	},
	mounted: function () {
		axios
			.get('http://localhost:3000/api/acomodacoes')
			.then((res) => (this.acomodacoes = res.data));
	},
};
</script>
<style lang="scss" scoped>
@import '../sass/components/_forms.scss';
.container {
	max-width: 1120px;
	margin-inline: auto;
}

.table-responsive {
	overflow: scroll;
}

.menu {
	margin-block-end: 2rem;
}

.btn {
	box-sizing: border-box;
	background-color: lightskyblue;
	border-radius: 6px;
	padding-inline: 1rem;
	padding-block: 0.5rem;
	text-decoration: none;

	&:visited {
		color: inherit;
	}
}
</style>
