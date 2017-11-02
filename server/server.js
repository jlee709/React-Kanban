const express = require('express');
const path = require('path');
const routes = require('./routes');
// const routes = require('./routes');

//authentication - uncomment when doing Auth ***
// const passport = require('passport');
// const session = require('express-session');
// const redis = require('connect-redis')(session);

const bodyParser = require('body-parser');

//db and models
const db = require('./models');
// ADD MODELS HERE 
const Card = db.card;
const User = db.user;
// ***
const methodOverride = require('method-override');
const sequelize = require('sequelize');
const PORT = process.env.PORT || 8080;

// express initiated
const app = express();
//app USES
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
// app.use(session({
//   store: new redis(),
//   secret: "keyboard cat",
//   resave: false,
//   saveInitialized: false
// }));

app.use('/api', routes);

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '/public') });
});

const server = app.listen(PORT, () => {
  db.sequelize.sync({force: false});
  console.log(`Server is Listening on port: ${PORT}`);
});

module.exports = server;




