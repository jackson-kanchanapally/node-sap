var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/', function (req, res) {
  res.send('Get a user post request')
})

router.put('/', function (req, res) {
  res.send('Get a user put request!')
})

router.delete('/', function (req, res) {
  res.send('Get a user delete request!')
})
module.exports = router;
