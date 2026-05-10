//Ruta de Tratamiento

const router = require("express").Router()

const tratamientoController = require('../controllers/tratamiento.controller')

const validate = require('../middlewares/validate')
const tratamientoScheme = require('../middlewares/schemes/tratamiento.scheme')


router.get('/', tratamientoController.listar)
router.post('/',validate(tratamientoScheme.crearTratamiento), tratamientoController.crear)
router.get('/:idTratamiento', tratamientoController.listarInfo)

module.exports =router