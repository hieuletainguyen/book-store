const express = require('express');
const app = express();
const cors = require('cors');
// const controller = require('/controllers/controllers');
// const { body } = require('express-validator');
const routes = require('./routes/routes');

var corsOptions = {
    origin: process.env.CLIENT_ORIGIN || "http://localhost:3000"
}



app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);


app.listen(9897, () => {
    console.log(`Express app listening at http://localhost:9897`);
});

module.exports = app;