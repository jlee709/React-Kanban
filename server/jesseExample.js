//Jesse's example:
// module.exports = function(sequelize,DataTypes){
//   const Tasks = sequelize.define('tasks', {
//     title: DataTypes.STRING,
//     createdBy: DataTypes.STRING,
//     assignedTo: DataTypes.STRING
//   });
//   Tasks.associate = function(models){
//     Tasks.belongsTo(models.users, { foreignKey: 'createdBy', as: 'Creator'});
//     Tasks.belongsTo(models.users, { foreignKey: 'assignedTo', as: 'Dev'});
//   };
//   return Tasks;
// }



//Jesse's example:
// module.exports = function(sequelize,DataTypes){
//   const Users = sequelize.define('users', {
//     username: {type: DataTypes.STRING, unique: true},
//   });
//   Users.associate = function(models){
//     Users.hasMany(models.tasks, { foreignKey: 'createdBy', as: 'Cards'});
//     Users.hasMany(models.tasks, { foreignKey: 'assignedTo', as: 'Tasks'});
//   };
//   return Tasks;
// }

//Jesses example:
/*route.get('/tasks', (req, res)=>{
  return tasks.findAll({
    include: [{ model: users, as: 'Creator' },
    {model: users, as: 'Dev' }]
  }).then((cards)=>{
    return res.json(cards);
  })*/