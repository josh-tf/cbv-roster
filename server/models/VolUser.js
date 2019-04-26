// VolUser.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var VolUser = new Schema({
  username: {
    type: String
  },
  full_name: {
      type: String
  }
},{
    collection: 'volunteers'
});

module.exports = mongoose.model('VolUser', VolUser);