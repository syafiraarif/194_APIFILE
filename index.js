const express = require('express');
const connectDatabase = require('./config/db');
const apiRoute = require('./routes/api');

const app = express();
const PORT = 3000;
