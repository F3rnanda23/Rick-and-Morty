const { DataTypes } = require('sequelize'); // para darle un tipo de dato al model

module.exports = (sequelize) => { // este sequelize es la nueva instancia qeu creamos en db conecction
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER, // id es entero y autoincrementable
         allowNull: false, 
         primaryKey: true
     },
     name: {
      type: DataTypes.STRING,
      allowNull: false    // deben enviarlo siempre(validacion)
     },
      status:{
         type: DataTypes.ENUM('Alive', 'Dead', 'unknown'),
         allowNull: false,   
      },
      species:{
         type: DataTypes.STRING,
         allowNull: false,   
      },
      gender:{
         type: DataTypes.ENUM('Female', 'Male','Genderless', 'unknown'),
         allowNull: false,   
      },
      origin:{
         type: DataTypes.STRING,
         allowNull: false,   
      },
      image:{
         type: DataTypes.STRING,
         allowNull: false,   
      },
        
   }, 
   { timestamps: false });
};
