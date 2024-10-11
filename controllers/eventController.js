// controllers/eventController.js

// Simulated event data (instead of database access)
let events = [];

// Create a new event
exports.createEvent = (req, res) => {
  const eventData = req.body;
  eventData.id = events.length + 1; // Assign an ID to the event
  events.push(eventData); // Add to the event list
  res.status(201).json({ success: true, message: 'Event created successfully', event: eventData });
};

// Get all events
exports.getAllEvents = (req, res) => {
  res.status(200).json({ success: true, events });
};

// Register for an event (no actual registration logic for simplicity)
exports.registerForEvent = (req, res) => {
  const { userId, eventId } = req.body;
  res.status(200).json({ success: true, message: `User ${userId} registered for event ${eventId}` });
};

// Delete an event
exports.deleteEvent = (req, res) => {
  const { eventId } = req.params;
  events = events.filter(event => event.id != eventId); // Remove event from the list
  res.status(200).json({ success: true, message: `Event ${eventId} deleted successfully` });
};
