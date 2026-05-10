const Joi = require('joi') // importamos Joi para validar los datos de entrada

let login = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

module.exports ={
    login
}