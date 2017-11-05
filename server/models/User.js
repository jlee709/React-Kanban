module.exports = function(sequelize,DataTypes){
  const Users = sequelize.define('users', {
    username: {type: DataTypes.STRING, unique: true},
    password: DataTypes.STRING
  });
  
  Users.associate = function(models){
    Users.hasMany(models.cards);
  
  };
  return Users;
};
