const { response } = require('express');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('UI JUMA!');
  console.log("no terve");
});

router.get('/toka', function(request,response)
{
  response.send("olenpa toka hyvinkin");
  console.log("Tokapa tietenkin");

});

router.get('/toka/:nimi', function(request,response)
{
  response.send("Ui juma "+request.params.nimi);
  console.log(request.params.nimi);

});
router.post('/', function(request,response) {
  response.send(request.body);
});

module.exports = router;

