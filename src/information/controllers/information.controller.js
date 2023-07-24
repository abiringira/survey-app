
exports.insert = (req, res) => {


	
	
	InformationModel.createUser(req.body).then((result) => {
	res.status(201).send({id: result._id});
	});
};

