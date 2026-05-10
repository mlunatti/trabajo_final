//Rutas para autenticar 

const router = require("express").Router() //importar express.Router()
const authController = require('../controllers/auth.controller') //Importar el archivo de controladores de auth
const validate = require('../middlewares/validate') // Importar el middleware de validacion de datos
const authScheme = require('../middlewares/schemes/auth.scheme') //Importar el Scheme de auth  de validacion de datos


router.post('/login', validate(authScheme.login), authController.login) //Ruta para loguearse
router.post('/registrarse/', authController.registrarse) // Ruta para registrarse

module.exports =router