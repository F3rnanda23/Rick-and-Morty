const { DataTypes } = require('sequelize');

//sequelize es la instancia que recibe
module.exports = (sequelize) => {
   // a partir de esa instancia definimos el modelo
   sequelize.define('User', {
      //atributos
      id: {
         type: DataTypes.INTEGER, // id es entero y autoincrementable  // este es un tipo de dato
         autoIncrement: true,//constrainst
         primaryKey: true, //constrainst
         allowNull: false
     },
      email:{
         type: DataTypes.STRING,
         allowNull: false,
         isEmail: true  // no puede esta repetido        
     },
      password:{
         type: DataTypes.STRING,
         allowNull: false,     
      }
   }, 
   { timestamps: false }// prop para eliminar los campos por default(create y update)
   );
};
