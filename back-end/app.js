const express = require('express');
const app = express();
const cors = require('cors');
// const controller = require('/controllers/controllers');
// const { body } = require('express-validator');
const routes = require('./routes/routes');

var corsOptions = {
    origin: "http://localhost:5000"
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

// app.get("/init-table", controller.initTable);

// app.get("/init-database", controller.initDatabase);

// app.get('/get-books', controller.getAllBooks);

// app.post('/add-book', (req, res) => {

// })

app.listen(9898, () => {
    console.log('Server running!');
});

module.exports = app;