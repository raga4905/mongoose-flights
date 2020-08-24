const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index, 
    show,
    delete: deleteFlight,

}

function index(req, res) {
    Flight.find({}, function (err, flights) {
        if (err) console.log(err);
        res.render('flights/index', { title: 'All Flights', flights})
        
    })
};

function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        console.log(flight)
        res.render('flights/show', { title: 'Flight Detail', flight });
    });
}

function newFlight(req, res) {
    const newFlight = new Flight();
    const dt = newFlight.departs;
    const departsDate = dt.toISOString().slice(0, 16);
    res.render('flights/new', { title: 'Add New Flight', departsDate });
};

function create(req, res) {
    // object, callback function 
    let newFlight = req.body;
    Flight.create(newFlight, function(err, flight) {
        if (err) console.log(err);
        // console.log('this is', flight)
        res.redirect('/flights');
    })
}

function deleteFlight(req, res) {
    Flight.findByIdAndDelete(req.params.id, function(err, flight) {
        res.redirect('/flights');
    });
}



// function create(req, res) {
//     for (let key in req.body) {
//         if (req.body[key].length < 2) delete req.body[key];
//     }
//     const addedFlight = new Flight(req.body);
//     addedFlight.save(function(err) {
//         //   if not null, then render to new.ejs
//         if (err) return res.render('flights/new');
//         console.log(addedFlight)
//         res.redirect('/flights');
//     })
// }