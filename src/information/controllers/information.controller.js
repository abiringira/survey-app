

const informationModel = require('../models/information.model')


exports.insert = (req, res) => {
	informationModel.createUser(req.body).then((result) => {

		
	res.status(201).send({id: result._id});
	});
};

