const express = require('express');
var countries = require('./countries.json');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/test', (req, res) => {
  res.send('api works at test');
});

router.get('/countries',function(req, res){
	//res.json({"test":"Hey! I am response from Node!"});
  console.log(req);
	res.json(countries);
});

module.exports = router;
