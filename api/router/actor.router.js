const router = require("express").Router(); //Importamos el objeto router de express

const {
  getAllActors,
  getActor,
  createActor,
  updateActor,
  deleteActor,
} = require("../controllers/movie.controller"); //Nos importamos los controladores

//Definimos las diferentes rutas, con sus parámetros y controladores respectivamente y específicando su método HTTP
router.get("/", getAllActors);
router.get("/:id", getActor);

router.post("/", createActor);
router.put("/:id", updateActor);
router.delete("/:id", deleteActor);

module.exports = router;
