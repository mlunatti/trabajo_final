// ARCHIVO PARA ESCRIBIR SCHEMES DE Tratamientos

const Joi = require('joi') // importamos Joi para validar los datos de entrada

let crearTratamiento = Joi.object({
    nombreTratamiento: Joi.string().required(),
    descripcionTratamiento: Joi.string().required(),
    IdDiagnosticoEspecialidad: Joi.array().items(
        Joi.number()
        .integer()
        .min(1) // Mínimo valor posible
        .max(10) // Máximo valor posible
    )
    .min(1)
    .required()
})

module.exports ={
    crearTratamiento
}