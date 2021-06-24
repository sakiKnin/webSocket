const express = require('express')
const router = express.Router();

const mongodb = require("mongodb");

const dbConnectionUrl = "mongodb+srv://boris123:alkaloid123@cluster0-1q0yi.mongodb.net/test?retryWrites=true&w=majority";

router.post('/', async (req, res) => {

		//register User
		await loadUser(function(dbCollection){
		 	dbCollection.insertOne({
				username: req.body.text[0],
				email: req.body.text[1],
		        	password: req.body.text[2],
			 	});
			});
		res.status(201).send();
	});

router.put('/', async (req, res) => {
	 
		// find User
		await loadUser(function(dbCollection){
		 	dbCollection.findOne({email:req.body.text}, function(err, result){
				 if(!result)
					res.send(false);
				 else
					res.send(true);			
			});
		});
	 });

async function loadUser(
    successCallback){
	mongodb.MongoClient.connect(dbConnectionUrl,function(err, dbInstance){
			const dbObject = dbInstance.db('test');
        		const dbCollection = dbObject.collection('users');
            		console.log("[MongoDB connection] SUCCESS");
			successCallback(dbCollection);
	});

}

module.exports = router;
