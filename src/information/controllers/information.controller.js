exports.insert = (req, res) => {
	
	
	InformationModel.createUser().then((result) => {
	res.status(201).send({id: result._id});
	});
};

export default InformationController