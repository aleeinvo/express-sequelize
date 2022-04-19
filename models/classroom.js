'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Classroom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Classroom.hasMany(models.Student, {
        foreignKey: 'classroom_id',
        as: 'students'
      })
    }
  }
  Classroom.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        isAlee(value) {
          if(value.length < 8) {
            throw new Error('Name should longer than 5');
          }
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Classroom',
    validate: {
      shouldBeClass(){
        if(!this.name.endsWith('class')) {
          throw new Error('it should be class');
        }
      }
    },
    hooks: {
      beforeCreate(classroom, options) {
        classroom.name = 'This name is being set in the hook';
      }
    }
  });
  return Classroom;
};