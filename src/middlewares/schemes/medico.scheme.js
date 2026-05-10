// ARCHIVO PARA ESCRIBIR SCHEMES DE MEDICOS

const Joi = require('joi') // importamos Joi para validar los datos de entrada

let crearMedico = Joi.object({
    dni: Joi.number().required(),
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    email: Joi.string().optional(),
    edad: Joi.number().optional(),
    especialidadId: Joi.number().required
})

module.exports ={
    crearMedico
}