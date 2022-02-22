let modelUser = require("../models/index").user
let md5 = require(`md5`)

exports.getUser = async (request, response) => {
    let dataUser = await modelUser.findAll()
    return response.json(dataUser)
}

exports.addUser = (request, response) => {
    let dataUser = {
        nama_user: request.body.nama_user,
        username: request.body.username,
        password: md5(request.body.password)
    }

    modelUser.create(dataUser)
    .then(result => {
        return response.json({
            message: `Data user berhasil ditambahkan`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.updateUser = (request, response) => {
    let params = {
        id_user: request.params.id_user
    }

    let dataUser = {
        nama_user: request.body.nama_user,
        username: request.body.username,
        password: md5(request.body.password)
    }

    modelUser.update(dataUser, {where: params})
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

exports.deleteUser = (request, response) => {
    let params = {
        id_user: request.params.id_user
    }

    modelUser.destroy({where: params})
        .then(result => {
            return response.json({
                message: `Data user berhasil dihapus`
            })
        })
        .catch(error => {
            return response.json({
                message: error.message
            })
        })
}