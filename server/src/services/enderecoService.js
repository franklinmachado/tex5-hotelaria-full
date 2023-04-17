const db = require('../db');

module.exports = {
	getAll: () => {
		return new Promise((resolve, reject) => {
			db.query('SELECT * FROM endereco', (error, results) => {
				if (error) {
					reject(error);
					return;
				}
				resolve(results);
			});
		});
	},

	insert: (cidade, estado, numero, rua, bairro, complemento, id_usuario) => {
		return new Promise((resolve, reject) => {
			db.query(
				`INSERT INTO endereco (
					cidade,
					estado,
					numero,
					rua,
					bairro,
					complemento,
					id_usuario
				) VALUES (?, ?, ?, ?, ?, ?, ?)`,
				[cidade, estado, numero, rua, bairro, complemento, id_usuario],
				(error, results) => {
					if (error) {
						reject(error);
						return;
					} else {
						resolve();
					}
				}
			);
		});
	},

	update: (cidade, estado, numero, rua, bairro, complemento, id_endereco ) => {
		return new Promise((resolve, reject) => {
			db.query(`
				UPDATE endereco
				SET cidade = ?,
					estado = ?,
					numero = ?,
					rua = ?,
					bairro = ?,
					complemento = ?
				WHERE id_endereco = ?`,
				[cidade, estado, numero, rua, bairro, complemento, id_endereco],
				(error, results) => {
					if (error) {
						reject(error);
						return;
					} else {
						resolve(results.insertId);
					}
				});
		});
	}
};
