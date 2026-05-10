//FUNCIONAMIENTO DE TODAS LAS RUTAS DE AUTENTICACION

const models = require('../database/models/index')


const bcrypt = require('bcryptjs')// importo dependencia para encriptar contraseñas
const errors = require('../const/errors')
const signJWT = require('../middlewares/singJWT')
module.exports ={
    
    login: async (req,res,next) => {
        try {
                // 1. verifico que el usuario exista solo comparando con el email
                const user = await models.usuario.findOne({
                    where:{
                        email : req.body.email
                    }
                })
                var contraseniaCoincide =false
                if(user) { // el email existe
                    contraseniaCoincide = bcrypt.compareSync(req.body.password, user.password)
                }
                if(!user || !contraseniaCoincide){
                    return next(errors.CredencialesInvalidas)
                }

                res.json({
                    success: true,
                    data: {
                        token: signJWT(user),
                        id: user.id,
                    }

                })


        } catch (err) {
            return next(err)
        }
    },

    registrarse: async (req,res,next) => {
            try {

                req.body.password = bcrypt.hashSync(req.body.password,10)
                const user = await models.usuario.create(req.body)

                res.json({
                    success:true,
                    data:{
                        id: user.id
                    }
                })
            } catch (err) {
                return next(err)
            }
    
    }
    


}