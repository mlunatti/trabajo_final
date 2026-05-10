const models = require('../database/models/index')
const errors = require('../const/errors')

module.exports ={

    listar: async (req,res) => {
        try {
            console.log('ejecutando Especialidad listar Todos')

            const specialtys = await models.especialidad.findAll()

            res.json({
                success:true,
                data:{
                    especialidades:specialtys
                }
            })
        } catch (error) {
            console.log(error)
        }
    },

    crear: async (req,res) => {
        try {
            console.log('ejecutando Especialidad Crear')

            const specialty = await models.especialidad.create(req.body)

            res.json({
                success:true,
                data:{
                    id: specialty.id
                }
            })
        } catch (error) {
            console.log(error)
            res.json({
                success:false,
                data:{
                    id: -1  ,
                    message: error.parent.detail,  
                    }
            })
            return next(error)            
        }
    },

    listarInfo: async (req,res,next) => {
        try {
            console.log('ejecutando Especialidad listarInfo')

            const specialty = await models.especialidad.findOne({
                where:{
                    id:req.params.idEspecialidad
                }
            })                        
            
            if(!specialty) return next(errors.ExpecialidadInexistente)
            
                res.json({
                success:true,
                data:{
                    especialidad: specialty
                }
            })
        } catch (error) {
            console.log(error)
            res.json({
                success:false,
                data:{
                    id: -1  ,
                    message: error.parent.detail,  
                    }
            })
            return next(error)            
        }
    },

}