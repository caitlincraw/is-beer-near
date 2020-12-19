require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path")
// const cors = require("cors");

const app = express();

// let corsOptions = {
//   origin: "http://localhost:3000"
// };

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// let server know to serve our react project 
app.use(express.static(path.join(__dirname, 'frontend/build')))

// sync server to db
const db = require("./models");
db.sequelize.sync();

// routers
const beerRoutes = require('./routers/beers');

app.use('/beers', beerRoutes);

// test route
app.get("/server/hello", (req, res) => {
  res.json({ message: "Welcome to Beer is Near." });
});

// catch-all route that always points to index.html file. Needs to be after all other routes that return data.


app.get('/*',(req, res) => {
  res.sendFile(path.join(__dirname + '/frontend/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

// set port, listen for requests
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});