const { body } = require(`express-validator`)

exports.validate = [
    // validasi password
    body(`password`)
    .isLength({ min: 8})
    .withMessage(`Password at least 8 characters`)
    .notEmpty()
    .withMessage(`Password must be filled`),

    // validasi username
    body(`username`).notEmpty()
    .withMessage(`Username must be filled`),

    // validasi nama_user
    body(`nama_user`).notEmpty()
    .withMessage(`Name of user must be filled`)
]