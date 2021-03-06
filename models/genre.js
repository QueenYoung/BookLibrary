const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let genreSchema = new Schema({
  name: {
    type: String,
    min: 3,
    max: 100
  }
});

genreSchema
  .virtual('url')
  .get(function () {
    return `/catalog/genre/${this._id}`
  });

module.exports = mongoose.model('Genre', genreSchema);