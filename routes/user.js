const express = require(`express`)
const app = express()

app.use(express.json())

const userController = require("../controllers/userController")

app.get("/", userController.getUser)
app.post("/", userController.addUser)
app.put("/:id_user", userController.updateUser)
app.delete("/:id_user", userController.deleteUser)
module.exports = app