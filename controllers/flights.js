const Flight = require('../Models/Flight')


module.exports = {
    new: newFlight,
    index,
    create,
    show
}



function show(req, res){
    Flight.findById(req.params.id, function(err, flightLog) {
        if(err){
			console.log('======================err')
			console.log(err);
			console.log('==========================================')

			return res.send('err creating check the terminal')
		}
        console.log(flightLog)
        res.render('flights/show', {flight: flightLog})
    })
}
function newFlight (req, res) {
    res.render('flights/new')
    
}

function index(req, res){
    Flight.find({}, function (err, flightLogs){
        console.log('______________THIS IS WHAT YOU WANT TO SEE____________')
        console.log(flightLogs)
        console.log('__________________________')
        res.render('flights/index', {flights: flightLogs})
})
}

function create(req, res){
    console.log(req.body, '<<<<<<< this is what i want to add')


    Flight.create(req.body, function(err, flightLog){
        if(err){
			console.log('======================err')
			console.log(err);
			console.log('==========================================')

			return res.send('err creating check the terminal')
		}
		console.log('=============== Below is the movieDoc from the db');
		console.log(flightLog);
		console.log('==========================================');

		// respond to the client
		res.redirect('/')
    });
}   

