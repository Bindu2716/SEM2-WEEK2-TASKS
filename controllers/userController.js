// controllers/userController.js

// Simulated user data (instead of database access)
let users = [];

// User registration
exports.registerUser = (req, res) => {
  const userData = req.body;
  userData.id = users.length + 1; // Assign an ID to the user
  users.push(userData); // Add to the user list
  res.status(201).json({ success: true, message: 'User registered successfully', user: userData });
};

// User login (no password encryption or authentication for simplicity)
exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.status(200).json({ success: true, message: 'Login successful', user });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
};

// User logout
exports.logoutUser = (req, res) => {
  res.status(200).json({ success: true, message: 'Logged out successfully' });
};
