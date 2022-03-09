const express = require(`express`)
const app = express()

app.use(express.json())

let pelanggaranSiswaController = require(`../controllers/pelanggaranSiswaController`)
let authorization = require("../middlewares/authorization")

app.get("/", [authorization.authorization], pelanggaranSiswaController.getData)
app.get("/:id_siswa", [authorization.authorization], pelanggaranSiswaController.eachSiswa)
app.post("/find", [authorization.authorization], pelanggaranSiswaController.filterPelanggaran)
app.post("/", [authorization.authorization],  pelanggaranSiswaController.addData)
app.put("/:id_pelanggaran_siswa", [authorization.authorization], pelanggaranSiswaController.updateData)
app.delete("/:id_pelanggaran_siswa", [authorization.authorization], pelanggaranSiswaController.deleteData)

module.exports = app