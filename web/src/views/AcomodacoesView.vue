<template>
	<div class="container">
		<h2>Nossas Acomodações</h2>
		<div class="galeria">
			<div
				class="acomodacao__container"
				v-for="acomodacao in acomodacoes"
				:key="acomodacao.id_acomodacao"
			>
				<h3>{{ acomodacao.titulo }}</h3>
				<img
					:src="'http://localhost:3000/static/' + acomodacao.imagem"
					alt=""
					width="300"
					height="300"
				/>
				<p>{{ acomodacao.descricao }}</p>
				<button
					role="link"
					class="btn"
					@click="verificaStatusAcomodacao(acomodacao)"
					>Quero essa!</button
				>
			</div>
		</div>
	</div>
</template>


<script>
import QuartoCard from '@/components/QuartoCard.vue';
import router from '@/router';
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'AcomodacoesView',
	data() {
		return {
			acomodacoes: [],
		};
	},
	components: {
		QuartoCard,
	},
	computed: {
		...mapGetters(['dadosReserva']),
	},
	methods: {
		...mapActions(['handleRoomChange', 'handleRoomChange']),
		verificaStatusAcomodacao(acomodacao) {
			if (acomodacao.status === 1) {
				alert('Acomodação indisponível no momento');
				return;
			}
			else {
				this.handleRoomChange(acomodacao);
				router.push('/reservas');
			}
		}
	},
	mounted: function () {
		axios.get('http://localhost:3000/api/acomodacoes').then((res) => {
			this.acomodacoes = res.data;
		});
	},
};
</script>

<style lang="scss" scoped>
@use 'src/sass/sass-utils/_colors.scss' as c;
.container {
	color: #25334a;
	background-color: #ffffff;
	background-attachment: fixed;
	background-size: cover;
	text-align: center;
	margin-block: 2rem;

	h2 {
		color: c.$main-blue;
		font-size: 2.4rem;
		font-weight: 700;
		text-align: center;
		text-transform: uppercase;
	}
}

.galeria {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}

.acomodacao__container {
	max-width: calc(300px + 5vw);
	width: 100%;
	justify-content: center;

	img {
		border-radius: 8px;
	}

	.btn {
		background-color: c.$yellow;
		border-radius: 8px;
		color: c.$white;
		padding-inline: 1rem;
		padding-block: 0.5rem;
		text-decoration: none;
	}
}
</style>
