const db = require('../db');

module.exports = {
	getAll: () => {
		return new Promise((resolve, reject) => {
			db.query(`SELECT * FROM usuarios`, (err, res) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(res);
				return;
			});
		});
	},

	findByEmail: (email) => {
		return new Promise((resolve, reject) => {
			db.query(`SELECT id_usuario, nome, senha, id_role FROM usuarios WHERE email = ?`, [email], (err, res) => {
				if (err) {
					reject(err);
				} else {
					resolve(res);
				}
			});
		});
	},

	auth: (id_usuario, email, senha) => {
		return new Promise((resolve, reject) => {
			db.query(`SELECT email, senha WHERE id_usuario = ?`, [id_usuario], (err, res) => {
				if(err) {
					reject();
				} else {
					resolve();
				}
			})
		})
	},

	insert: (nome, telefone, cpf, email, senha) => {
		return new Promise((resolve, reject) => {
			db.query(
				`INSERT INTO usuarios (
					nome,
					telefone,
					cpf,
					email,
					senha
            	) VALUES (?, ?, ?, ?, ?)`,
				[nome, telefone, cpf, email, senha],
				(err, res) => {
					if (err) {
						reject(err);
						return;
					} else {
						resolve(res.insertId);
						return;
					}
				}
			);
		});
	},

	update: (nome, telefone, cpf, email, senha, endereco_id, id_usuario) => {
		return new Promise((resolve, reject) => {
			db.query(
				`
            UPDATE usuarios
            SET nome = ?,
                telefone = ?,
                cpf = ?,
                email = ?,
                senha = ?,
                endereco_id = ?
            WHERE id_usuario = ?`,
				[nome, telefone, cpf, email, senha, endereco_id, id_usuario],
				(erro, res) => {
					if (erro) {
						reject(erro);
						return;
					}
					resolve(res);
				}
			);
		});
	},
};
