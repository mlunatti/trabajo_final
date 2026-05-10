//FUNCIONAMIENTO DE TODAS LAS RUTAS DE USUARIO

const models = require('../database/models/index')
const errors = require('../const/errors')

module.exports ={
    
    listar: async (req,res) => {
        try {
            console.log('ejecutando listar todos los usuarios')
            
            const users = await models.usuario.findAll()

            res.json({
                success:true,
                data:{
                    usuarios:users
                }
            })
        } catch (error) {
            console.log(error)
        }
    },

    crear: async (req,res) => {
        try {
            console.log('ejecutando Crear Usuario')
            const user = await models.usuario.create(req.body)
            // si no coinciden nombres del body con campos de la tabla
            // por cada uno que no coincida Ej:  nombre: req.body.nombre_usuario
            res.json({
                success:true,
                data:{
                    id: user.id
                }
            })
        } catch (error) {
            console.log(error)
        }

    },

    listarInfo: async (req,res, next) => {
        
        try {
            console.log('ejecutando listarInfo')

            const user = await models.usuario.findOne({
                where:{
                    id:req.params.idUsuario
                }
            })

            if(!user) return next(errors.UsuarioInexistente)

            res.json({
                success:true,
                data:{
                    usuario:user
                }    
            })
        } catch (error) {
            console.log(error)
        }

    },

    prueba: async (req,res) =>{
        try {
            console.log('ejecutando prueba')

            res.json({
                message:'Hola Mundos'
            })
        } catch (error) {
            console.log(error)
        }

    },
    subirArchivo: async (req,res,next) =>{
        try {

            const usuario = await models.usuario.findOne({
                wher:{
                        id: req.body.usuarioId
                }

            })
            if (!usuario) return next (errors.UsuarioInexistente)

            const ar = await models.archivo_usuario.findOne({
                where:{
                    usuarioId: req.body.usuarioId,
                    nombre: req.body.nombre
                }
            })

            if (!ar) {

                const archivo = await models.archivo_usuario.create({
                    nombre:req.body.nombre, //nombre para identificar el archivo por si un usuario tiene varios archivos
                    file: req.file ? req.file.filename: null, //en el campo file se guarda el nombre del archivo
                    original_name: req.file ? req.file.originalname: null, //en el campo original_name se guarda el nombre original del archivo
                    usuarioId: req.body.usuarioId
                })
            }

                
            res.json({
                success:true,
                data:{
                    message: "El archivo se cargó correctamente"
                }
            })
        } catch (err) {
            return next(err)
        }

    },
    descargarArchivo: async (req,res,next) =>{
        try {
            // Verifico si el usuario existe    
            const user = await models.usuario.findOne({
                where:{
                    id:req.body.usuarioId
                }
            })

            if(!user) return next(errors.UsuarioInexistente)

            
            //Verifico si el archivo existe
            const archivo = await models.archivo_usuario.findOne({
                where:{
                    usuarioId: req.body.usuarioId,
                    nombre: req.body.nombre
                }
            })


            if (!archivo) return next(errors.ArchivoInexistente)

            res.download('uploads/archivos-usuarios/' + archivo.file,archivo.original_name)// descarga el archivo

        } catch (err) {
            return next(err)
        }

    }    
}