const EnderecoService = require('../services/enderecoService');

module.exports = {
	getAll: async (_, res) => {
		const data = [];
		const endereco = await EnderecoService.getAll();

		for (const i in endereco) {
			data.push(endereco[i]);
		}
		res.send(data);
	},

	insert: async (req, res) => {
		const { cidade, estado, numero, rua, bairro, complemento } = req.body;

		try {
			const id = await EnderecoService.insert(
				cidade,
				estado,
				numero,
				rua,
				bairro,
				complemento,
			);
			const endereco = {
				cidade,
				estado,
				numero,
				rua,
				bairro,
				complemento,
				enderecoId: id,
			};
			res.send(endereco);
		} catch (err) {
			console.error(err);
		}
	},

	update: async(req, res) => {
		const { cidade, estado, numero, rua, bairro, complemento } = req.body;
		const {id_endereco} = req.params;

		try {
			await EnderecoService.update(
				cidade,
				estado,
				numero,
				rua,
				bairro,
				complemento,
				id_endereco
			);
			const endereco = {
				cidade,
				estado,
				numero,
				rua,
				bairro,
				complemento,
				id_endereco
			};
			res.send(endereco);
		} catch (err) {
			console.error(err);
		}

	}
};
