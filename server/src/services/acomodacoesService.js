const db = require('../db');

module.exports = {
	getAll: () => {
		return new Promise((resolve, reject) => {
			db.query('SELECT * FROM acomodacoes', (error, results) => {
				if (error) {
					reject(error);
					return;
				}
				resolve(results);
			});
		});
	},

	getById: (id_acomodacao) => {
		return new Promise((resolve, reject) => {
			db.query('SELECT * FROM acomodacoes WHERE id_acomodacao = ?', [id_acomodacao], (error, results) => {
				if (error) {
					reject(error);
					return;
				}
				resolve(results);
			});
		});
	},

	insert: (status, titulo, descricao, imagem, preco) => {
		return new Promise((resolve, reject) => {
			db.query(
				`INSERT INTO acomodacoes (
				titulo,
				descricao,
				imagem,
				preco
				) VALUES (?, ?, ?, ?)`,
				[status, titulo, descricao, imagem, preco],
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

	update: (id_acomodacao, status, titulo, descricao, imagem, preco) => {
			return new Promise((resolve, reject) => {
				db.query(
					`
					UPDATE acomodacoes
					SET status = ?,
					titulo = ?,
					descricao = ?,
					imagem = ?,
					preco = ?
					WHERE id_acomodacao = ?
				`,
					[status, titulo, descricao, imagem, preco, id_acomodacao],
					(error, results) => {
						if (error) {
							reject(error);
							return;
						} else {
							resolve(results);
						}
					}
				);
			});
	},
};
