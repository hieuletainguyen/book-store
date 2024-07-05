const express = require('express');
const app = express();
const cors = require('cors');
const book_routes = require("./routes/book_routes");
const account_routes = require("./routes/account_routes")
const cookieParser = require('cookie-parser');
const port = 9897;

var corsOptions = {
    origin: 'http://localhost:3000'|| 'http://127.0.0.1:3000',
    optionsSuccessStatus: 204,
    credentials: true
}
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json());
app.use(book_routes);
app.use(account_routes);


app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});

module.exports = app;