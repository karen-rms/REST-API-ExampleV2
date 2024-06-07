const User = require("../api/models/user.model"); //Nos importamos el modelo de User
const Movie = require("../api/models/movie.model");
const Actor = require("../api/models/actor.model");

const addRelationsToModels = () => {
  //Relacionar las relaciones de tablas a los modelos existentes
  try {
    Actor.belongsToMany(Movie, {
      // Relación many to many / Muchos actores a muchas pelis
      trough: "actor_movies",
      timestamps: false, // Para no crear los campos de update add y create add
    });
    Movie.belongsToMany(Actor, {
      // Relación many to many / Muchos actores a muchas pelis
      trough: "actor_movies",
      timestamps: false, // Para no crear los campos de update add y create add
    });
    console.log("Relations added to all models");
  } catch (error) {
    console.log("error");
  }
};

module.exports = addRelationsToModels;
