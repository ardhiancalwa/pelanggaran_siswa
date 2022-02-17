const express = require(`express`)
const app = express()

app.use(express.json())

// call pelanggaran controller
let pelanggaranController = require("../controllers/pelanggaranController")

// endpoint get data pelanggaran
app.get("/", pelanggaranController.getDataPelanggaran)

// endpoint add data pelanggaran
app.post("/", pelanggaranController.addDataPelanggaran)

// endpoint edit pelanggaran
app.put("/:id_pelanggaran", pelanggaranController.editDataPelanggaran)

// endpoint delete pelanggaran
app.delete("/:id_pelanggaran", pelanggaranController.deleteDataPelanggaran)

module.exports = app