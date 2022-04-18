'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lecturer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Lecturer.hasOne(models.Course, {
        foreignKey: 'lecrurer_id',
        as: 'cource'
      })
    }
  }
  Lecturer.init({
    classroom_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Lecturer',
  });
  return Lecturer;
};