const Actor = require("../models/movie.model");

const getAllActors = async (request, response) => {
  // Función para traer todos los usuarios de la base de datos
  try {
    const actors = await Actor.findAll(); // Método sequelize para extraer a todos los usuarios
    return response.status(200).json(actors); // Enviamos el status code y el la respuesta en formato json
  } catch (error) {
    return response.status(501).send(error); // En caso de error, mostramos el código de error y enviamos el mensaje.
  }
};

const getActor = async (request, response) => {
  // Función que traerá un único usuario
  try {
    const actor = await Actor.findOne({
      //Usamos findOne para buscar un usuario usando where para buscar al usuario con los parámetros deseados
      where: {
        id: request.params.id, //Buscamos al usuario por ID
      },
    });
    return response.status(200).json(actor);
  } catch (error) {
    return response.status(501).send(error);
  }
};

const createActor = async (request, response) => {
  //Creamos una función que utilizaremos para crear a un usuario
  try {
    const actor = await Actor.create(request.body); // Le pasamos por el body la información del usuario al método create de sequelize
    return response.status(200).json(actor);
  } catch (error) {
    return response.status(501).send(error);
  }
};

const updateActor = async (request, response) => {
  try {
    const actor = await Actor.update(request.body, {
      //Recibe 2 parámetros, la información que actualiza y el usuario que quieres actualizar, lo buscamos por ID
      where: {
        id: request.params.id,
      },
    });
    return response.status(200).json(actor);
  } catch (error) {
    return response.status(501).send(error);
  }
};

const deleteActor = async (request, response) => {
  try {
    await Actor.destroy({
      where: {
        id: request.params.id, //Le pasamos la id del usuario que queremos borrar
      },
    });
    return response
      .status(200)
      .send(`Actor with id ${request.params.id} was deleted`); //Devolvemos un mensaje avisando de que el usuario con dicha ID fue borrado con éxito
  } catch (error) {
    return response.status(501).send(error);
  }
};

module.exports = {
  getAllActors,
  getActor,
  createActor,
  updateActor,
  deleteActor,
};
