

const app = require('express').Router();
const informationController = require('./controllers/information.controller')


app.post('/information', [
	informationController.insert
           ]);

module.exports = app;           


