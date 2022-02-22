'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail_pelanggaran_siswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // relasi detail_pelanggaran_siswa -> pelanggaran (child -> parent) 
      // key: "id_pelanggaran"
      // parent: pelanggaran, child: detail_pelanggaran_siswa
      // tipe: 1 detail_pelanggaran mencatat satu data pelanggaran (one to one)

      this.belongsTo(models.pelanggaran, {
        foreignKey: "id_pelanggaran",
        as: "pelanggaran"
      })

      // realsi detail_pelanggaran_siswa -> pelanggaran_siswa
    }
  }
  detail_pelanggaran_siswa.init({
    id_pelanggaran_siswa: DataTypes.INTEGER,
    id_pelanggaran: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'detail_pelanggaran_siswa',
    tableName: 'detail_pelanggaran_siswa'
  });
  return detail_pelanggaran_siswa;
};