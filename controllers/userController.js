const md5 = require("md5")
const { response } = require("express")

// memamggil file model untuk User
let modelUser = require("../models/index").User

exports.getDataUser = (request, response) => {
    modelUser.findAll()
        .then(result => {
            return response.json(result)
        })
        .catch(error => {
            return response.json({
                message: error.message
            })
        })
}

exports.addDataUser = (request, response) => {
    // tampung data request
    let newUser  ={
        nama_user: request.body.nama_user,
        username: request.body.username,
        password: md5(request.body.password)
    }

    modelUser.create(newUser)
        .then(result => {
            return response.json({
                message: `Data user berhasil ditambahkan `
            })
        })
        .catch(error => {
            return response.json({
                message: error.message
            })
        })
}

exports.editDataUser = (request, response) => {
    let id = request.params.id_User
    let dataUser = {
        nama_user: request.body.nama_user,
        username: request.body.username,
        password: md5(request.body.password)
    }
    modelUser.update(dataUser, {where: {id_User: id}})
    .then(result => {
        return response.json({
            message: `Data user berhasil diubah`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.deleteDataUser = (request, response) => {
    let id = request.params.id_User

    modelUser.destroy({where: {id_User: id}})
        .then(result => {
            return response.json({
                message: `Data User berhasil dihapus`
            })
        })
        .catch(error => {
            return response.json({
                message: error.message
            })
        })
}
