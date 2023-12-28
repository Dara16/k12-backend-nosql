const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');

const app = express();

app.use(bodyParser.json());

dotenv.config({ path: './config/config.env' });

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})