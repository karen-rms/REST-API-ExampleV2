const Actor = require("../models/actor.model");

const getActorMoviesLazy = async (req, res) => {
  try {
    const actor = await Actor.findOne({
      where: {
        id: request.params.id, //Buscamos al usuario por ID
      },
    });
    const movies = actor.getMovies();
    return response.status(200).json(actor, movies);
  } catch (error) {
    response.status(501).send(error);
  }
};

const getActorMoviesEager = async (req, res) => {
  try {
    const actor = await Actor.findOne({
      where: {
        id: request.params.id, //Buscamos al usuario por ID
      },
      include: Movie,
    });
    return response.status(200).json(actor, movies);
  } catch (error) {
    response.status(501).send(error);
  }
};

modules.export = {
  getActorMoviesLazy,
  getActorMoviesEager,
};
