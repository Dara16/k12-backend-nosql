const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');

const app = express();

app.use(bodyParser.json());

dotenv.config({ path: './config/config.env' });