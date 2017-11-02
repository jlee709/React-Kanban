//jshint esversion:6

module.exports = function(sequelize,DataTypes){
  const Cards = sequelize.define('cards', {
    title: DataTypes.STRING
  });
  
  Cards.associate = function(models){
    Cards.belongsTo(models.users);
  };
  return Cards;
};