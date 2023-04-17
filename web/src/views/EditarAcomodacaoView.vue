<template lang="js">
	<div class="edicao__container" id="modal">
		<form enctype="multipart/form-data" @submit.prevent="editarAcomodacao()">
			<div>
				<label for="id">ID</label>
				<input type="text" readonly v-model="acomodacaoSelecionada.id_acomodacao" />
			</div>
			<div>
				<label for="titulo">Título da acomodação</label>
				<input type="text" v-model="acomodacaoSelecionada.titulo" />
			</div>
			<div>
				<label for="descricao">Descrição</label>
				<textarea
					name="descricao"
					id="descricao"
					cols="30"
					rows="5"
					v-model="acomodacaoSelecionada.descricao"
				></textarea>
			</div>
			<div>
				<label for="preco">Preço</label>
				<input type="text" id="preco" v-model="acomodacaoSelecionada.preco" />
			</div>
			<div>
				<label for="status">Status</label>
				<select name="status" id="status" v-model="acomodacaoSelecionada.status">
					<option value="PENDENTE">Pendente</option>
					<option value="DISPONÍVEL">Disponível</option>
					<option value="OCUPADO">Ocupado</option>
				</select>
			</div>
			<div>
				<label for="imagem">Selecione a imagem da acomodação:</label>
				<input
					type="file"
					name="imagem"
					id="imagem"
					accept="image/*"
					ref="image"
					@change="onSelect"
				/>
			</div>
			<button type="submit" :disabled="acomodacaoSelecionada === null">Atualizar acomodação</button>
		</form>
	</div>
</template>
<script>
import router from '@/router';
import axios from 'axios';

export default {
	name: 'EditarAcomodacaoView',
	data() {
		return {
			acomodacaoSelecionada: {
				id_acomodacao: '',
				titulo: '',
				preco: '',
				descricao: '',
				status: '',
				imagem: '',
			},
			imagem: null,
			formData: new FormData(),
		};
	},
	methods: {
		async editarAcomodacao() {
			const confirm = window.confirm(
				'Deseja atualizar acomodação: ' +
					this.acomodacaoSelecionada.id_acomodacao +
					'?'
			);

			if (confirm) {
				for (const [key, value] in this.acomodacaoSelecionada) {
					this.formData.append(key, value);
				}
				if (this.imagem !== null) {
					this.formData.append('imagem', this.imagem);
				}
				try {
					await axios
						.put(
							`http://localhost:3000/api/acomodacoes/${this.acomodacaoSelecionada.id_acomodacao}`,
							this.acomodacaoSelecionada
						)
						.then((res) => {
							router.push({ name: 'AdminAcomodacoes' });
						});
				} catch (err) {
					console.error(err);
				}
			}
		},
		onSelect() {
			if (this.$refs.image.files[0]) {
				this.imagem = this.$refs.image.files[0];
			} else {
				this.imagem = this.acomodacaoSelecionada.imagem;
			}
		},
	},
	mounted: function () {
		if (localStorage.getItem('acomodacaoSelecionada')) {
			this.acomodacaoSelecionada = JSON.parse(
				localStorage.getItem('acomodacaoSelecionada')
			);
		} else {
			router.push({ name: 'AdminAcomodacoes' });
		}
	},
	unmounted: function () {
		localStorage.removeItem('acomodacaoSelecionada');
	},
};
</script>
<style lang="scss">
form {
	width: fit-content;
	margin-inline: auto;
	margin-block: 1rem;

	div {
		label {
			display: block;
		}
		input {
			width: 300px;
		}

		& + div {
			margin-block-start: 1rem;
		}
	}
}
</style>
