const express = require('express');
const servicosAdicionaisRoutes = express.Router();
const ServicosAdicionaisController = require('../controllers/servicoAdicionalController');

servicosAdicionaisRoutes.get('', ServicosAdicionaisController.getAll);
servicosAdicionaisRoutes.get('/:id', ServicosAdicionaisController.getById);
servicosAdicionaisRoutes.post('', ServicosAdicionaisController.insert);
servicosAdicionaisRoutes.put(
	'/:id_servico_adicional',
	ServicosAdicionaisController.update
);

module.exports = servicosAdicionaisRoutes;
