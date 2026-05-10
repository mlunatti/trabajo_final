'use strict' //Para que no se pueda usar variables no definidas

module.exports = (sequelize,DataTypes)=>{
    let Paciente = sequelize.define('paciente', {//Defino el modelo de la tabla medico
        id:{
          type:DataTypes.BIGINT, // tipo de dato
          autoIncrement:true, // autoincrementable  
          primaryKey:true, // clave primaria
          allowNull:false // no permite nulo
        },
        dni: {
          type: DataTypes.INTEGER,
          allowNull: false,
          unique: true,
        },
        nombre:{ // nombre de la columna
          type: DataTypes.STRING , // tipo de dato
          allowNull: false // no puede ser nulo
        },
        apellido:{
          type:DataTypes.STRING,
          allowNull: false,  
        },
        email:{
          type: DataTypes.STRING,  
        },
        edad:{
          type: DataTypes.INTEGER,  
        },
        profesion:{
          type: DataTypes.STRING,   
          allowNull:true
        },        
        obraSocial: {
          type:DataTypes.STRING,
          allowNull:true
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

    Paciente.associate = models =>{
        // aca se relaciona las tablas de la base de datos
        //HasOne     A.hasOne(B) → cardinalidad (1,1), y la clave foránea está en B
        //BelongsTo  A.belongsTo(B) → cardinalidad (1,1), y la clave foránea está en A
        //HasMany    A.hasMany(B) → cardinalidad (1,N), y la clave foránea está en B

        Paciente.hasMany(models.paciente_medico) // Un Paciente puede tener muchos médicos
    }

    return Paciente
}