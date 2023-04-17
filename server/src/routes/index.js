const express = require('express');
const router = express.Router();

const acomodacoesRoutes = require('./acomodacoesRoutes');
const enderecosRoutes = require('./enderecosRoutes');
const authRoutes = require('./authRoutes');
const usuariosRoutes = require('./usuariosRoutes');
const usuariosListaRoutes = require('./usuariosListaRoutes')
const reservasRoutes = require('./reservasRoutes');
const consumoRoutes = require('./consumoRoutes');
const servicosAdicionaisRoutes = require('./servicosAdicionaisRoutes');

router.use('/acomodacoes', acomodacoesRoutes);
router.use('/enderecos', enderecosRoutes);
router.use('/auth', authRoutes);
router.use('/usuarios', usuariosRoutes);
router.use('/usuariosLista', usuariosListaRoutes);
router.use('/reservas', reservasRoutes);
router.use('/consumo', consumoRoutes);
router.use('/servicosAdicionais', servicosAdicionaisRoutes);

module.exports = router;
