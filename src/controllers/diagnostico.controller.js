const models = require('../database/models/index')
const errors = require('../const/errors')

module.exports  ={

    listar: async (req,res) => {
        try {
            console.log('ejecutando Diagnostico listar Todos')

            const diagnostics = await models.diagnostico.findAll(
                    {include:{
                        model:models.diagnostico_especialidad,
                        include:[{
                            model: models.especialidad,
                        }],
                    }
            }

            )

            res.json({
                success:true,
                data:{
                    diagnosticos:diagnostics
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

                const diagnostic = await models.diagnostico.create(req.body, { transaction: t },);

                const relacion = await models.diagnostico_especialidad.create({
                    diagnosticoId: diagnostic.id,
                    especialidadId: req.body.especialidadId
                }, { transaction: t },);

                res.json({
                    success:true,
                    data:{
                        id: diagnostic.id,
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
            console.log('ejecutando Diagnostico listarInfo')
            const diagnostic = await models.diagnostico.findOne({
                where:{
                    id:req.params.idDiagnostico
                }, 
                include:{
                    model:models.diagnostico_especialidad,
                    include:[{
                        model: models.especialidad
                    }],
                }

            })                        
            
            if(!diagnostic) return next(errors.DiagnosticoInexistente)
            res.json({
                success:true,
                data:{
                    diagnostico: diagnostic
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