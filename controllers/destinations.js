const Flight = require('../Models/Flight')

module.exports = {
    create
}

// creating a review
function create(req, res){
	// first check the contents of the form
	// console.log('========================');
	// console.log(req.body, " <- content of the form");
	// console.log('=========================')
	// // check for the movie id in the params
	// console.log('========================');
	// console.log(req.params.id, ' <req.params.id aka(the movie id)')
	// console.log('========================');


	// NOW We need to use our model to take the contents of the form (req.body)
	// and put them in the database

	// One Movie to many reviews
	// adding a review to A movie

	// 1. Find the movie we want to add the review!
	// req.params.id is the movie id
	Flight.findById(req.params.id, function(err, flightLog){

		if(err){
			console.log(err)
			return res.send('error from create reviews check the terminal')
		}
        
		// console.log('========================');
		// console.log(movieDoc, " <- movie from the database!")
		// console.log('========================');

        // 2. add the review to the movieDoc reviews array
        flightLog.destinations.push(req.body);
        flightLog.save(function (err) {
            console.log(flightLog)
            // res.redirect(`/movies/${req.params.id}`)
        });

        res.redirect(`/flights/${req.params.id}`)
		
	})
};
