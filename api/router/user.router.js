const router = require("express").Router() //Importamos el objeto router de express

const {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/user.controller") //Nos importamos los controladores


//Definimos las diferentes rutas, con sus parámetros y controladores respectivamente y específicando su método HTTP
router.get("/", getAllUsers)
router.get("/:id", getUser)

router.post("/", createUser)
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router