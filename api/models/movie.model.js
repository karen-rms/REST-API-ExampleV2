const { DataTypes } = require("sequelize"); //Importamos DataTypes para definir los tipos de datos de nuestras columnas
const { sequelize } = require("../../db/db.js"); //Importamos la instancia de sequelize que creamos en db.js

const Movie = sequelize.define(
  "movie",
  {
    //Definimos el modelo user, que creará la tabla en la base de datos
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER, //Le definimos el tipo de dato que aceptará la columna, en este caso STRING
    },
    director: {
        type: DataTypes.STRING
    },
    duration: {
        type: DataTypes.STRING
    },
    genre:{
        type: DataTypes.STRING
    },
    rate: {
        type: DataTypes.DECIMAL
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(), //Le añadimos un valor por defecto a la columna createdAt para que nos pille la hora de ese momento
    },
  },
  { updatedAt: false } // Le decimos que no nos cree el campo updateAt
);

module.exports = Movie; //Exportamos el modelo User
