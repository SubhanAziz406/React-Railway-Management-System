const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/auth', authRoutes);

// Root Path
app.get('/', (req, res) => {
  res.send('Group XYZ - Railway Management System - Authentication Server');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Authentication Server running on port ${PORT}`);
});
