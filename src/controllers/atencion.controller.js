const models = require('../database/models/index')
const errors = require('../const/errors')
module.exports  ={

    listar: async (req,res) => {
        try {
            console.log('ejecutando Atención listar Todas')

            const atentions = await models.atencion.findAll(
                {
                    include:[{   model:models.paciente_medico,
                                include:[{
                                                    model: models.medico,
                                                    include:[{
                                                    model: models.especialidad
                                                    }],

                                         },
                                         {
                                                  model: models.paciente,

                                         }
                    
                                ],
                    } ,{
                                        model:models.de_tratamiento,
                                        include:[{
                                            model: models.diagnostico_especialidad,
                                            include:{

                                                    model: models.diagnostico
                                            },


                                        },{

                                                    model: models.tratamiento
                                           
                                        }
                                    
                                    ]



                    }


                ]
         } )

            res.json({
                success:true,
                data:{
                    atenciones:atentions
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
            console.log('ejecutando Atencion Crear')

            //Creamos transaccion            
            const result = await models.sequelize.transaction(async t => {

                const atention = await models.atencion.create(req.body, { transaction: t },);

/*                const relacion = await models.de_tratamiento.create({
                    pacienteMedicoId: patient.id,
                    deTratamientoId: req.body.medicoId
                }, { transaction: t },);
*/
                res.json({
                    success:true,
                    data:{
                        id: atention.id,
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
            const atention = await models.atencion.findOne({
                where:{
                    id:req.params.idAtencion
                }, 
                                    include:[{   model:models.paciente_medico,
                                include:[{
                                                    model: models.medico,
                                                    include:[{
                                                    model: models.especialidad
                                                    }],

                                         },
                                         {
                                                  model: models.paciente,

                                         }
                    
                                ],
                    } ,{
                                        model:models.de_tratamiento,
                                        include:[{
                                            model: models.diagnostico_especialidad,
                                            include:{

                                                    model: models.diagnostico
                                            },


                                        },{

                                                    model: models.tratamiento
                                           
                                        }
                                    
                                    ]



                    }


                ]

            })                        

            if(!atention) return next(errors.AtencionInexistente)

            res.json({
                success:true,
                data:{
                    Atencion: atention
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