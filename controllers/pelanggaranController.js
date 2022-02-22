let modelPelanggaran = require("../models/index").pelanggaran

exports.getPelanggaran = async (request, response) => {
    let dataPelanggaran = await modelPelanggaran.findAll()
    return response.json(dataPelanggaran)
}

exports.addPelanggaran = (request, response) => {
    let dataPelanggaran = {
        nama_pelanggaran: request.body.nama_pelanggaran,
        poin: request.body.poin
    }

    modelPelanggaran.create(dataPelanggaran)
        .then(result => {
            return response.json({
                message: `Data pelanggaran berhasil ditambahkan`
            })
        })
        .catch(error => {
            return response.json({
                message: error.message
            })
        })
}

exports.updatePelanggaran = (request, response) => {
    let params = {
        id_pelanggaran: request.params.id_pelanggaran
    }

    let dataPelanggaran = {
        nama_pelanggaran: request.body.nama_pelanggaran,
        poin: request.body.poin,
    }

    modelPelanggaran.update(dataPelanggaran, {where: params})
        .then(result => {
            return response.json({
                message: `Data pelanggaran berhasil diubah`
            })
        })
        .catch(error => {
            return response.json({
                message: error.message
            })
        })
}

exports.deletePelanggaran = (request, response) => {
    let params = {
        id_pelanggaran: request.params.id_pelanggaran
    }

    modelPelanggaran.destroy({where: params})
        .then(result => {
            return response.json({
                message: `Data Pelanggaran berhasil dihapus`
            })
        })
        .catch(error => {
            return response.json({
                message: error.message
            })
        })
}