//Ruta de Medico

const router = require("express").Router()

const medicoController = require('../controllers/medico.controller')

const validate = require('../middlewares/validate')
const mecicoScheme = require('../middlewares/schemes/medico.scheme')


router.get('/', medicoController.listar)
router.post('/',validate(mecicoScheme.crearMedico), medicoController.crear)
router.get('/:idMedico', medicoController.listarInfo)

module.exports =router 