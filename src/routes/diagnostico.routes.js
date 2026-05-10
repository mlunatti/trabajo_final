//Ruta de Tratamiento

const router = require("express").Router()

const diagnosticotoController = require('../controllers/diagnostico.controller')

const validate = require('../middlewares/validate')
const diagnosticoScheme = require('../middlewares/schemes/diagnostico.scheme')


router.get('/', diagnosticotoController.listar)
router.post('/',validate(diagnosticoScheme.crearDiagnostico), diagnosticotoController.crear)
router.get('/:idDiagnostico', diagnosticotoController.listarInfo)

module.exports =router