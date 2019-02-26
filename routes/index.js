var express = require("express");
var router = express.Router();

function connect(callback) {
	var MongoClient = require("mongodb").MongoClient;
	// Connection URL
	var url = "mongodb://localhost:27017";

	var client = new MongoClient(url);

	// Use connect method to connect to the server
	client.connect(function(err) {
		if (err !== null) {
			throw err;
		}

		var db = client.db("dbComments");
		var comments = db.collection("comments");
		console.log("Connected successfully to server");
		callback(comments, client);
	});
}

function getComments(callback) {

	connect(function (comments, client) {
		comments
	.find({})
	.limit(100)
	.toArray(function(err2, docs) {
		if (err2 !== null) {
			throw err2;
		}
		console.log("got " + docs.length + " comments");

		callback(docs);

		client.close();
		});
	})
}


function createComment(c) {
	connect(function(comments, client){
		comments.insertOne(c, function(err){
			if (err !== null) {
				throw err;
			}
			console.log("Inserted");
		});
	})
}

/* GET home page. */
router.post("/createMessage", function(req, res, next) {

	createComment({
		text:req.body.text
	});
	res.redirect("/");
	// res.send()
	// console.log("createMessage", req.body);
});

router.get("/getMessages", function(req, res, next) {
	console.log("get Messages!!!!!");

	getComments(function (docs) {
		res.send(docs);
	})
});

module.exports = router;
