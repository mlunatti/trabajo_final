const errors = require('../const/errors')
module.exports = function(err,req,res,next){

    let response = {
        success:false,
        error:{
            code: err.code || 500, //si no hay un codigo de error, se asigna 500
            message: err.message ||'Internal server error' // si no hay un mensaje de error, se asigna 'INternal server error'
        }
    }

    if (err.isJoi){
        let validationErrorType = err.details[0].type
        let errorkey='validationError'

        if (validationErrorType === 'any.required'){
            errorkey ='FaltanCampos'
        }

        response.error.code = errors[errorkey].code
        response.error.message = errors[errorkey].message

    }

  
  //Si el error es NotFound
  if(err.message === 'Not Found'){
        response.error.code = 404
        response.error.message = 'Not Found'  
  }

   res.status(200).json(response)
}