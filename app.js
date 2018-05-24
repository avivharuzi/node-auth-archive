const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://127.0.0.1:27017/auth');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

routes(app);

module.exports = app;
