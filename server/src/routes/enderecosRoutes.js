const express = require('express');
const enderecosRouter = express.Router();
const EnderecosController = require('../controllers/enderecoController');

enderecosRouter.get('', EnderecosController.getAll);
enderecosRouter.post('', EnderecosController.insert);
enderecosRouter.put('/:id_endereco', EnderecosController.update);

module.exports = enderecosRouter;
