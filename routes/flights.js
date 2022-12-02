var express = require('express');
var router = express.Router();
const flightCtrl = require('../controllers/flights')
const ticketCtrl = require('../controllers/tickets')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', flightCtrl.index)
router.get('/new', flightCtrl.new);
router.post('/', flightCtrl.create);
router.get('/:id', flightCtrl.show)

module.exports = router;
