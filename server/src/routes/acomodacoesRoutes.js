const express = require('express');
const acomodacoesRoutes = express.Router();
const upload = require('../middlewares/uploadImagem');
const AcomodacoesController = require('../controllers/acomodacoesController');

acomodacoesRoutes.get('', AcomodacoesController.getAll);
acomodacoesRoutes.post(
	'',
	upload.single('imagem'),
	AcomodacoesController.insert
);
acomodacoesRoutes.put(
	'/:id',
	upload.single('imagem'),
	AcomodacoesController.update
);

module.exports = acomodacoesRoutes;
