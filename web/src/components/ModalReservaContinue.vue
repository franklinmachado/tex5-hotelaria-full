<template>
	<div id="modal">
		<button class="button" @click="showModal = true">Continue</button>

		<div
			class="modal-overlay"
			v-if="showModal"
			@click="showModal = false"
		></div>

		<div class="modal" v-if="showModal">
			<h1>Serviços Adquiridos:</h1>
			<div>
				<ul>
					<li class="resume__listItem">
						Data de Entrada: {{ dadosReserva.checkIn }}
					</li>
					<li class="resume__listItem">
						Data de Saída: {{ dadosReserva.checkOut }}
					</li>
					<li class="resume__listItem">
						Número de Hóspedes:
						{{ dadosReserva.quantidadeDePessoas }}
					</li>
					<li class="resume__listItem">
						Diárias: {{ diarias }}
						{{ !diarias ? '' : diarias > 1 ? 'dias' : 'dia' }}
					</li>
					<li class="resume__listItem">
						Quarto: {{ dadosReserva.acomodacao?.nome }}
					</li>
					<li class="resume__listItem">
						Valor do quarto:
						{{ dadosReserva.acomodacao?.preco }}
					</li>
					<li class="resume__listItem">
						Valor da hospedagem:
						{{ formataValor(totalHospedagem) }}
					</li>
					<li class="resume__listItem">
						Total Adicionais:
						{{ formataValor(totalAdicionais) }}
					</li>
					<li class="resume__listItem">
						Valor total:
						{{ formataValor(total) }}
					</li>
					<li class="resume__listItem">
						Descrição do quarto:
						<img
							:src="
								'http://localhost:3000/static/' + dadosReserva.acomodacao.imagem
							"
							title="Quartos Hotel"
						/>
						{{ dadosReserva.acomodacao.descricao }}
					</li>
				</ul>
			</div>

			<button class="button" @click="finalizarReserva()">
				Finalizar reserva
			</button>
			<button class="buttonClose" @click="showModal = false">Editar</button>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { formataValor } from '@/helpers/formataValor';
import axios from 'axios';
import router from '@/router';

export default {
	name: 'ModalReservaContinue',
	data() {
		return {
			showModal: false,
		};
	},
	computed: {
		...mapGetters([
			'dadosReserva',
			'diarias',
			'totalAdicionais',
			'totalHospedagem',
			'total',
			'usuario',
		]),
	},
	methods: {
		...mapActions(['handleResetDadosReserva']),
		formataValor,
		finalizarReserva() {
			const reserva = {};
			reserva['check_in'] = this.dadosReserva.checkIn;
			reserva['check_out'] = this.dadosReserva.checkOut;
			reserva['id_acomodacao'] = this.dadosReserva.id_acomodacao;
			reserva['quantidade_pessoas'] = this.dadosReserva.quantidadeDePessoas;
			reserva['id_usuario'] = this.usuario.id_usuario;

			axios
				.post('http://localhost:3000/api/reservas', reserva)
				.then((res) => {
					this.handleResetDadosReserva();
					router.push('/');
				});
		},
	},
};
</script>

<style>
.button {
	appearance: none;
	outline: none;
	border: none;
	background: none;
	cursor: pointer;

	display: inline-block;
	width: 100%;
	padding: 15px 25px;
	background: #415a77;
	border-radius: 8px;

	color: #fff;
	font-size: 18px;
	font-weight: 700;

	box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
	transition: 0.4s ease-out;
}
.button:hover {
	background: #778da9ff;
}

.buttonClose {
	appearance: none;
	outline: none;
	border: none;
	background: none;
	cursor: pointer;

	display: inline-block;
	width: 100%;
	padding: 15px 25px;
	background: #ac3636;
	border-radius: 8px;

	color: #fff;
	font-size: 18px;
	font-weight: 700;

	box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
	transition: 0.4s ease-out;
}

.button:hover {
	box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
}

.modal-overlay {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 98;
	background-color: rgba(0, 0, 0, 0.3);
}

.modal {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 9999;

	width: 100%;
	max-width: 600px;
	background-color: #fff;
	border-radius: 16px;

	padding: 25px;
}

.modal h1 {
	color: #222;
	font-size: 32px;
	font-weight: 900;
	margin-bottom: 15px;
}

.modal div {
	color: #666;
	font-size: 18px;
	font-weight: 400;
	margin-bottom: 15px;
}

/**/
.resume__listItem {
	font-size: 0.9rem;
	font-weight: 600;
	line-height: 1.5rem;
	padding-bottom: 5px;
}
</style>
