const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
    // delete: deleteTicket
}

function create(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function (err, ticket) {
        res.redirect(`/flights/${ticket.flight}`)
    })
}

function newTicket(req, res) {
    console.log('HELLO', req.params.id)
    res.render('tickets/new', {
        title: 'Add Ticket',
        flight: req.params.id
    });
}

// function deleteTicket(req, res) {
//     Ticket.findByIdAndDelete(req.params.id, function (err, ticket) {
//         res.redirect(`/flights/${ticket.flight}`)
//     })
// }