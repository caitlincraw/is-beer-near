require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// sync server to db
const db = require("./models");
db.sequelize.sync();

// routers
const beerRoutes = require('./routers/beers');
const breweryRoutes = require('./routers/breweries');

app.use('/beers', beerRoutes);
app.use('/breweries', breweryRoutes);

// test route
app.get("/server/hello", (req, res) => {
  res.json({ message: "Welcome to Beer is Near." });
});

// set port, listen for requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});