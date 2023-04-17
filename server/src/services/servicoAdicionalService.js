const db =  require('../db')

module.exports = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM servicos_adicionais', (err,res) => {
                if(err) {
                    reject(err)
                    return
                } resolve(res)
            })
        })
    },

	getById: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM servicos_adicionais WHERE id_servico_adicional = ?', [id], (err,res) => {
                if(err) {
                    reject(err)
                    return
                } resolve(res)
            })
        })
    },

    insert: (item, descricao, valor) => {
		return new Promise((resolve, reject) => {
			db.query(
				`INSERT INTO servicos_adicionais (
				item,
				descricao,
				valor
				) VALUES (?, ?, ?)`,
				[item, descricao, valor],
				(error, results) => {
					if (error) {
						reject(error);
						return;
					} else {
						resolve(results.insertId);
					}
				}
			);
		});
	},

	update: (item, descricao, valor, id_servico_adicional) => {
		return new Promise ((reject, resolve) => {
			db.query(`
			UPDATE servicos_adicionais
			SET item = ?,
				descricao = ?,
				valor = ?
			WHERE id_servico_adicional = ?`,
			[item, descricao, valor, id_servico_adicional],
			((erro, res) => {
				if(erro) {
					reject(erro)
					return
				}
				console.log(res);
				resolve(res)
				return
			}))
		})
	}

}