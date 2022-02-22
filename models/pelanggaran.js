'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pelanggaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // relasi pelanggaran -> detail_pelanggaran_siswa (parent -> child)
      // key: id_pelanggaran
      // parent: pelanggaran, child: detail_pelanggaran_siswa
      // tipe: 1 pelanggaran tercatat sebanyak beberapa kali di detail_pelanggaran_siswa (one to many)
      this.hasMany(models.detail_pelanggaran_siswa, {
        foreignKey: "id_pelanggaran",
        as: "detail_pelanggaran_siswa"
      })
    }
  }
  pelanggaran.init({
    id_pelanggaran: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nama_pelanggaran: DataTypes.STRING,
    poin: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'pelanggaran',
    tableName: 'pelanggaran'
  });
  return pelanggaran;
};