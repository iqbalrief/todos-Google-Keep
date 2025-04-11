'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class checklist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      checklist.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });

      // Checklist punya banyak checklist item
      checklist.hasMany(models.checklistItem, {
        foreignKey: 'checklistId',
        as: 'items',
        onDelete: 'CASCADE'
      });
    }
}
checklist.init({
  name: DataTypes.STRING
}, {
  sequelize,
  modelName: 'checklist',
});
return checklist;
};