const { Sequelize } = require("sequelize"); //Importamos sequelize

const sequelize = new Sequelize("restAPIdb", "alma", "reboot", {
  host: "localhost", //Host donde se conexta la base de datos
  dialect: "mysql", //Lenguaje que usa nuestra base de datos
  port: 3306, // El puerto de la base de datos
  logging: false,
}); //Definimos la conexión a la base de datos pasando el nombre de la DB, nuestro usario y contraseña...

const checkConnection = async () => {
  // Función que se encargará de la conexión a la base de adtos
  try {
    await sequelize.authenticate(); //Método de sequelize para conectarse a la base de datos.
    console.log("funca");
  } catch (error) {
    console.log(error);
  }
};

const syncModels = async () => {
  //Función que se encargará de manejar la creación y actualización de datos en las tablas
  try {
    await sequelize.sync(); //Usamos el método de sequelize sync() para actualizar las tablas
  } catch (error) {
    console.log(error);
  }
};

module.exports = { checkConnection, syncModels, sequelize };
