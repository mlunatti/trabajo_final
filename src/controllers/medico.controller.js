const models = require('../database/models/index')
const errors = require('../const/errors')

module.exports ={

    listar: async (req,res) => {
        try {
            console.log('ejecutando Medico listar Todos')

            const doctors = await models.medico.findAll({
                 include:[{
                            model: models.especialidad,
                        },{
                            model:models.paciente_medico,
                            include:[{
                                model: models.paciente
                            }]
                        }]
            })

            res.json({
                success:true,
                data:{
                    Medicos:doctors
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
        }
    },

    crear: async (req,res) => {
        try {
            console.log('ejecutando Medico Crear')

            const doctor = await models.medico.create(req.body)

            res.json({
                success:true,
                data:{
                    id: doctor.id
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
        }
    },

    listarInfo: async (req,res,next) => {
        try {
            console.log('ejecutando Medico listarInfo')

            const doctor = await models.medico.findOne({
                where:{
                    id:req.params.idMedico
                },                   
                 include:[{
                            model: models.especialidad,
                        },{
                            model:models.paciente_medico,
                            include:[{
                                model: models.paciente
                            }]
                        }
                    ],    
                
            })            

            if(!doctor) return next(errors.DoctorInexistente)

            res.json({
                success:true,
                data:{
                    medico: doctor
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
        }
    },

}