//FUNCIONAMIENTO DE TODAS LAS RUTAS DE TRATAMIENTO
const models = require('../database/models/index')
const errors = require('../const/errors')

module.exports ={

    listar: async (req,res) => {
        try {
            console.log('ejecutando Tratamiento listar todos')

            const treatments = await models.tratamiento.findAll(
                    {                include:{
                        model:models.de_tratamiento,
                        include:[{
                            model: models.diagnostico_especialidad,
                            include:[{

                                    model: models.especialidad
                            },{

                                    model: models.diagnostico
                            }],


                        }],
                    
                } ,

            })

            res.json({
                success:true,
                data:{
                    tratamientos:treatments
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
            console.log('ejecutando Tratamiento Crear')

            //Creamos transaccion            
            const result = await models.sequelize.transaction(async t => {

                const treatment = await models.tratamiento.create(req.body, { transaction: t },);
                
                await Promise.all(
                    req.body.IdDiagnosticoEspecialidad.map(element =>
                        models.de_tratamiento.create({
                            tratamientoId: treatment.id,
                            diagnosticoEspecialidadId: element
                        }, { transaction: t })
                    )
                );

                res.json({
                    success:true,
                    data:{
                        id: treatment.id,
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
            console.log('ejecutando Tratamiento listarInfo')
            const treatment = await models.tratamiento.findOne({
                where:{
                    id:req.params.idTratamiento
                },

                include:{
                        model:models.de_tratamiento,
                        include:[{
                            model: models.diagnostico_especialidad,
                            include:[{

                                    model: models.especialidad
                            },{

                                    model: models.diagnostico
                            }],


                        }],
                    
                } ,


            })

            if(!treatment) return next(errors.TratamientoInexistente)

            res.json({
                success:true,
                data:{
                    tratamiento:treatment
                }    
            })
    }catch (error) {
            console.log(error)
        }
    },

}