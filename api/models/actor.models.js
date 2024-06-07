const { DataTypes } = require("sequelize"); //Importamos DataTypes para definir los tipos de datos de nuestras columnas
const { sequelize } = require("../../db/db.js"); //Importamos la instancia de sequelize que creamos en db.js

const Actor = sequelize.define(
  "actor",
  {
    //Definimos el modelo user, que creará la tabla en la base de datos
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(), //Le añadimos un valor por defecto a la columna createdAt para que nos pille la hora de ese momento
    },
  },
  { updatedAt: false } // Le decimos que no nos cree el campo updateAt
);

module.exports = Actor; //Exportamos el modelo User
