const express = require('express')
const router = express.Router();

const mongodb = require("mongodb");

const dbConnectionUrl = "mongodb+srv://boris123:alkaloid123@cluster0-1q0yi.mongodb.net/test?retryWrites=true&w=majority";

// get Post
router.get('/', async (req, res) => {
	console.log("get all messages");
	await loadPostsCollection(function(dbCollection){
			dbCollection.find({}).toArray(function(err,result){
				res.send(result);
			});
		});
		  
	});
// add Post
router.put('/', async (req, res) => {
	console.log("on message");
	await loadPostsCollection(function(dbCollection){
			console.log(req.body.text);
		 	dbCollection.insertOne({
				user: req.body.text[0],
				text: req.body.text[1],
				createdAt: new Date()
			 	});
		});
		res.status(201).send();
	});
// delete Post
router.delete("/:id", async(req, res)=> {
	await loadPostsCollection(function(dbCollection){
		 dbCollection.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
		});
	res.status(200).send();
});
// get the collection from a database 
async function loadPostsCollection(
    successCallback){
	mongodb.MongoClient.connect(dbConnectionUrl,function(err, dbInstance){
			const dbObject = dbInstance.db('chatmessages');
        		const dbCollection = dbObject.collection('messages');
			successCallback(dbCollection);	 
	});

}

module.exports = router;
