const bcrypt = require('bcryptjs');
const usuarioService = require('../services/usuariosService');
const jwt = require('jsonwebtoken');
const config  = require('../config');

function jwtSignUser (user) {
	const ONE_WEEK = 60 * 60 * 24 * 7;
	return jwt.sign(user, config.authentication.jwtSecret, {
		expiresIn: ONE_WEEK
	})
}

module.exports = {
	login: async (req, res) => {

		let { email, senha } = req.body;
		// buscar email e senha no db
		try {
			const [usuario] = await usuarioService.findByEmail(email);
			console.log(usuario);

			if (!usuario) {
				res.status(401).json({
					erro: 'Usuário ou senha incorretos',
				});
			}

			if (usuario) {
				const verificaSenha = await bcrypt.compare(senha, usuario.senha)
				if (verificaSenha) {
					res.status(200).json({
					id_usuario: usuario.id_usuario,
					nome: usuario.nome,
					email,
					role: usuario.id_role,
					token: jwtSignUser(usuario)
					})
				} else {
					res.status(401).json({erro: 'Usuário ou senha incorretos'});
				}
			}

		} catch (error) {
			console.log(error);
		}
	},
};
