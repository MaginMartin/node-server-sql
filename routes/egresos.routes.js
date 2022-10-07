const { Router } = require('express');
const {metodoGetEgreso,metodoPostEgreso,metodoPutEgreso,metodoDeleteEgreso} = require('../controllers/egresos.controller');

const router = Router();

// router.get('/ingresos/:idUsuario')

router.get('/:idUsuario', metodoGetEgreso);
router.post('/:idUsuario', metodoPostEgreso);
router.put('/', metodoPutEgreso);
router.put('/', metodoDeleteEgreso);

module.exports= router
