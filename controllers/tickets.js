const Flight = require('../Models/Flight')
const Ticket = require('../Models/ticket')

module.exports = {
	new: newTicket,
	create
}


function create(req, res) {
	console.log(req.params.id, '--------------------this is params id')
	req.body.flight = req.params.id

	Ticket.create(req.body, function (err, ticketDoc) {

		if (err) {
			console.log("======================err");
			console.log(err);
			console.log("==========================================");

			return res.send("err creating check the terminal");
		}
		console.log("=============== THIS SHOULD BE MY TICKET INFO");
		console.log(ticketDoc);
		console.log("==========================================");

		// respond to the client
		res.redirect(`/flights/${req.params.id}`)
	});

}

function newTicket(req, res) {
	res.render('tickets/new', { flight: req.params.id });
}
