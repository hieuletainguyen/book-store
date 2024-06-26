const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/routes');
const book_routes = require("./routes/book_routes");
const account_routes = require("./routes/account_routes")

const port = 9897;

var corsOptions = {
    origin:  "*" ,
    optionsSuccessStatus: 204
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);
app.use(book_routes);
app.use(account_routes);


app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});

module.exports = app;