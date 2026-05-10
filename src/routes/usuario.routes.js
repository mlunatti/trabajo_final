//Ruta de Usuarios

const router = require("express").Router() //importar express.Router()
const usuarioController = require('../controllers/usuario.controller') //Importar el archivo de controladores de usuarios    
const validate = require('../middlewares/validate') // Importar el middleware de validacion de datos
const usuarioScheme = require('../middlewares/schemes/usuario.scheme') //Importar el Scheme de usuario  de validacion de datos
const { required } = require("joi")

const globalConstants = require('../const/globalconstants')
var multer = require('multer')

var upload = multer({
    
    dest: 'uploads/archivos-usuarios/',
    limits:{ fileSize: globalConstants.MAX_FILE_SIZE}
     
})

router.post('/subirArchivo', upload.single('jpg'), usuarioController.subirArchivo) //Ruta para subir un archivo
router.post('/descargarArchivo/', usuarioController.descargarArchivo) // Ruta para obtener un archivo

router.get('/prueba', usuarioController.prueba)
router.get('/', usuarioController.listar)
router.post('/', validate(usuarioScheme.crearUsuario), usuarioController.crear)
router.get('/:idUsuario', usuarioController.listarInfo)

module.exports =router