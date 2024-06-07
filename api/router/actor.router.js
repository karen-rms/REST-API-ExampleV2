const router = require("express").Router(); //Importamos el objeto router de express

const {
  getActorMoviesLazy,
  getActorMoviesEager,
}; = require("../controllers/movie.controller"); //Nos importamos los controladores

//Definimos las diferentes rutas, con sus parámetros y controladores respectivamente y específicando su método HTTP
router.get("/:id/movies/eager", getActorMoviesLazy);
router.get("/:id/movies/lazy", getActorMoviesEager);

module.exports = router;
