const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// --- Middleware ---
// Enable Cross-Origin Resource Sharing
app.use(cors());
// Enable express to parse JSON bodies from POST/PUT requests
app.use(express.json());

// --- Database Connection ---
// We will connect to MongoDB. For now, I'll use a placeholder URI.
// In a real application, this should be stored in an environment variable.
const dbURI = 'mongodb://localhost:27017/simple-oa';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully.'))
    .catch(err => console.log('MongoDB connection error:', err));


// --- Routes ---
// We will define our authentication routes in a separate file.
app.use('/api/auth', require('./routes/auth'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/tasks', require('./routes/tasks'));

// --- Server Startup ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
