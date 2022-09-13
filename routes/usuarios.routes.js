const { Router } = require('express');
const {metodoGetUsuario,metodoPostUsuario,metodoPutUsuario,metodoDeleteUsuario} = require('../controllers/usuarios.controller');

const router = Router();

// router.get('/ingresos/:idUsuario')

router.get('/:idUsuario', metodoGetUsuario);
router.post('/newUsuario', metodoPostUsuario);
router.put('/:idUsuario', metodoPutUsuario);
router.delete('/:idUsuario', metodoDeleteUsuario);

module.exports= router
