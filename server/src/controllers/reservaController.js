const Reserva = require('../models/reserva');
const ReservasService = require('../services/reservaService');

module.exports = {
	getAll: async (req, res) => {
		const data = [];
		const reservas = await ReservasService.getAll();

		for (const i in reservas) {
			data.push(reservas[i]);
		}
		res.send(data);
	},

	insert: async (req, res) => {
		const {
			check_in,
			check_out,
			quantidade_pessoas,
			acomodacao_id,
			usuario_id,
		} = req.body;

		const reservaModel = new Reserva(req.body);
		const reserva = await reservaModel.criarReserva();
		try {
			const id = await ReservasService.insert(
				reserva.check_in,
				reserva.check_out,
				reserva.quantidade_pessoas,
				reserva.total,
				reserva.total_desconto,
				(reserva.id_cupom = 1),
				reserva.id_acomodacao,
				reserva.id_usuario
			);
			res.status(201).json({
				...reserva,
				id_reserva: id,
			});
		} catch (err) {
			console.error(err);
		}
	},

	update: async (req, res) => {
		const {
			check_in,
			check_out,
			quantidade_pessoas,
			total,
			total_desconto,
			confirmacao,
			data_confirmacao,
			id_cupom,
			id_acomodacao,
			id_usuario,
		} = req.body;
		const { id_reserva } = req.params;

		try {
			await ReservasService.update(
				check_in,
				check_out,
				quantidade_pessoas,
				total,
				total_desconto,
				confirmacao,
				data_confirmacao,
				id_cupom,
				id_acomodacao,
				id_usuario,
				id_reserva
			);

			const reserva = {
				check_in,
				check_out,
				quantidade_pessoas,
				total,
				total_desconto,
				confirmacao,
				data_confirmacao,
				id_cupom,
				id_acomodacao,
				id_usuario,
				id_reserva,
			};
			res.send(reserva);
		} catch (error) {
			console.log(error);
		}
	},
};
