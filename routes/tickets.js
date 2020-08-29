const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

router.get('/flights/:id/tickets/new', ticketsCtrl.new)
router.post('/flights/:id/tickets', ticketsCtrl.create);


//route has to match the show ejs 
module.exports = router;