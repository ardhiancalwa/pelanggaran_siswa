const express = require(`express`)
const app = express()
const authorization = require("../middlewares/authorization")

app.use(express.json())

const pelanggaranController = require("../controllers/pelanggaranController")

app.get("/", [authorization.authorization], pelanggaranController.getPelanggaran)
app.post("/find", [authorization.authorization], pelanggaranController.findPelanggaran)
app.post("/", [authorization.authorization], pelanggaranController.addPelanggaran)
app.put("/:id_pelanggaran", [authorization.authorization], pelanggaranController.updatePelanggaran)
app.delete("/:id_pelanggaran", [authorization.authorization],pelanggaranController.deletePelanggaran)
module.exports = app