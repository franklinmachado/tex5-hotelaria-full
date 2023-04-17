const AcomodacoesService = require('../services/acomodacoesService');

module.exports = {
	getAll: async (req, res) => {
		const data = [];
		const acomodacoes = await AcomodacoesService.getAll();

		for (const i in acomodacoes) {
			data.push(acomodacoes[i]);
		}
		res.send(data);
	},

	insert: async (req, res) => {
		const { titulo, descricao, preco } = req.body;
		const { filename: imagem } = req.file;

		try {
			const id = await AcomodacoesService.insert(
				titulo,
				descricao,
				imagem,
				preco
			);
			const acomodacao = {
				status: 0,
				titulo,
				descricao,
				imagem,
				preco,
				acomodacaoId: id,
			};
			res.send(acomodacao);
		} catch (err) {
			console.error(err);
		}
	},

	update: async (req, res) => {
		const { id_acomodacao, titulo, preco, descricao, status, imagem } =
			req.body;

			console.log('43:',req.body);
		if (req.file && req.file.filename) {
			imagem = req.file.filename;
		}

		try {
			await AcomodacoesService.update(
				id_acomodacao,
				status,
				titulo,
				descricao,
				imagem,
				preco
			);
			res.status(201);
			res.send();
		} catch (err) {
			console.error(err);
		}
	},
};
