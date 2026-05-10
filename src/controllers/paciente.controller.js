const models = require('../database/models/index')
const errors = require('../const/errors')

module.exports  ={

    listar: async (req,res) => {
        try {
            console.log('ejecutando Paciente listar Todos')

            const patients = await models.paciente.findAll(
                    {include:{
                        model:models.paciente_medico,
                        include:[{
                            model: models.medico,
                            include:[{
                            model: models.especialidad
                            }],

                        }],
                    }
            }

            )

            res.json({
                success:true,
                data:{
                    pacientes:patients
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
            console.log('ejecutando Paciente Crear')

            //Creamos transaccion            
            const result = await models.sequelize.transaction(async t => {

                const patient = await models.paciente.create(req.body, { transaction: t },);

                const relacion = await models.paciente_medico.create({
                    pacienteId: patient.id,
                    medicoId: req.body.medicoId
                }, { transaction: t },);

                res.json({
                    success:true,
                    data:{
                        id: patient.id,
                    }
                })

            });
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
            console.log('ejecutando Paciente listarInfo')
            const patient = await models.paciente.findOne({
                where:{
                    id:req.params.idPaciente
                }, 
                include:{
                    model:models.paciente_medico,
                    include:[{
                        model: models.medico,
                        include:[{
                        model: models.especialidad
                        }],

                    }],
                }

            })                        

            if(!patient) return next(errors.PacienteInexistente)

            res.json({
                success:true,
                data:{
                    paciente: patient
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