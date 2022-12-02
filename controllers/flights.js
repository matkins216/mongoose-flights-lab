const Flight = require('../Models/Flight')
const Ticket = require('../Models/ticket')


module.exports = {
    new: newFlight,
    index,
    create,
    show
}

// async function show(req, res){
//     const flightLog = await Flight.findById(req.params.id);
// }

function show(req, res) {
    Flight.findById(req.params.id, function (err, flightLog) {

        Ticket.find({ flight: flightLog }, function (err, ticketsDoc) {
            console.log(ticketsDoc, ' <----- ticket information')
            console.log(flightLog)
            res.render('flights/show', { flight: flightLog, tickets: ticketsDoc })
        })

    })
}

function newFlight(req, res) {
    res.render('flights/new')

}

function index(req, res) {
    Flight.find({}, function (err, flightLogs) {
        console.log('______________THIS IS WHAT YOU WANT TO SEE____________')
        console.log(flightLogs)
        console.log('__________________________')
        res.render('flights/index', { flights: flightLogs })
    })
}

function create(req, res) {
    console.log(req.body, '<<<<<<< this is what i want to add')


    Flight.create(req.body, function (err, flightLog) {
        if (err) {
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

