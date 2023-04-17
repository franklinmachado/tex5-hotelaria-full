const ServicosAdicionais = require("../services/servicoAdicionalService");


module.exports = {
    getAll: async (req, res) => {
        const data = []
        const servicosAdd = await ServicosAdicionais.getAll()

        for( const i  in servicosAdd) {
            data.push(servicosAdd[i])
        }
        res.send(data)
    },

	getById: async (req, res) => {
		const { id } = req.body
        const obj = await ServicosAdicionais.getById(id)
        res.send(obj)
    },

    insert: async (req, res) => {
		const { item, descricao, valor } = req.body;

		try {
			const id = await ServicosAdicionais.insert(
				item,
				descricao,
				valor
			);
			const servicoAdd = {
				item,
				descricao,
				valor,
				servicoAddId: id,
			};
			res.send(servicoAdd);
		} catch (err) {
			console.error(err);
		}
	},

	update: async (req, res) => {
        const { item, descricao, valor } = req.body
        const { id_servico_adicional } = req.params

		try {
			
			await ServicosAdicionais.update(
				item,
				descricao,
				valor,
				id_servico_adicional
			)

			const servicoAdd = {
				item,
				descricao,
				valor,
				id_servico_adicional
			}
			res.send(servicoAdd)

		} catch (erro) {
			console.log(erro);
		}
    }
}
