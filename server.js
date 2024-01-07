const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const computer = require('./routes/computer');
const tablet = require('./routes/tablet');
const hardserver = require('./routes/hardserver');
const workstation = require('./routes/workstation');
const phone = require('./routes/phone');
const firewall = require('./routes/firewall');
const errorHandler = require('./middlewares/error');


dotenv.config({ path: './config/config.env' });

connectDB()

const app = express();
app.use(cors({
    origin: '*'
}))

app.use(bodyParser.json());

app.use(errorHandler)
app.use('/computer', computer)
app.use('/tablet', tablet)
app.use('/workstation', workstation)
app.use('/hardserver', hardserver)
app.use('/phone', phone)
app.use('/firewall', firewall)

const PORT = process.env.PORT || 5001

const server = app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`)
    server.close(() => process.exit(1))
})