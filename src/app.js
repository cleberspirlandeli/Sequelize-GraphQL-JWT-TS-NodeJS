require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();

// mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

require('./routes/allRoutes')(app);

module.exports = app;