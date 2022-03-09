const express = require(`express`)
const app = express()

app.use(express.json())

const userController = require("../controllers/userController")

const userValidator = require("../middlewares/userValidator")
const authorization = require("../middlewares/authorization")

app.get("/", [authorization.authorization], userController.getUser)

app.post("/find",[authorization.authorization], userController.findUser)

app.post("/", [
    authorization.authorization, userValidator.validate
], userController.addUser)

app.put("/:id_user", [
    authorization.authorization, userValidator.validate
], userController.updateUser)

app.delete("/:id_user", [authorization.authorization], userController.deleteUser)
app.post("/auth", userController.authentication)
module.exports = app