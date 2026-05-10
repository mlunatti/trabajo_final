// ARCHIVO PARA ESCRIBIR SCHEMES DE ESPECIALIDADES

const Joi = require('joi') // importamos Joi para validar los datos de entrada

let crearEspecialidad = Joi.object({
    nombreEspecialidad: Joi.string().required()
})

module.exports ={
    crearEspecialidad
}