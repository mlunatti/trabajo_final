// ARCHIVO PARA ESCRIBIR SCHEMES DE DIAGNOSTICO

const Joi = require('joi') // importamos Joi para validar los datos de entrada

let crearDiagnostico = Joi.object({
    nombreDiagnostico: Joi.string().required(),
    descripcionDiagnostico: Joi.string().required(),
    especialidadId: Joi.number().required()

})

module.exports ={
    crearDiagnostico
}