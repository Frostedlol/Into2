var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log("kukkuluuruu!");
});

router.get('/toka', function(request,response)
{
  response.send("olenpa toka hyvinkin");
  console.log("Tokapa tietenkin");

});

module.exports = router;
