const { Router } = require('express');
const {metodoGetIngreso,metodoPostIngreso,metodoPutIngreso,metodoDeleteIngreso} = require('../controllers/ingresos.controller');

const router = Router();

// router.get('/ingresos/:idUsuario')

router.get('/:idUsuario', metodoGetIngreso);
router.post('/:idUsuario', metodoPostIngreso);
router.put('/', metodoPutIngreso);
router.put('/', metodoDeleteIngreso);

module.exports= router
