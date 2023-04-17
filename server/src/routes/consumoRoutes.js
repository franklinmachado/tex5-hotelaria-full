const express = require('express');
const consumoRoutes = express.Router();
const ConsumoController = require('../controllers/consumoController');

consumoRoutes.get('', ConsumoController.getAll);
consumoRoutes.post('', ConsumoController.insert);
consumoRoutes.put('/:id_consumo', ConsumoController.update);

module.exports = consumoRoutes;
