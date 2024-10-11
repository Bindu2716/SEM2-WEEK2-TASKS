// routes/eventRoutes.js

const express = require('express');
const eventController = require('../controllers/eventController');
const router = express.Router();

router.post('/create', eventController.createEvent); // Create a new event
router.get('/all', eventController.getAllEvents); // Fetch all events
router.post('/register', eventController.registerForEvent); // Register for an event
router.delete('/:eventId', eventController.deleteEvent); // Delete an event

module.exports = router;
