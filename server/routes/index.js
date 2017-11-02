const express = require('express');
const Router = express.Router();

Router.use('/user', require('./userRoute'));
Router.use('/card', require('./cardRoute'));


module.exports = Router;