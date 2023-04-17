<template>
	<section class="containerReserv__form">
		<h2 class="form__title">Minha Reserva</h2>
		<p class="form__infoReserva">
			Forneça a data de entrada, saída e quantidade de pessoas
		</p>

		<hr class="divider" />

		<form class="form__date">
			<div>
				<label class="field-form-reserva">Escolha a data de entrada</label>
				<input
					type="date"
					name="checkIn"
					:value="dadosReserva.checkIn"
					class="form-control"
					@change="handleInputChange($event)"
				/>
			</div>
			<div>
				<label class="field-form-reserva">Escolha a data de saída</label>
				<input
					type="date"
					name="checkOut"
					:value="dadosReserva.checkOut"
					class="form-control"
					@change="handleInputChange($event)"
				/>
			</div>
			<div>
				<label class="field-form-reserva">Quantidade de pessoas</label>
				<input
					type="number"
					name="quantidadeDePessoas"
					:value="dadosReserva.quantidadeDePessoas"
					min="1"
					max="4"
					class="form-control"
					@change="handleInputChange($event)"
				/>
			</div>
		</form>
	</section>
	<div class="box">
		<div class="roomOptions__room">
			<h3 class="roomOptions__paragraph select_room">Escolha seu quarto</h3>
			<QuartoCard
				v-for="acomodacao in acomodacoes"
				v-show="acomodacao.status === 'DISPONÍVEL'"
				:acomodacao="acomodacao"
				:key="acomodacao.id_acomodacao"
			/>
		</div>
		<ResumoReserva />
	</div>
</template>

<script>
import QuartoCard from '@/components/QuartoCard.vue';
import ResumoReserva from '@/components/ResumoReserva.vue';
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'ReservasView',
	components: { QuartoCard, ResumoReserva },
	data() {
		return {
			max: 3,
			acomodacoes: [],
			acomodacaoSelecionada: undefined,
		};
	},
	methods: {
		...mapActions(['handleInputChange']),
	},
	computed: {
		...mapGetters(['dadosReserva']),
	},
	mounted: function () {
		axios.get('http://localhost:3000/api/acomodacoes').then((res) => {
			this.acomodacoes = res.data;
		});
	},
};
</script>

<style lang="scss" scoped>
.containerReserv__form {
	margin: 1rem;
	text-align: center;

	h2 {
		text-align: center;
		font-size: 2rem;
		font-weight: 700;
	}
}
.box {
	display: flex;

	h3 {
		text-align: center;
		font-size: 2rem;
		font-weight: 700;
		color: #0c1926;
	}

	@media (max-width: 768px) {
		flex-direction: column;
	}
}

.form__title {
	color: #0c1926;
	font-size: 2rem;
	// margin: 45px 0 0px 0;
	text-align: center;
}

.form__infoReserva {
	color: #0c1926;
	margin-bottom: 35px;
	text-align: center;
	font-size: 1.2rem;
}

.divider {
	width: 100px;
	height: 2px;
	background-color: #0c1926;
	margin: 0 auto;
	border: none;
	text-align: center;
}

.form__date {
	display: flex;
	padding: 2rem 0 3rem 0;
	justify-content: center;
	align-items: flex-end;
	column-gap: 1rem;

	@media (max-width: 600px) {
		max-width: 50vw;
		margin: auto;
		padding: 2rem 0 3rem 0;
		-moz-column-gap: 1rem;
		gap: 1.4rem;
		flex-direction: column;
		align-content: center;
		align-items: center;
	}
}

.form__date label {
	padding: 0 0 1rem 0;

	@media (max-width: 768px) {
		font-size: 1rem;
	}
}

.form__date input {
	width: 100%;
	padding: 12px 20px;
	margin: 8px 0 0 0;
	outline: none;
	border: 1px solid #ccc;
}
</style>
