const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./routes');
const dbConnection = require('./db');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.use(cors())

// Connect to the database
dbConnection.connectMongoDB();

// Use API routes
app.use('/', apiRoutes);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
