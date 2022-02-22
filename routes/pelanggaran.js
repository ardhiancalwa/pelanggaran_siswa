const express = require(`express`)
const app = express()

app.use(express.json())

const pelanggaranController = require("../controllers/pelanggaranController")

app.get("/", pelanggaranController.getPelanggaran)
app.post("/", pelanggaranController.addPelanggaran)
app.put("/:id_pelanggaran", pelanggaranController.updatePelanggaran)
app.delete("/:id_pelanggaran", pelanggaranController.deletePelanggaran)
module.exports = app