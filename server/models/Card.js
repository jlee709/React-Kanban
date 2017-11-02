//jshint esversion:6

//*Making changes to DB
module.exports = function(sequelize,DataTypes){
  const Cards = sequelize.define('cards', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    dueDate: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    status: DataTypes.STRING
  });
  
  Cards.associate = function(models){
    Cards.belongsTo(models.users);
  };
  return Cards;
};