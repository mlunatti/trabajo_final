//Ruta de Especialidad

const router = require("express").Router()

const especialidadController = require('../controllers/especialidad.controller')

const validate = require('../middlewares/validate')
const especialidadScheme = require('../middlewares/schemes/especialidad.scheme')


router.get('/', especialidadController.listar)
router.post('/', validate(especialidadScheme.crearEspecialidad),especialidadController.crear)
router.get('/:idEspecialidad', especialidadController.listarInfo)

module.exports =router