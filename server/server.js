// server.js

const express = require('express');
const app = express();
const port = 4200;

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const cors = require('cors');
const config = require('./database/db')

const VolUserRouter = require('./routes/VolUserRouter');

mongoose.connect(config.db).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database' +err)
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/voluser', VolUserRouter);

app.listen(port, function(){
  console.log('Server is running on Port:',port);
});