const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const computer = require('./routes/computer')
const errorHandler = require('./middlewares/error');

dotenv.config({ path: './config/config.env' });

connectDB()

const app = express();

app.use(bodyParser.json());

app.use(errorHandler)
app.use('/computer', computer)

const PORT = process.env.PORT || 5001

const server = app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`)
    server.close(() => process.exit(1))
})