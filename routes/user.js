const express = require(`express`)
const app = express()

app.use(express.json())

// call user controller
let userController = require("../controllers/userController")

// endpoint get data user
app.get("/", userController.getDataUser)

// endpoint add data user
app.post("/", userController.addDataUser)

// endpoint edit user
app.put("/:id_user", userController.editDataUser)

// endpoint delete user
app.delete("/:id_user", userController.deleteDataUser)

module.exports = app