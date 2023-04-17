import { createStore } from 'vuex';
import { calculaTotalDeDias } from '../helpers/calculaTotalDeDias';

export default createStore({
	state: {
		servicosAdicionais: [
			{
				id: 1,
				name: 'Café da manhã',
				price: 35,
			},
			{
				id: 2,
				name: 'Cofre',
				price: 30,
			},
			{
				id: 3,
				name: 'Massagem',
				price: 120,
			},
			{
				id: 4,
				name: 'SPA',
				price: 280,
			},
			{
				id: 5,
				name: 'Translado',
				price: 110,
			},
		],
		dadosReserva: {
			checkIn: '',
			checkOut: '',
			quantidadeDePessoas: '',
			acomodacao: '',
			id_acomodacao: '',
			servicosAdicionais: {},
		},
		consumoReserva: {
			frigobar: [
				{
					id: 1,
					item: 'Água',
					valor: 2,
					quantidade: 1,
				},
				{
					id: 2,
					item: 'Refrigerante',
					valor: 4,
					quantidade: 3,
				},
				{
					id: 3,
					item: 'Amendoim',
					valor: 4,
					quantidade: 3,
				},
			],
			bar: [
				{
					id: 1,
					item: 'Água',
					valor: 2,
					quantidade: 1,
				},
				{
					id: 2,
					item: 'Refrigerante',
					valor: 4,
					quantidade: 4,
				},
				{
					id: 4,
					item: 'Cerveja',
					valor: 4,
					quantidade: 3,
				},
			],
		},
		usuario: {
			id_usuario: '',
			nome: '',
			email: '',
		},
	},
	getters: {
		dadosReserva: (state) => state.dadosReserva,
		consumoReserva: (state) => state.consumoReserva,
		listaConsumoReserva: (state) => {
			const consumoObj = state.consumoReserva;
			const lista = [];
			const cache = {};

			for (const [key, value] of Object.entries(consumoObj)) {
				value.forEach((element) => {
					if (!cache[element.id]) {
						lista.push(element);
						cache[element.id] = true;
					} else {
						lista.find((item) => item.id == element.id).quantidade +=
							element.quantidade;
					}
				});
			}

			return lista;
		},
		diarias: (state) => {
			if (
				state.dadosReserva.checkIn !== '' &&
				state.dadosReserva.checkOut !== ''
			) {
				return calculaTotalDeDias(
					state.dadosReserva.checkIn,
					state.dadosReserva.checkOut
				);
			} else {
				return '';
			}
		},
		totalAdicionais: (state) => {
			let total = 0;
			for (const [key, value] of Object.entries(
				state.dadosReserva.servicosAdicionais
			)) {
				if (value) {
					total += state.servicosAdicionais.find((s) => s.id == key).price;
				}
			}
			return total;
		},
		totalHospedagem: (state) => {
			const diarias = calculaTotalDeDias(
				state.dadosReserva.checkIn,
				state.dadosReserva.checkOut
			);
			if (diarias > 0 && state.dadosReserva.acomodacao !== undefined) {
				return state.dadosReserva.acomodacao.preco * diarias;
			} else {
				return '';
			}
		},
		total: (state) => {
			let totalAdicionais = 0;
			let totalHospedagem = 0;

			for (const [key, value] of Object.entries(
				state.dadosReserva.servicosAdicionais
			)) {
				if (value) {
					totalAdicionais += state.servicosAdicionais.find(
						(s) => s.id == key
					).price;
				}
			}

			const diarias = calculaTotalDeDias(
				state.dadosReserva.checkIn,
				state.dadosReserva.checkOut
			);
			if (diarias > 0 && state.dadosReserva.acomodacao !== undefined) {
				totalHospedagem = state.dadosReserva.acomodacao.preco * diarias;
			}

			return totalAdicionais + totalHospedagem;
		},
		usuario: (state) => state.usuario,
	},
	mutations: {
		onInputChange(state, event) {
			if (event.target.name === 'additionalServices') {
				if (state.dadosReserva.servicosAdicionais[event.target.value]) {
					state.dadosReserva.servicosAdicionais = {
						...state.dadosReserva.servicosAdicionais,
						[event.target.value]: false,
					};
				} else {
					state.dadosReserva.servicosAdicionais = {
						...state.dadosReserva.servicosAdicionais,
						[event.target.value]: true,
					};
				}
			}
			state.dadosReserva[event.target.name] = event.target.value;
			localStorage.setItem('reserva', JSON.stringify(state.dadosReserva));
			return;
		},
		onRoomChange(state, event) {
			state.dadosReserva.acomodacao = event;
			state.dadosReserva.id_acomodacao = event.id_acomodacao;
			localStorage.setItem('reserva', JSON.stringify(state.dadosReserva));
		},
		onLogin(state, event) {
			state.usuario = event;
			localStorage.setItem('usuario', JSON.stringify(state.usuario));
		},
		onLogout(state, event) {
			state.usuario = {
				nome: '',
				senha: '',
			};
			localStorage.removeItem('usuario');
		},
		onResetDadosReserva(state, event) {
			state.dadosReserva = {
				checkIn: '',
				checkOut: '',
				quantidadeDePessoas: '',
				acomodacao: '',
				id_acomodacao: '',
				servicosAdicionais: {},
			};
			localStorage.removeItem('reserva');
		},
	},
	actions: {
		handleInputChange({ commit }, event) {
			commit('onInputChange', event);
		},
		handleRoomChange({ commit }, event) {
			commit('onRoomChange', event);
		},
		handleUserLogin({ commit }, event) {
			commit('onLogin', event);
		},
		handleUserLogout({ commit }, event) {
			commit('onLogout', event);
		},
		handleResetDadosReserva({ commit }, event) {
			commit('onResetDadosReserva', event);
		},
	},
	modules: {},
	methods: {},
});
