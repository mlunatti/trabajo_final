//Encargado de conectar las rutas

const { Router } = require('express')

const usuarioRoutes = require('./usuario.routes')
const authRoutes   = require('./auth.routes')
const decodeJWT = require('../middlewares/decodeJWT')

const pacienteRoutes = require('./paciente.routes')
const medicoRoutes = require('./medico.routes')
const tratamientoRoutes = require('./tratamiento.routes')
const especialidadRoutes = require('./especialidad.routes')
const atencionRoutes = require('./atencion.routes')
const diagnosticoRoutes = require('./diagnostico.routes')



 const rutas_init = () =>{
        const router = Router()

        router.use("/usuario",decodeJWT, usuarioRoutes)
        router.use("/paciente",decodeJWT, pacienteRoutes)
        router.use("/medico",decodeJWT, medicoRoutes)
        router.use("/tratamiento",decodeJWT, tratamientoRoutes)
        router.use("/especialidad",decodeJWT, especialidadRoutes)
        router.use("/atencion",decodeJWT, atencionRoutes)
        router.use("/diagnostico",decodeJWT, diagnosticoRoutes)

        return router
 }

 const rutas_auth = () =>{
       const router = Router()

       router.use("/auth", authRoutes)

       return router
 }

 module.exports={ rutas_init, rutas_auth}
    