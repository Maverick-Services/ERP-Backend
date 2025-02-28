require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const userRoutes = require('./routes/userRoutes');
const teamRoutes = require('./routes/teamRoutes');
const taskRoutes = require('./routes/taskRoutes');
const assignedRoutes = require('./routes/assignedRoutes');
const stepRoutes = require('./routes/stepRoutes');
const requirementRoutes = require('./routes/requirementRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 8800;

// Connect to Database
connectDB();

// Middleware
app.use(express.json()); // To parse JSON requests

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/assigned', assignedRoutes);
app.use('/api/steps', stepRoutes);
app.use('/api/requirements', requirementRoutes);

// Root Route
app.get('/', (req, res) => {
    res.json("API is running");
});

// Listen to Port
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
