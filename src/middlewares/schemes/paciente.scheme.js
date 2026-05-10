// ARCHIVO PARA ESCRIBIR SCHEMES DE PACIENTES

const Joi = require('joi') // importamos Joi para validar los datos de entrada

let crearPaciente = Joi.object({
    dni: Joi.number().required(),
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    email: Joi.string().optional(),
    edad: Joi.number().optional(),
    medicoId:Joi.number().required()

})

module.exports ={
    crearPaciente
}