'use strict' //Para que no se pueda usar variables no definidas

module.exports = (sequelize,DataTypes)=>{
    let ArchivoUsuario = sequelize.define('archivo_usuario', {//Defino el modelo de la tabla usuario
        id:{
          type:DataTypes.BIGINT, // tipo de dato
          autoIncrement:true, // autoincrementable  
          primaryKey:true, // clave primaria
          allowNull:false // no permite nulo
        },
        nombre:{ // nombre para identificar al archivo por si sube varios
          type: DataTypes.STRING , // tipo de dato
          allowNull: true // puede ser nulo
        },
        file:{ // nombre del archivo
          type:DataTypes.STRING,
          allowNull: true,  
        },
        original_name:{ //nombre real del archivo que se sube
          type: DataTypes.STRING,  
          allowNull: true,            
        },
        createdAt:{ // fecha de creación
          type:DataTypes.DATE, // tipo de dato
          field: 'created_at', //nombre de la columna
          defaultValue: DataTypes.NOW, // valor por defecto
          allowNull: false // no puede ser nulo
        },
        updatedAt:{
          type:DataTypes.DATE, // tipo de dato
          field: 'updated_at', //nombre de la columna
          defaultValue: DataTypes.NOW, // valor por defecto
          allowNull: false // no puede ser nulo
        },
        deletedAt:{
          type:DataTypes.DATE, // tipo de dato
          field: 'deleted_at', //nombre de la columna
       }
    }, {
        paranoid: true, //elimina los registros de forma logica
        freezeTableName: true, // no va a modificar el nombre de la tabla a plural
    })

    ArchivoUsuario.associate = models =>{
        // aca se relaciona las tablas de la base de datos
        ArchivoUsuario.belongsTo(models.usuario) // un archivo pertenece a un usuario
    }

    return ArchivoUsuario
}