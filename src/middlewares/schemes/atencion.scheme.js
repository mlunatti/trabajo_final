// ARCHIVO PARA ESCRIBIR SCHEMES DE ATENCION

const Joi = require('joi') // importamos Joi para validar los datos de entrada

let crearAtencion = Joi.object({
    observacionAtencion: Joi.string().required(),
    pacienteMedicoId: Joi.number().integer().required(),
    deTratamientoId: Joi.number().required(),
})

module.exports ={
    crearAtencion
}