const mongoose = require("mongoose");
const express = require('express');
const cors = require('cors');
const porscheRoute = require('./routes/porsche.route');
const keys = require('./config/keys.js');
const bodyParser = require ('body-parser');

const PORT = process.env.PORT ?? 3000;
const app = express();

async function start() {

  await mongoose.connect( keys.mongoURI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
  }, console.log("MongoDB CONNECT")) 
  
  app.use(cors());

  app.use(bodyParser.json());
  app.use('/', porscheRoute);

  app.listen(PORT, () => {
      console.log(`Server has been started on port ${PORT}...`);
  })
}

start();
