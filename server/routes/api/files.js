const express = require('express')
const fileUpload = require('express-fileupload')
const fs = require('fs')

const router = express.Router();

const mongodb = require("mongodb");

const dbConnectionUrl = "mongodb+srv://boris123:alkaloid123@cluster0-1q0yi.mongodb.net/test?retryWrites=true&w=majority";

router.use(fileUpload());

// get a file
 //var file=fs.readFileSync(`${__dirname}/uploads/storedName.txt`,'utf8');

router.get('/', (req,res)=>{
       var file=fs.readFileSync(`${__dirname}/uploads/storedName.txt`,'utf8');
       res.sendFile(`./uploads/${file}`, {root:__dirname}); 
	//res.render(`./uploads/${file}`);
})

//upload a file

router.put('/uploads', async (req, res) => {
	console.log("this is my file:", req.body.myFile)
	if(!fs.existsSync(`${__dirname}/uploads/${req.body.myFile}`)){
		await loadPostsCollection(function(dbCollection){
			dbCollection.findOne({name:req.body.myFile},function(err,result){
			if(result){
				let buffer = result.text.buffer
				fs.writeFileSync(`${__dirname}/uploads/storedName.txt`, req.body.myFile);
				fs.writeFileSync(`${__dirname}/uploads/${req.body.myFile}`, buffer);	
				//res.send([{user: result.user, link:'http://localhost:5000/api/files/', createdAt:result.createdAt}]);
				res.status(201).contentType("image/jpeg").send(buffer);
				 
			}else{
				fs.writeFileSync(`${__dirname}/uploads/storedName.txt`, 'image.jpg');
				//res.send([{user: 'admin', link:'http://localhost:5000/api/files/uploads/image.jpg', createdAt:'01/01/1970'}]);
				var buffer = fs.readFileSync(`${__dirname}/uploads/image.jpg`, { encoding: 'base64' });
				res.status(201).contentType("image/jpeg").send(buffer)
				
			}
			});
		});
	 }else{
		fs.writeFileSync(`${__dirname}/uploads/storedName.txt`, req.body.myFile);
		//res.send([{user: 'admin', link:'http://localhost:5000/api/files/', createdAt:'01/01/1970'}]);
		var buffer = fs.readFileSync(`${__dirname}/uploads/${req.body.myFile}`, { encoding: 'base64' });
		res.status(201).contentType("image/jpeg").send(buffer)
		}
	});
// add File
router.post('/', async (req, res) => {
	 let user = 'boris@gmail.com';
	 console.log(req.files.file)
	 fs.writeFileSync(`${__dirname}/uploads/${req.files.file.name}`, req.files.file.data);
	 let file = {user: user, name: req.files.file.name, file: mongodb.Binary(req.files.file.data)};
	 await loadPostsCollection(function(dbCollection){
	 	dbCollection.insertOne({
				user: file.user,
				name: file.name,
				text: file.file,
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
        		const dbCollection = dbObject.collection('files');
			successCallback(dbCollection);	 
	});

}
module.exports = router;
