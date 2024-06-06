const { DataTypes } = require("sequelize") //Importamos DataTypes para definir los tipos de datos de nuestras columnas
const { sequelize } = require("../../db/db.js") //Importamos la instancia de sequelize que creamos en db.js

const User = sequelize.define('user', { //Definimos el modelo user, que creará la tabla en la base de datos
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING //Le definimos el tipo de dato que aceptará la columna, en este caso STRING
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date() //Le añadimos un valor por defecto a la columna createdAt para que nos pille la hora de ese momento
    }
},
{updatedAt: false} // Le decimos que no nos cree el campo updateAt
)

module.exports = User //Exportamos el modelo User