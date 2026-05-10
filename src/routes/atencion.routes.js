//Ruta de Tratamiento

const router = require("express").Router()

const atencionController = require('../controllers/atencion.controller')

const validate = require('../middlewares/validate')
const atencionScheme = require('../middlewares/schemes/atencion.scheme')

router.get('/', atencionController.listar)
router.post('/', validate(atencionScheme.crearAtencion),atencionController.crear)
router.get('/:idAtencion', atencionController.listarInfo)

module.exports =router