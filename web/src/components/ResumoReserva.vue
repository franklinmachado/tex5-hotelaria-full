<template>
	<div>
		<aside class="resume">
			<div class="resume__reserve">
				<h2 class="resume__title">Resumo da reserva</h2>
				<ul class="resume__l">
					<li class="resume__listItem">
						Data de Entrada:
						<span class="feature_color">
							{{ new Date(dadosReserva.checkIn).toLocaleDateString('pt-BR') }}</span
						>
					</li>
					<li class="resume__listItem">
						Data de Saída:
						<span class="feature_color">
							{{
								new Date(dadosReserva.checkOut).toLocaleDateString('pt-BR')
							}}</span
						>
					</li>
					<li class="resume__listItem">
						Número de Hóspedes:
						<span class="feature_color">
							{{ dadosReserva.quantidadeDePessoas }}</span
						>
					</li>
					<li class="resume__listItem">
						Diárias:
						<span class="feature_color">
							{{ diarias }}
							{{ !diarias ? '' : diarias > 1 ? 'dias' : 'dia' }}</span
						>
					</li>
					<li class="resume__listItem">Quarto: {{ dadosReserva.acomodacao?.titulo }}</li>
					<li class="resume__listItem">
						Valor do quarto:
						<span class="feature_color">
							{{ formatCurrency(dadosReserva.acomodacao?.preco) }}</span
						>
					</li>
					<li class="resume__listItem">
						Valor da hospedagem:
						<span class="feature_color">
							{{ formatCurrency(totalHospedagem) }}</span
						>
					</li>
				</ul>
				<AditionalServicesModal />

				<DiscountCode />

				<ul class="resume__total">
					<li class="resume__listItem">
						Total Adicionais:
						<span class="feature_color">
							{{ formatCurrency(totalAdicionais) }}</span
						>
					</li>
					<li class="resume__listItem">
						Valor total:
						<span class="feature_color">{{ formatCurrency(total) }}</span>
					</li>
				</ul>
				<ModalReservaContinue />
			</div>
		</aside>
	</div>
</template>
<script>
import { mapGetters } from 'vuex';
import AditionalServicesModal from './AditionalServicesModal.vue';
import ModalReservaContinue from './ModalReservaContinue.vue';
import DiscountCode from './DiscountCode.vue';

export default {
	name: 'ResumoReserva',
	components: { AditionalServicesModal, ModalReservaContinue, DiscountCode },
	computed: {
		...mapGetters([
			'dadosReserva',
			'diarias',
			'totalAdicionais',
			'totalHospedagem',
			'total',
		]),
	},
	getters: {},
	methods: {
		formatCurrency(value) {
			if (!value) return '';
			return Intl.NumberFormat(undefined, {
				currency: 'BRL',
				style: 'currency',
			}).format(value);
		},
	},
};
</script>
<style lang="scss" scoped>
@use 'src/sass/sass-utils/_colors.scss' as v;
.resume {
	display: flex;
	width: 30vw;
	height: auto;
	max-height: 90vh;
	overflow: auto;
	position: -webkit-sticky;
	position: sticky;
	top: 2%;
	margin-top: 1rem;
	background: #0c1926;
	color: #fff;
	margin-bottom: 2rem;
	margin-left: 2rem;
	border-radius: 1rem;
	box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.07);

	@media (max-width: 768px) {
		position: sticky;
		width: 100%;
		margin: 1rem auto;
		text-align: center;
	}
}

.resume__reserve {
	padding: 2rem;
}

.resume__l {
	padding: 0;
}

.resume__total {
	padding: 0;
}
.resume__title {
	text-align: left;
	margin-bottom: 2rem;

	@media (max-width: 768px) {
		text-align: center;
	}
}

.resume__listItem {
	font-size: 1rem;
	font-weight: 600;
	line-height: 1.5rem;
}

.resume__addServices {
	display: block;
	color: #fff;
	padding: 2rem 0;
	text-align: right;
}

.resume__continue {
	width: 100%;
	margin: 2rem 0 0 0;
	padding: 1rem;
	text-transform: uppercase;
	font-size: 1rem;
	font-weight: 900;
	color: #415a77;
	cursor: pointer;
}

.resume__total {
	margin: 2rem 0;
}

.feature_color {
	color: v.$yellow;
}
</style>
