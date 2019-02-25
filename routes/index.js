var express = require("express");
var router = express.Router();

/* GET home page. */
router.post("/createMessage", function(req, res, next) {
  res.send("Hola");
});

router.get("/getMessages", function(req, res, next) {
	console.log("get Messages!!!!!");
  res.send([
  		{text:"Freddy"}
  	]);
});

module.exports = router;
