var express = require('express');
var router = express.Router();

// /* GET home page. */
//router.get('/', function(req, res, next) {
//res.render('index', { title: 'Express' });
//});
//module.exports = router;
// '/' is a rout
//render goes and se in views folder

router.get('/', function (req, res) {
  res.send('hello world!')
})

router.post('/', function (req, res) {
  res.send('Get a post request')
})

router.put('/', function (req, res) {
  res.send('Get a put request!')
})

router.delete('/', function (req, res) {
  res.send('Get a delete request!')
})

module.exports = router;