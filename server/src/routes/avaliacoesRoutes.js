const express = require('express');
const avaliacoesRouter = express.Router();
const AvaliacoesService = require('../controllers/avaliacoesController');

avaliacoesRouter.get('', AvaliacoesService.getAll);
avaliacoesRouter.post('', AvaliacoesService.insert);
avaliacoesRouter.put('/:id_avaliacao', AvaliacoesService.update);

module.exports = avaliacoesRouter;
