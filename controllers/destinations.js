const Flight = require('../Models/Flight')

module.exports = {
    create
}

// creating a review
function create(req, res){
	// first check the contents of the form
	console.log('========================');
	console.log(req.body);
	console.log('=========================')
	


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
        
		
        // 2. add the review to the movieDoc reviews array
        flightLog.destinations.push(req.body);
        flightLog.save(function (err) {
            console.log(flightLog)
            // res.redirect(`/movies/${req.params.id}`)
        });

        res.redirect(`/flights/${req.params.id}`)
		
	})
};
