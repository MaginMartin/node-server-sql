const { Router } = require('express');
const { getMateriasNotas, getAlumnoNotas} = require('../controllers/notas.controller');

const router = Router();

router.get('/materia/:idMateria/notas',getMateriasNotas)

router.get('/alumnos/:idAlumno/notas',getAlumnoNotas )

module.exports= router
