const User = require("../models/user.model");

const getAllUsers = async (request, response) => {
  try {
    let users;
    if (request.query && request.query.name) {
      users = await User.findAll({
        where: {
          name: request.query.name,
        },
      });
      return response.status(200).json(users);
    } else {
      users = await User.findAll();
      return response.status(200).json(users);
    }
  } catch (error) {
    return response.status(501).send(error);
  }
};

/* const getAllUsers = async (request, response) => {
  // Función para traer todos los usuarios de la base de datos
  try {
    const users = await User.findAll(); // Método sequelize para extraer a todos los usuarios
    return response.status(200).json(users); // Enviamos el status code y el la respuesta en formato json
  } catch (error) {
    return response.status(501).send(error); // En caso de error, mostramos el código de error y enviamos el mensaje.
  }
}; */

const getUser = async (request, response) => {
  // Función que traerá un único usuario
  try {
    const user = await User.findOne({
      //Usamos findOne para buscar un usuario usando where para buscar al usuario con los parámetros deseados
      where: {
        id: request.params.id, //Buscamos al usuario por ID
      },
    });
    return response.status(200).json(user);
  } catch (error) {
    return response.status(501).send(error);
  }
};

const createUser = async (request, response) => {
  //Creamos una función que utilizaremos para crear a un usuario
  try {
    const user = await User.create(request.body); // Le pasamos por el body la información del usuario al método create de sequelize
    return response.status(200).json(user);
  } catch (error) {
    return response.status(501).send(error);
  }
};

const updateUser = async (request, response) => {
  try {
    const user = await User.update(request.body, {
      //Recibe 2 parámetros, la información que actualiza y el usuario que quieres actualizar, lo buscamos por ID
      where: {
        id: request.params.id,
      },
    });
    return response.status(200).json(user);
  } catch (error) {
    return response.status(501).send(error);
  }
};

const deleteUser = async (request, response) => {
  try {
    await User.destroy({
      where: {
        id: request.params.id, //Le pasamos la id del usuario que queremos borrar
      },
    });
    return response
      .status(200)
      .send(`User with id ${request.params.id} was deleted`); //Devolvemos un mensaje avisando de que el usuario con dicha ID fue borrado con éxito
  } catch (error) {
    return response.status(501).send(error);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
