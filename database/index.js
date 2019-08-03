var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we\'re connected!')
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});

var octoSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  line1: String,
  line2: String,
  city: String,
  state: String,
  zipcode: Number,
  phoneNumber: Number,
  credit: Number,
  exp: Number,
  cvv: Number,
  billing: Number
});

var Octo = mongoose.model('Octo', octoSchema);

module.exports = Octo;
