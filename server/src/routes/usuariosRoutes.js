const db = require('../db');
const express = require('express');
const usuariosRoutes = express.Router();
const UsuariosController = require('../controllers/usuariosController');
const validacaoUsuario = require('../middlewares/users')

usuariosRoutes.get('', UsuariosController.getAll);


usuariosRoutes.post('',  validacaoUsuario.validateRegister, UsuariosController.insert);


usuariosRoutes.put('/:id_usuario', UsuariosController.update);

module.exports = usuariosRoutes;
