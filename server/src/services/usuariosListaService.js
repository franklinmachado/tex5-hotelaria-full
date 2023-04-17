const db = require('../db');

module.exports = {

    getAll:() => {
        return new Promise((resolve, reject) => {
			db.query(`SELECT * FROM usuarios u JOIN endereco e ON u.id_usuario = e.id_usuario`, (err, res) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(res);
				return;
			});
		});
    },

	getById:(id) => {
        return new Promise((resolve, reject) => {
			db.query(`SELECT * FROM usuarios u
			JOIN endereco e
			ON u.id_usuario = e.id_usuario
			WHERE u.id_usuario = ?`,[id], (err, res) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(res);
				return;
			});
		});
    },


	update:(nome,telefone,cpf,email,senha,cidade,estado,numero,rua,bairro,complemento,id_usuario) => {
		return new Promise((resolve, reject) => {
			db.query(`
			UPDATE usuarios u
			JOIN endereco e ON u.id_usuario = e.id_usuario
			SET u.nome = ?,
				u.telefone = ?,
				u.cpf = ?,
				u.email = ?,
				u.senha = ?,
				e.cidade = ?,
				e.estado = ?,
				e.numero = ?,
				e.rua = ?,
				e.bairro = ?,
				e.complemento = ?
			WHERE u.id_usuario = ?
			`,
			[nome,telefone,cpf,email,senha,cidade,estado,numero,rua,bairro,complemento,id_usuario],
			(err, res) => {
				if(err) {
					reject(err);
					return;
				}
				resolve(res);
				return;
			})
		})
	}
}