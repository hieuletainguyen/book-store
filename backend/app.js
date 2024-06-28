const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/routes');

const port = 9897;

var corsOptions = {
    origin:  "*" ,
    optionsSuccessStatus: 204
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);


app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});

module.exports = app;